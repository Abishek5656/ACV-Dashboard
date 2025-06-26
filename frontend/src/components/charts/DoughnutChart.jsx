
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Typography } from '@mui/material';

const DoughnutChart = ({ data = [], groupKey = '', title = 'ACV Donut Chart' }) => {
  const ref = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) return;

    // If raw data, group it
    let groupedData = data;
    if (groupKey && data[0] && !data[0].label) {
      const uniqueLabels = Array.from(new Set(data.map(d => d[groupKey])));
      groupedData = uniqueLabels.map(label => ({
        label,
        value: data
          .filter(d => d[groupKey] === label)
          .reduce((sum, d) => sum + d.acv, 0),
      }));
    }

    const total = groupedData.reduce((sum, d) => sum + d.value, 0);
    const width = 300, height = 300, radius = Math.min(width, height) / 2;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const tooltip = d3.select(tooltipRef.current)
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('padding', '6px 10px')
      .style('background', '#333')
      .style('color', '#fff')
      .style('border-radius', '4px')
      .style('font-size', '13px')
      .style('pointer-events', 'none')
      .style('box-shadow', '0 2px 8px rgba(0,0,0,0.2)');

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(70).outerRadius(radius);
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arcs = g.selectAll('arc')
      .data(pie(groupedData))
      .enter()
      .append('g');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .on('mouseover', function (event, d) {
        d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
        tooltip
          .style('visibility', 'visible')
          .html(`
            <strong>Type:</strong> ${d.data.label}<br/>
            <strong>Value:</strong> $${(d.data.value / 1000).toFixed(0)}K
          `);
      })
      .on('mousemove', function (event) {
        tooltip
          .style('top', (event.pageY - 50) + 'px')
          .style('left', (event.pageX + 15) + 'px');
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', 'none');
        tooltip.style('visibility', 'hidden');
      });

    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font-size', '11px')
      .text(d => `${((d.data.value / total) * 100).toFixed(0)}%`);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.4em')
      .style('font-weight', 'bold')
      .text('Total');

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .style('font-size', '13px')
      .text(`$${(total / 1000).toFixed(0)}K`);
  }, [data, groupKey]);

  if (!Array.isArray(data) || data.length === 0) {
    return <Typography align="center" color="textSecondary">No data available</Typography>;
  }

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <svg ref={ref}></svg>
      <div ref={tooltipRef}></div>
    </div>
  );
};

export default DoughnutChart;
