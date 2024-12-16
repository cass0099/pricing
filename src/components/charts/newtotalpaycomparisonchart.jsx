import React, { useMemo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const data = [
  { length: 0.5, baseTotalPay: 17.5, actualTotalPay: 25.0, routeCount: 10 },
  { length: 1.0, baseTotalPay: 30.0, actualTotalPay: 35.0, routeCount: 15 },
  { length: 1.5, baseTotalPay: 37.5, actualTotalPay: 45.0, routeCount: 19 },
  { length: 2.0, baseTotalPay: 49.0, actualTotalPay: 60.0, routeCount: 22 },
  { length: 2.5, baseTotalPay: 60.0, actualTotalPay: 80.0, routeCount: 30 },
  { length: 3.0, baseTotalPay: 90.0, actualTotalPay: 95.0, routeCount: 79 },
  { length: 3.5, baseTotalPay: 110.0, actualTotalPay: 120.0, routeCount: 51 },
  { length: 4.0, baseTotalPay: 130.0, actualTotalPay: 140.0, routeCount: 31 },
  { length: 4.5, baseTotalPay: 145.0, actualTotalPay: 170.0, routeCount: 18 },
  { length: 5.0, baseTotalPay: 110.0, actualTotalPay: 120.0, routeCount: 7 },
  { length: 5.5, baseTotalPay: 130.0, actualTotalPay: 135.0, routeCount: 12 },
  { length: 6.0, baseTotalPay: 140.0, actualTotalPay: 155.0, routeCount: 29 },
  { length: 6.5, baseTotalPay: 130.0, actualTotalPay: 135.0, routeCount: 16 },
  { length: 7.0, baseTotalPay: 135.0, actualTotalPay: 135.0, routeCount: 14 },
  { length: 7.5, baseTotalPay: 140.0, actualTotalPay: 140.0, routeCount: 11 },
  { length: 8.0, baseTotalPay: 145.0, actualTotalPay: 145.0, routeCount: 8 },
  { length: 8.5, baseTotalPay: 150.0, actualTotalPay: 150.0, routeCount: 2 },
  { length: 9.0, baseTotalPay: 155.0, actualTotalPay: 155.0, routeCount: 0 },
  { length: 9.5, baseTotalPay: 160.0, actualTotalPay: 160.0, routeCount: 0 },
  { length: 10.0, baseTotalPay: 165.0, actualTotalPay: 165.0, routeCount: 0 }
];

const getChartDimensions = (width) => {
  if (width < 400) return { width: 400, height: 300 };
  if (width < 640) return { width: 450, height: 350 };
  if (width < 1024) return { width: 600, height: 450 };
  return { width: 900, height: 500 };
};

const NewTotalPayComparisonChart = () => {
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

  const margin = { top: 80, right: 80, bottom: 60, left: 80 };
  const innerWidth = Math.max(dimensions.width - margin.left - margin.right, 0);
  const innerHeight = dimensions.height - margin.top - margin.bottom;

  const { xScale, yScale, yScaleRight, baseTotalPayPath, actualTotalPayPath, areaPath } = useMemo(() => {
    const xScale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 200])  // Changed to match the image
      .range([innerHeight, 0]);

    const yScaleRight = d3.scaleLinear()
      .domain([0, 80])
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.baseTotalPay))
      .curve(d3.curveMonotoneX);

    const actualLine = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.actualTotalPay))
      .curve(d3.curveMonotoneX);

    const area = d3.area()
      .x(d => xScale(d.length))
      .y0(d => yScale(d.baseTotalPay))
      .y1(d => yScale(d.actualTotalPay))
      .curve(d3.curveMonotoneX);

    return {
      xScale,
      yScale,
      yScaleRight,
      baseTotalPayPath: line(data),
      actualTotalPayPath: actualLine(data),
      areaPath: area(data)
    };
  }, [innerWidth, innerHeight]);

  // Modified y-axis ticks to match the image ($50 intervals up to $200)
  const xAxis = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);
  const yAxis = useMemo(() => Array.from({ length: 5 }, (_, i) => i * 50), []);
  const yAxisRight = useMemo(() => Array.from({ length: 9 }, (_, i) => i * 10), []);

  return (
    <div ref={containerRef} className="w-full flex justify-center" style={{ minHeight: dimensions.height }}>
      <div className="w-full max-w-[900px]">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full px-4 pt-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">Total Actual Pay vs. Base Total Pay</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              The actual market clearing price includes the additional day of sales pricing required to sell all routes
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
                  {/* Legend with fixed spacing */}
                  <g transform={`translate(${innerWidth/2 - 250}, -40)`}>
                    <g transform="translate(0, 0)">
                      <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2} strokeDasharray="5,5"/>
                      <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Total Actual Pay Per Route</text>
                    </g>
                    <g transform="translate(230, 0)">
                      <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2}/>
                      <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Base Total Pay Per Route</text>
                    </g>
                    <g transform="translate(460, 0)">
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
                      y1={yScale(tick)}
                      x2={innerWidth}
                      y2={yScale(tick)}
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

                  {/* Base total pay line */}
                  <path
                    d={baseTotalPayPath}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />

                  {/* Actual total pay line */}
                  <path
                    d={actualTotalPayPath}
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

                  {/* Left Y-axis labels with fixed spacing */}
                  {yAxis.map(tick => (
                    <g key={`y-${tick}`} transform={`translate(0, ${yScale(tick)})`}>
                      <text
                        x={-15}
                        y={4}
                        textAnchor="end"
                        className="fill-gray-500"
                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                      >
                        ${tick}
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

                  {/* Axis labels with fixed spacing */}
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
                    transform={`translate(-60, ${innerHeight / 2}) rotate(-90)`}
                    textAnchor="middle"
                    className="fill-gray-600"
                    style={{ fontSize: '14px', fontWeight: 'bold' }}
                  >
                    Base Route Pay ($)
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

export default NewTotalPayComparisonChart;