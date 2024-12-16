import React, { useMemo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const data = [
  { length: 0.5, basePrice: 33 },
  { length: 1.5, basePrice: 25 },
  { length: 2.5, basePrice: 23 },
  { length: 3.5, basePrice: 22 },
  { length: 4.5, basePrice: 21 },
  { length: 5.5, basePrice: 20 },
  { length: 6.5, basePrice: 19 },
  { length: 7.5, basePrice: 18 },
  { length: 8.5, basePrice: 17 },
  { length: 9.5, basePrice: 16 },
  { length: 10.5, basePrice: 15 }
];

const getChartDimensions = (width) => {
  if (width < 400) {
    return { width: 400, height: 300 };
  }
  if (width < 640) {
    return { width: 450, height: 350 };
  }
  if (width < 1024) {
    return { width: 600, height: 450 };
  }
  return { width: 900, height: 500 };
};

const SingleVariableChart = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState(() => getChartDimensions(900));

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const dims = getChartDimensions(entry.contentRect.width);
          setDimensions(dims);
        }
      });

      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const margin = { top: 80, right: 120, bottom: 60, left: 60 };
  const innerWidth = Math.max(dimensions.width - margin.left - margin.right, 0);
  const innerHeight = dimensions.height - margin.top - margin.bottom;

  const { xScale, yScale, linePath } = useMemo(() => {
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.length)])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.basePrice)])
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.basePrice))
      .curve(d3.curveMonotoneX);

    return {
      xScale,
      yScale,
      linePath: line(data)
    };
  }, [innerWidth, innerHeight]);

  const xAxis = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);
  const yAxis = useMemo(() => Array.from({ length: 9 }, (_, i) => i * 5 + 15), []);

  return (
    <div ref={containerRef} className="w-full flex justify-center" style={{ minHeight: dimensions.height }}>
      <div className="w-full max-w-[900px]">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full px-4 pt-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">Existing Base Pricing Model</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              Linear model based on a single variable: route length
            </p>
          </div>
          
          <div className="w-full overflow-x-auto pb-4">
            <div style={{ minWidth: '400px', width: '100%' }}>
              <svg 
                width={dimensions.width} 
                height={dimensions.height}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                preserveAspectRatio="xMinYMin"
                style={{ fontFamily: 'Courier New' }}
              >
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                  {/* Grid lines */}
                  {xAxis.map(tick => (
                    <line
                      key={`x-${tick}`}
                      x1={xScale(tick)}
                      y1={0}
                      x2={xScale(tick)}
                      y2={innerHeight}
                      stroke="#f0f0f0"
                      strokeWidth={1}
                    />
                  ))}
                  {yAxis.map(tick => (
                    <line
                      key={`y-${tick}`}
                      x1={0}
                      y1={yScale(tick)}
                      x2={innerWidth}
                      y2={yScale(tick)}
                      stroke="#f0f0f0"
                      strokeWidth={1}
                    />
                  ))}

                  {/* Base price line */}
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />

                  {/* Axes */}
                  {xAxis.map(tick => (
                    <g key={`x-${tick}`} transform={`translate(${xScale(tick)}, ${innerHeight})`}>
                      <text
                        y={20}
                        textAnchor="middle"
                        className="fill-gray-500"
                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                      >
                        {tick}
                      </text>
                    </g>
                  ))}
                  {yAxis.map(tick => (
                    <g key={`y-${tick}`} transform={`translate(0, ${yScale(tick)})`}>
                      <text
                        x={-10}
                        y={4}
                        textAnchor="end"
                        className="fill-gray-500"
                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                      >
                        ${tick}
                      </text>
                    </g>
                  ))}

                  {/* Axis labels */}
                  <text
                    x={innerWidth / 2}
                    y={innerHeight + 35}
                    textAnchor="middle"
                    className="fill-gray-600"
                    style={{ fontSize: '14px', fontWeight: 'bold' }}
                  >
                    Route Length (hours)
                  </text>
                  <text
                    transform={`translate(-40, ${innerHeight / 2}) rotate(-90)`}
                    textAnchor="middle"
                    className="fill-gray-600"
                    style={{ fontSize: '14px', fontWeight: 'bold' }}
                  >
                    Base Route Pay ($/hour)
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVariableChart;