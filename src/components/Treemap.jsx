"use client";
import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const InteractiveTreemap = ({ data }) => {




    const svgRef = useRef();
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        if (!data || !data.children || !Array.isArray(data.children)) return;

        const svg = d3.select(svgRef.current);
        const width = window.innerWidth; // Adjust as needed
        const height = window.innerHeight; // Adjust as needed

        svg.selectAll("*").remove();

        data.children.sort((a, b) => {
            const sumA = Array.isArray(a.children) ? d3.sum(a.children.map((d) => d.value)) : a.value || 0;
            const sumB = Array.isArray(b.children) ? d3.sum(b.children.map((d) => d.value)) : b.value || 0;
            return sumB - sumA;
        });

        const root = d3.hierarchy(data).sum((d) => d.value);
        d3.treemap().size([width, height]).padding(0)(root);

        // Generate a more condensed range of green shades
        const greenShades = d3.scaleSequential(d3.interpolate('#00441b', '#79C67C')).domain([0, data.children.length]);

        const cells = svg
            .selectAll('g')
            .data(root.leaves())
            .enter().append('g')
            .attr('transform', (d) => `translate(${d.x0},${d.y0})`);

        const rects = cells.append('rect')
            .attr('id', (d) => d.data.id)
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('fill', (d, i) => greenShades(i)); // Inverted color scale

        const texts = cells.append('text')
            .attr('x', (d) => (d.x1 - d.x0) / 2)
            .attr('y', (d) => (d.y1 - d.y0) / 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .style('font-size', '16px')
            .style('fill', '#ffffff')
            .text((d) => d.data.name);

        cells.on('mouseover', function (event, d) {
            d3.select(this)
                .select('rect')
                .raise()
                .transition()
                .duration(150)
                .attr('transform', 'scale(1.05)');

            d3.select(this)
                .select('text')
                .raise()
                .transition()
                .duration(150)
                .attr('transform', 'scale(1.05)');
        }).on('mouseout', function (event, d) {
            d3.select(this)
                .select('rect')
                .transition()
                .duration(150)
                .attr('transform', 'scale(1)');

            d3.select(this)
                .select('text')
                .transition()
                .duration(150)
                .attr('transform', 'scale(1)');
        });

    }, [data]);

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <svg ref={svgRef} width="100%" height="100%" />
            {selectedNode && (
                <div style={{ height: '100%', width: '100%' }}>
                    <p>Selected Node: {selectedNode.data.name}</p>
                    <p>Value: {selectedNode.value}</p>
                </div>
            )}
        </div>
    );
};

export default InteractiveTreemap;
