import React, { useMemo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const data = [
  { length: 0.5, basePrice: 38, marketPrice: 42, routeCount: 10 },
  { length: 1.0, basePrice: 34, marketPrice: 36, routeCount: 15 },
  { length: 1.5, basePrice: 31, marketPrice: 33, routeCount: 19 },
  { length: 2.0, basePrice: 30, marketPrice: 32, routeCount: 22 },
  { length: 2.5, basePrice: 29, marketPrice: 31, routeCount: 30 },
  { length: 3.0, basePrice: 28, marketPrice: 31, routeCount: 79 },
  { length: 3.5, basePrice: 27, marketPrice: 29, routeCount: 51 },
  { length: 4.0, basePrice: 27, marketPrice: 28, routeCount: 31 },
  { length: 4.5, basePrice: 26, marketPrice: 31, routeCount: 18 },
  { length: 5.0, basePrice: 25, marketPrice: 27, routeCount: 7 },
  { length: 5.5, basePrice: 19, marketPrice: 20, routeCount: 12 },
  { length: 6.0, basePrice: 18, marketPrice: 19, routeCount: 29 },
  { length: 6.5, basePrice: 22, marketPrice: 23, routeCount: 16 },
  { length: 7.0, basePrice: 17, marketPrice: 17, routeCount: 14 },
  { length: 7.5, basePrice: 17, marketPrice: 17, routeCount: 11 },
  { length: 8.0, basePrice: 16.5, marketPrice: 16.5, routeCount: 8 },
  { length: 8.5, basePrice: 16, marketPrice: 16, routeCount: 2 },
  { length: 9.0, basePrice: 15.5, marketPrice: 15.5, routeCount: 0 },
  { length: 9.5, basePrice: 15, marketPrice: 15, routeCount: 0 },
  { length: 10.0, basePrice: 14.5, marketPrice: 14.5, routeCount: 0 }
];

const getChartDimensions = (width) => {
  if (width < 400) return { width: 400, height: 300 };
  if (width < 640) return { width: 450, height: 350 };
  if (width < 1024) return { width: 600, height: 450 };
  return { width: 900, height: 500 };
};

const PriceCurveChart = () => {
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

  const margin = { top: 80, right: 80, bottom: 60, left: 60 };
  const innerWidth = Math.max(dimensions.width - margin.left - margin.right, 0);
  const innerHeight = dimensions.height - margin.top - margin.bottom;

  const { xScale, yScale, yScaleRight, basePricePath, marketPricePath, areaPath } = useMemo(() => {
    const xScale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 50])
      .range([innerHeight, 0]);

    const yScaleRight = d3.scaleLinear()
      .domain([0, 80])
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.basePrice))
      .curve(d3.curveMonotoneX);

    const marketLine = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.marketPrice))
      .curve(d3.curveMonotoneX);

    const area = d3.area()
      .x(d => xScale(d.length))
      .y0(d => yScale(d.basePrice))
      .y1(d => yScale(d.marketPrice))
      .curve(d3.curveMonotoneX);
    
      return {
        xScale,
        yScale,
        yScaleRight,
        basePricePath: line(data),
        marketPricePath: marketLine(data),
        areaPath: area(data)
      };
    }, [innerWidth, innerHeight]);
  
    const xAxis = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);
    const yAxis = useMemo(() => Array.from({ length: 11 }, (_, i) => i * 5), []);
    const yAxisRight = useMemo(() => Array.from({ length: 9 }, (_, i) => i * 10), []);
  
    return (
      <div ref={containerRef} className="w-full flex justify-center" style={{ minHeight: dimensions.height }}>
        <div className="w-full max-w-[900px]">
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="w-full px-4 pt-8 text-center">
              <h2 className="text-xl font-semibold text-blue-600">A More Dynamic Pricing Curve</h2>
              <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              The new model tightens the spread between the base price and clearing price, resulting in an overall lower market-clearing price.
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
                    {/* Legend */}
                    <g transform={`translate(${innerWidth/2 - 150}, -40)`}>
                      <g transform="translate(0, 0)">
                        <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2} strokeDasharray="5,5"/>
                        <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Market Clearing Price</text>
                      </g>
                      <g transform="translate(200, 0)">
                        <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2}/>
                        <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Base Price</text>
                      </g>
                      <g transform="translate(320, 0)">
                        <rect x={0} y={-8} width={16} height={16} fill="#f0f0f0"/>
                        <text x={26} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Route Count</text>
                      </g>
                    </g>
  
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
                        y1={yScale(tick * 5)}
                        x2={innerWidth}
                        y2={yScale(tick * 5)}
                        stroke="#f0f0f0"
                        strokeWidth={1}
                      />
                    ))}
  
                    {/* Route count bars */}
                    {data.map((d, i) => (
                      <rect
                        key={i}
                        x={xScale(d.length) - 10}
                        y={yScaleRight(d.routeCount)}
                        width={20}
                        height={innerHeight - yScaleRight(d.routeCount)}
                        fill="#f0f0f0"
                      />
                    ))}
  
                    {/* Area between lines */}
                    <path
                      d={areaPath}
                      fill="#2563eb"
                      fillOpacity={0.1}
                    />
  
                    {/* Base price line */}
                    <path
                      d={basePricePath}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
  
                    {/* Market clearing price line */}
                    <path
                      d={marketPricePath}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth={2}
                      strokeDasharray="5,5"
                    />
  
                    {/* X-axis labels */}
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
  
                    {/* Left Y-axis labels */}
                    {yAxis.map(tick => (
                      <g key={`y-${tick}`} transform={`translate(0, ${yScale(tick * 5)})`}>
                        <text
                          x={-10}
                          y={4}
                          textAnchor="end"
                          className="fill-gray-500"
                          style={{ fontSize: '12px', fontWeight: 'bold' }}
                        >
                          ${tick * 5}
                        </text>
                      </g>
                    ))}
  
                    {/* Right Y-axis labels */}
                    {yAxisRight.map(tick => (
                      <g key={`y-right-${tick}`} transform={`translate(${innerWidth}, ${yScaleRight(tick)})`}>
                        <text
                          x={10}
                          y={4}
                          textAnchor="start"
                          className="fill-gray-500"
                          style={{ fontSize: '12px', fontWeight: 'bold' }}
                        >
                          {tick}
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
                    <text
                      transform={`translate(${innerWidth + 40}, ${innerHeight / 2}) rotate(-90)`}
                      textAnchor="middle"
                      className="fill-gray-600"
                      style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                      Route Count
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
  
  export default PriceCurveChart;