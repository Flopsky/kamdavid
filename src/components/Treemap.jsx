"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const InteractiveTreemap = ({ data }) => {
    const svgRef = useRef();
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        if (!data || !data.children || !Array.isArray(data.children)) return;

        const svg = d3.select(svgRef.current);
        const container = svg.node().parentNode;
        const width = container.clientWidth; // Use container width
        const height = container.clientHeight; // Use container height

        svg.selectAll('*').remove();

        data.children.sort((a, b) => {
            const sumA = Array.isArray(a.children) ? d3.sum(a.children.map((d) => d.value)) : a.value || 0;
            const sumB = Array.isArray(b.children) ? d3.sum(b.children.map((d) => d.value)) : b.value || 0;
            return sumB - sumA;
        });

        const root = d3.hierarchy(data).sum((d) => d.value);
        d3.treemap().size([width, height]).padding(0)(root);

        const greenShades = d3.scaleSequential(d3.interpolate('#00441b', '#79C67C')).domain([0, data.children.length]);

        const cells = svg
            .selectAll('g')
            .data(root.leaves())
            .enter()
            .append('g')
            .attr('transform', (d) => `translate(${d.x0},${d.y0})`);

        const rects = cells
            .append('rect')
            .attr('id', (d) => d.data.id)
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('fill', (d, i) => greenShades(i));

        const texts = cells
            .append('text')
            .attr('x', (d) => (d.x1 - d.x0) / 2)
            .attr('y', (d) => (d.y1 - d.y0) / 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .style('fill', '#ffffff')
            .text((d) => d.data.name)
            .style('font-size', (d) => {
                // Set a maximum font size
                const maxFontSize = 16; // Adjust as needed
                const baseSize = 16; // Adjust as needed

                // Calculate a scale factor based on the cell size
                const scaleFactor = Math.min((d.x1 - d.x0) / baseSize, (d.y1 - d.y0) / baseSize, 1);

                // Scale down the font size based on the scaleFactor
                const fontSize = maxFontSize * scaleFactor-3;

                // Adjust the font size for small screens
                const mobileFontSize = 3; // Adjust as needed

                return `${width < 600 ? mobileFontSize : fontSize}px`;
            })
            .call(wrapText);

        // Function to wrap text within the cell
        function wrapText(text) {
            // Your existing wrapText function remains unchanged
        }

        cells
            .on('mouseover', function (event, d) {
                // Your existing mouseover event handling code
            })
            .on('mouseout', function (event, d) {
                // Your existing mouseout event handling code
            });
    }, [data]);

    return (
        <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
            {selectedNode && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <p>Selected Node: {selectedNode.data.name}</p>
                    <p>Value: {selectedNode.value}</p>
                </div>
            )}
        </div>
    );
};

export default InteractiveTreemap;

