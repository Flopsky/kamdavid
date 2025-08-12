"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';

// Highly-polished, responsive treemap with better color scale, labels, rounding, and tooltips
const InteractiveTreemap = ({
  data,
  valueAccessor = (d) => (typeof d.value === 'number' ? d.value : 0),
}) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const isDarkMode = () =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  // memoize a flattened list of leaves to compute color domains efficiently
  const leavesValues = useMemo(() => {
    if (!data || !Array.isArray(data.children)) return [];
    const root = d3.hierarchy(data).sum((d) => valueAccessor(d));
    return root.leaves().map((l) => l.value || 0);
  }, [data, valueAccessor]);

  const getColorScale = () => {
    if (!leavesValues.length) return () => '#94a3b8'; // slate-400 fallback
    const min = d3.min(leavesValues) ?? 0;
    const max = d3.max(leavesValues) ?? 0;
    const hasPos = max > 0;
    const hasNeg = min < 0;

    if (hasPos && hasNeg) {
      const maxAbs = Math.max(Math.abs(min), Math.abs(max));
      const diverging = d3.scaleDiverging(d3.interpolateRdYlGn).domain([-maxAbs, 0, maxAbs]);
      return (v) => diverging(v || 0);
    }

    if (hasPos) {
      const seq = d3.scaleSequential(d3.interpolateGreens).domain([min <= 0 ? 0 : min, max]);
      return (v) => seq(Math.max(0, v || 0));
    }

    // all non-positive
    const seqRed = d3.scaleSequential(d3.interpolateReds).domain([Math.abs(max), Math.abs(min)]);
    return (v) => seqRed(Math.abs(v || 0));
  };

  useEffect(() => {
    if (!data || !Array.isArray(data.children)) return;
    const container = containerRef.current;
    const svgEl = svgRef.current;
    const tooltipEl = tooltipRef.current;
    if (!container || !svgEl || !tooltipEl) return;

    const svg = d3.select(svgEl);
    const gRoot = svg.append('g');

    const render = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;

      // clear previous
      gRoot.selectAll('*').remove();

      svg.attr('viewBox', `0 0 ${width} ${height}`).attr('preserveAspectRatio', 'xMidYMid meet');

      // build hierarchy and layout
      const root = d3
        .hierarchy(data)
        .sum((d) => valueAccessor(d))
        .sort((a, b) => (b.value || 0) - (a.value || 0));

      const treemap = d3
        .treemap()
        .size([width, height])
        .paddingInner(4)
        .paddingOuter(4)
        .round(true)
        .tile(d3.treemapSquarify.ratio(1.4));

      treemap(root);

      const color = getColorScale();
      const dark = isDarkMode();

      const strokeColor = dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
      const highlightStroke = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)';

      const leaves = root.leaves();
      const totalValue = Math.max(1, root.value || 1);

      const cell = gRoot
        .selectAll('g.cell')
        .data(leaves, (d) => d.data?.name || Math.random())
        .join((enter) => enter.append('g').attr('class', 'cell'))
        .attr('transform', (d) => `translate(${d.x0},${d.y0})`)
        .attr('role', 'listitem')
        .attr('tabindex', 0);

      cell
        .append('rect')
        .attr('width', (d) => Math.max(0, d.x1 - d.x0))
        .attr('height', (d) => Math.max(0, d.y1 - d.y0))
        .attr('fill', (d) => color(d.value || 0))
        .attr('rx', 8)
        .attr('ry', 8)
        .attr('stroke', strokeColor)
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .duration(350)
        .attr('opacity', 1);

      // labels
      const text = cell.append('text').attr('x', 8).attr('y', 10).attr('pointer-events', 'none');

      text.each(function (d) {
        const group = d3.select(this);
        const cellWidth = Math.max(0, d.x1 - d.x0) - 12; // padding
        const cellHeight = Math.max(0, d.y1 - d.y0) - 12;

        if (cellWidth < 40 || cellHeight < 20) {
          group.remove();
          return;
        }

        const area = cellWidth * cellHeight;
        const base = Math.max(10, Math.min(18, Math.sqrt(area) / 14));
        const name = unescapeHtml(d.data?.name || '');
        const value = d.value || 0;
        const bg = d3.color(color(value));
        const textFill = bg ? getContrastingTextColor(bg) : (dark ? '#e6e6e6' : '#0f172a');
        group.attr('fill', textFill);

        // two-line label: name (wrapped) + value
        wrapSvgText(group, name, cellWidth, base, cellHeight, 2);

        const valueLine = group
          .append('tspan')
          .attr('x', 8)
          .attr('dy', base * 1.2)
          .attr('fill', dark ? '#cbd5e1' : '#334155')
          .style('font-size', `${Math.max(10, base * 0.9)}px`)
          .text(formatValue(value));

        // If value line overflows available height, remove it
        const bbox = this.getBBox();
        if (bbox.height > cellHeight) {
          valueLine.remove();
        }
      });

      // interactions
      cell
        .on('mousemove', function (event, d) {
          const rect = this.querySelector('rect');
          if (rect) {
            d3.select(rect).attr('stroke', highlightStroke).attr('stroke-width', 2);
          }

          const { left, top } = container.getBoundingClientRect();
          const x = event.clientX - left;
          const y = event.clientY - top;

          tooltipEl.innerHTML = `
            <div class="font-medium">${escapeHtml(unescapeHtml(d.data?.name || ''))}</div>
            <div class="text-xs opacity-80">Value: ${escapeHtml(formatValue(d.value || 0))}</div>
            <div class="text-xs opacity-60">Share: ${((100 * (d.value || 0)) / totalValue).toFixed(1)}%</div>
          `;
          tooltipEl.style.left = `${x + 12}px`;
          tooltipEl.style.top = `${y + 12}px`;
          tooltipEl.classList.remove('hidden');
        })
        .on('mouseleave', function () {
          const rect = this.querySelector('rect');
          if (rect) {
            d3.select(rect).attr('stroke', strokeColor).attr('stroke-width', 1);
          }
          tooltipEl.classList.add('hidden');
        })
        .on('click', (_, d) => setSelectedNode(d));
    };

    // initial render
    render();

    // observe container resize
    const ro = new ResizeObserver(() => {
      render();
    });
    ro.observe(container);

    return () => {
      ro.disconnect();
      svg.selectAll('*').remove();
    };
  }, [data, leavesValues]);

  return (
    <div ref={containerRef} className="treemap-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg ref={svgRef} className="w-full h-full" role="img" aria-label="Treemap chart" />
      <div ref={tooltipRef} className="treemap-tooltip hidden" />
      {selectedNode && (
        <div
          className="pointer-events-none absolute bottom-3 left-3 rounded-md border px-3 py-2 text-xs"
          style={{
            background: 'hsl(var(--popover))',
            color: 'hsl(var(--popover-foreground))',
            borderColor: 'hsl(var(--border))',
          }}
        >
          <div className="font-medium">{selectedNode?.data?.name}</div>
          <div className="opacity-80">Value: {formatValue(selectedNode?.value || 0)}</div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTreemap;

// helpers
function wrapSvgText(selection, text, maxWidth, fontSize, maxHeight, maxLines = 2) {
  // Inspired by Mike Bostock's wrap, adapted for tspans + line cap
  const words = (text || '').split(/\s+/).filter(Boolean);
  let line = [];
  let lineNumber = 0;
  const lineHeight = fontSize * 1.2;

  selection
    .attr('font-size', `${fontSize}px`)
    .attr('font-weight', 600)
    .attr('dominant-baseline', 'hanging')
    .attr('text-anchor', 'start');

  let tspan = selection.append('tspan').attr('x', 8).attr('dy', 0);
  for (let i = 0; i < words.length; i += 1) {
    line.push(words[i]);
    tspan.text(line.join(' '));
    if (tspan.node() && tspan.node().getComputedTextLength() > maxWidth) {
      line.pop();
      tspan.text(line.join(' '));
      line = [words[i]];
      lineNumber += 1;
      if (lineNumber >= maxLines) {
        // add ellipsis if over max lines
        const current = tspan.text();
        truncateTspanToWidth(tspan, `${current}…`, maxWidth);
        return;
      }
      tspan = selection
        .append('tspan')
        .attr('x', 8)
        .attr('dy', lineHeight)
        .text(words[i]);
      if (lineHeight * (lineNumber + 1) > maxHeight) {
        // not enough height, remove last line
        tspan.remove();
        return;
      }
    }
  }
}

function truncateTspanToWidth(tspan, text, maxWidth) {
  tspan.text(text);
  const node = tspan.node();
  if (!node) return;
  while (node.getComputedTextLength() > maxWidth && text.length > 1) {
    text = text.slice(0, -2) + '…';
    tspan.text(text);
  }
}

function formatValue(v) {
  const formatter = d3.format('~s');
  return v >= 0 ? `+${formatter(v)}` : formatter(v);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescapeHtml(str) {
  return String(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'');
}

function getContrastingTextColor(bgColor) {
  // YIQ contrast formula
  const r = bgColor.r;
  const g = bgColor.g;
  const b = bgColor.b;
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 140 ? '#0f172a' : '#f8fafc';
}

