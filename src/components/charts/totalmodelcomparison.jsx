import React, { useMemo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const data = [
  { length: 0.5, oldPay: 30.0, newPay: 25.0 },
  { length: 1.0, oldPay: 40.0, newPay: 35.0 },
  { length: 1.5, oldPay: 55.0, newPay: 50.0 },
  { length: 2.0, oldPay: 75.0, newPay: 70.0 },
  { length: 2.5, oldPay: 110.0, newPay: 95.0 },
  { length: 3.0, oldPay: 95.0, newPay: 90.0 },
  { length: 3.5, oldPay: 100.0, newPay: 95.0 },
  { length: 4.0, oldPay: 160.0, newPay: 150.0 },
  { length: 4.5, oldPay: 170.0, newPay: 160.0 },
  { length: 5.0, oldPay: 205.0, newPay: 170.0 },
  { length: 5.5, oldPay: 110.0, newPay: 110.0 },
  { length: 6.0, oldPay: 120.0, newPay: 115.0 },
  { length: 6.5, oldPay: 165.0, newPay: 150.0 },
  { length: 7.0, oldPay: 135.0, newPay: 130.0 },
  { length: 7.5, oldPay: 140.0, newPay: 140.0 },
  { length: 8.0, oldPay: 145.0, newPay: 145.0 },
  { length: 8.5, oldPay: 150.0, newPay: 150.0 },
  { length: 9.0, oldPay: 155.0, newPay: 155.0 },
  { length: 9.5, oldPay: 160.0, newPay: 160.0 },
  { length: 10.0, oldPay: 165.0, newPay: 165.0 }
];

const getChartDimensions = (width) => {
  if (width < 400) return { width: 400, height: 300 };
  if (width < 640) return { width: 450, height: 350 };
  if (width < 1024) return { width: 600, height: 450 };
  return { width: 900, height: 500 };
};

const TotalModelComparisonChart = () => {
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

  const { xScale, yScale, oldPayPath, newPayPath } = useMemo(() => {
    const xScale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 250])
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.oldPay))
      .curve(d3.curveMonotoneX);

    const newLine = d3.line()
      .x(d => xScale(d.length))
      .y(d => yScale(d.newPay))
      .curve(d3.curveMonotoneX);

    return {
      xScale,
      yScale,
      oldPayPath: line(data),
      newPayPath: newLine(data)
    };
  }, [innerWidth, innerHeight]);

  const xAxis = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);
  const yAxis = useMemo(() => Array.from({ length: 6 }, (_, i) => i * 50), []);

  return (
    <div ref={containerRef} className="w-full flex justify-center" style={{ minHeight: dimensions.height }}>
      <div className="w-full max-w-[900px]">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full px-4 pt-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">Model Performance Comparison</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              The new model enabled true value-based market pricing
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
                  <g transform={`translate(${innerWidth/2 - 250}, -40)`}>
                    <g transform="translate(0, 0)">
                      <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2} strokeDasharray="5,5"/>
                      <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Total Actual Pay (new model)</text>
                    </g>
                    <g transform="translate(300, 0)">
                      <line x1={0} y1={0} x2={30} y2={0} stroke="#2563eb" strokeWidth={2}/>
                      <text x={40} y={4} className="fill-gray-600" style={{ fontSize: '12px' }}>Total Actual Pay (old model)</text>
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

                  {/* Old model line */}
                  <path
                    d={oldPayPath}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />

                  {/* New model line */}
                  <path
                    d={newPayPath}
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

                  {/* Y-axis labels */}
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
                    transform={`translate(-60, ${innerHeight / 2}) rotate(-90)`}
                    textAnchor="middle"
                    className="fill-gray-600"
                    style={{ fontSize: '14px', fontWeight: 'bold' }}
                  >
                    Base Route Pay ($)
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

export default TotalModelComparisonChart;