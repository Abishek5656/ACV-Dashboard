import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Typography } from '@mui/material';

const BarChart = ({ data, groupKey = '', title = 'Stacked Bar Chart' }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) return;

    const grouped = d3.group(data, d => d.closed_fiscal_quarter);
    const quarters = Array.from(grouped.keys());
    const groupValues = Array.from(new Set(data.map(d => d[groupKey])));

    const stackData = quarters.map(q => {
      const quarterData = grouped.get(q) || [];
      const result = { quarter: q };
      groupValues.forEach(type => {
        result[type] = quarterData.find(d => d[groupKey] === type)?.acv || 0;
      });
      return result;
    });

    const stack = d3.stack().keys(groupValues)(stackData);

    const width = 700;
    const height = 350;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', height);

    const x = d3.scaleBand()
      .domain(quarters)
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([
        0,
        d3.max(stackData, d => groupValues.reduce((sum, key) => sum + d[key], 0)) * 1.1
      ])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal()
      .domain(groupValues)
      .range(d3.schemeCategory10);

    // Tooltip div
    const tooltip = d3.select('body')
      .append('div')
      .style('position', 'absolute')
      .style('background', '#fff')
      .style('border', '1px solid #ccc')
      .style('padding', '8px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('opacity', 0)
      .style('border-radius', '4px')
      .style('box-shadow', '0px 2px 6px rgba(0,0,0,0.2)');

    // Draw axes
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => `$${(d / 1000).toFixed(0)}K`));

    // Draw bars with tooltip
    svg.append('g')
      .selectAll('g')
      .data(stack)
      .join('g')
      .attr('fill', d => color(d.key))
      .selectAll('rect')
      .data(d => d.map(v => ({ ...v, key: d.key })))
      .join('rect')
      .attr('x', d => x(d.data.quarter) ?? 0)
      .attr('y', d => y(d[1]))
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
      .on('mouseover', function (event, d) {
        d3.select(this).attr('stroke', '#000').attr('stroke-width', 1.5);

        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html(`
          <strong>Type:</strong> ${d.key}<br/>
          <strong>Quarter:</strong> ${d.data.quarter}<br/>
          <strong>ACV:</strong> $${(d[1] - d[0]).toLocaleString()}
        `);
      })
      .on('mousemove', function (event) {
        tooltip
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', 'none');
        tooltip.transition().duration(300).style('opacity', 0);
      });

    // Labels on top of bars
    svg.selectAll('.label')
      .data(stackData)
      .enter()
      .append('text')
      .attr('x', d => (x(d.quarter) ?? 0) + x.bandwidth() / 2)
      .attr('y', d => y(groupValues.reduce((sum, key) => sum + d[key], 0)) - 8)
      .attr('text-anchor', 'middle')
      .attr('fill', '#000')
      .attr('font-size', '12px')
      .text(d => `$${(groupValues.reduce((sum, key) => sum + d[key], 0) / 1000).toFixed(0)}K`);

    // Cleanup tooltip on unmount
    return () => {
      tooltip.remove();
    };
  }, [data, groupKey]);

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <Typography align="center" color="textSecondary" variant="body2">
        No data available
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;


