import React from 'react';
import phillyHeatmaplow from './philly-heatmaplow.png';

const PhillyHeatMapL = () => {
  const ColorScaleLegend = () => {
    const gradientStops = [
      { offset: "0%", color: "#9fa8da" },
      { offset: "50%", color: "#3949ab" },
      { offset: "100%", color: "#db3737" }
    ];

    return (
      <div className="flex flex-col items-center mt-6 mb-4">
        <div className="relative h-4 w-48">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="colorScale" x1="0%" y1="0%" x2="100%">
                {gradientStops.map((stop, i) => (
                  <stop
                    key={i}
                    offset={stop.offset}
                    stopColor={stop.color}
                  />
                ))}
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#colorScale)" rx="2" ry="2" />
          </svg>
          <div className="absolute w-full flex justify-between mt-2">
            <span style={{ fontFamily: 'Courier New', fontWeight: 'bold' }} className="text-xs text-gray-600">$0.00</span>
            <span style={{ fontFamily: 'Courier New', fontWeight: 'bold' }} className="text-xs text-gray-600">$6.00</span>
            <span style={{ fontFamily: 'Courier New', fontWeight: 'bold' }} className="text-xs text-gray-600">$12.00</span>
          </div>
        </div>
        <div style={{ fontFamily: 'Courier New', fontWeight: 'bold' }} className="text-xs text-gray-600 mt-6">
          Price Differential ($/hr)
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[900px]">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full px-4 pt-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">New Base vs. Clearing Price Differential</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              Pricing adjustments have eliminated base underpricing hotspots
            </p>
          </div>
          
          <div className="w-full p-4 bg-white rounded-lg shadow">
            <img 
              src={phillyHeatmaplow}
              alt="Heatmap showing price differentials across Philadelphia ZIP codes"
              className="w-full h-auto rounded-lg"
            />
            <ColorScaleLegend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhillyHeatMapL;