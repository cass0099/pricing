import React, { useMemo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const data = [
  { length: 0.5, oldModel: 51, newModel: 42, routeCount: 10 },
  { length: 1.0, oldModel: 46, newModel: 36, routeCount: 15 },
  { length: 1.5, oldModel: 43, newModel: 34, routeCount: 19 },
  { length: 2.0, oldModel: 41, newModel: 32, routeCount: 22 },
  { length: 2.5, oldModel: 46, newModel: 31, routeCount: 30 },
  { length: 3.0, oldModel: 32, newModel: 30, routeCount: 79 },
  { length: 3.5, oldModel: 46, newModel: 28, routeCount: 51 },
  { length: 4.0, oldModel: 43, newModel: 28, routeCount: 31 },
  { length: 4.5, oldModel: 46, newModel: 27, routeCount: 18 },
  { length: 5.0, oldModel: 24, newModel: 22, routeCount: 7 },
  { length: 5.5, oldModel: 21, newModel: 20, routeCount: 12 },
  { length: 6.0, oldModel: 22, newModel: 22, routeCount: 29 },
  { length: 6.5, oldModel: 28, newModel: 18, routeCount: 16 },
  { length: 7.0, oldModel: 20, newModel: 18, routeCount: 14 },
  { length: 7.5, oldModel: 19, newModel: 17, routeCount: 11 },
  { length: 8.0, oldModel: 18, newModel: 17, routeCount: 8 },
  { length: 8.5, oldModel: 17, newModel: 16, routeCount: 2 },
  { length: 9.0, oldModel: 17, newModel: 16, routeCount: 0 },
  { length: 9.5, oldModel: 16, newModel: 15, routeCount: 0 },
  { length: 10.0, oldModel: 16, newModel: 15, routeCount: 0 }
];


const getChartDimensions = (width) => {
  if (width < 400) return { width: 400, height: 300 };
  if (width < 640) return { width: 450, height: 350 };
  if (width < 1024) return { width: 600, height: 450 };
  return { width: 900, height: 500 };
};

const ModelComparisonChart = () => {
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

  const { xScale, yScale, yScaleRight, oldModelPath, newModelPath } = useMemo(() => {
    const xScale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 60])
      .range([innerHeight, 0]);

    const yScaleRight = d3.scaleLinear()
      .domain([0, 80])
      .range([innerHeight, 0]);

    const oldLine = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.oldModel))
      .curve(d3.curveMonotoneX);

    const newLine = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.newModel))
      .curve(d3.curveMonotoneX);
    
    return {
      xScale,
      yScale,
      yScaleRight,
      oldModelPath: oldLine(data),
      newModelPath: newLine(data)
    };
  }, [innerWidth, innerHeight]);

  const xAxis = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);
  const yAxis = useMemo(() => Array.from({ length: 13 }, (_, i) => i * 5), []);
  const yAxisRight = useMemo(() => Array.from({ length: 9 }, (_, i) => i * 10), []);

  return (
    <div ref={containerRef} className="w-full flex justify-center" style={{ minHeight: dimensions.height }}>
      <div className="w-full max-w-[900px]">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full px-4 pt-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">Model Performance Comparison</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              The new model generated immediate and clearly observable improvements in pricing performance
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
                  <g transform={`translate(${innerWidth/2 - 400}, -40)`}>
                    <g transform="translate(0, 0)">
                      <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2} strokeDasharray="5,5"/>
                      <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Market Clearing Price (new model)</text>
                    </g>
                    <g transform="translate(300, 0)">
                      <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2}/>
                      <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Market Clearing Price (old model)</text>
                    </g>
                    <g transform="translate(600, 0)">
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

                  {/* Old model line */}
                  <path
                    d={oldModelPath}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />

                  {/* New model line */}
                  <path
                    d={newModelPath}
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

export default ModelComparisonChart;