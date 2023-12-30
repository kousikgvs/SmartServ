import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graphcards = ({array}) => {
  const svgRef = useRef(null);

  useEffect(() => {
      const data = array;

    const margin = { top: 40, right: 40, bottom: 70, left: 60 };
    const width = 900 - margin.left - margin.right; 
    const height = 600 - margin.top - margin.bottom; 

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleBand()
      .domain(data.map(d => d.city))
      .range([0, height])
      .padding(0.4);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([0, width]);

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.city))
      .attr("height", y.bandwidth())
      .attr("x", 0)
      .attr("width", d => x(d.value))
      .attr("fill", "lightgreen");

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3.axisBottom(x)
          .tickFormat(() => "") 
      )
      .selectAll("text")
      .attr("transform", "translate(-10,10) rotate(-45)") 
      .style("text-anchor", "end");

    svg.append("g") 
      .call(d3.axisLeft(y)); 

    svg.append("line")
      .attr("class", "dotted-line")
      .attr("x1", 0)
      .attr("y1", height)
      .attr("x2", width)
      .attr("y2", height)
      .attr("stroke", "black")
      .attr("stroke-dasharray", "2,2");

    for (let i = 0; i <= d3.max(data, d => d.value); i += 10000) {
      svg.append("line")
        .attr("class", "dotted-line")
        .attr("x1", x(i))
        .attr("y1", 0)
        .attr("x2", x(i))
        .attr("y2", height)
        .attr("stroke", "black")
        .attr("stroke-dasharray", "2,2");

      svg.append("text")
        .attr("transform", `translate(${x(i)},${height + 20}) rotate(-15)`)
        .text(i)
        .style("text-anchor", "end");
    }
  }, []);

  return (
    <svg className='graph-cards' ref={svgRef}></svg>
  );
};

export default Graphcards;
