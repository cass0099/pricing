import React, { useMemo } from 'react';

const data = [
  {zipCode: "19102", differential: 1.00},
  {zipCode: "19103", differential: 2.00},
  {zipCode: "19104", differential: 1.00},
  {zipCode: "19105", differential: 2.00},
  {zipCode: "19106", differential: 3.00},
  {zipCode: "19107", differential: 2.00},
  {zipCode: "19108", differential: 1.00},
  {zipCode: "19109", differential: 2.00},
  {zipCode: "19110", differential: 3.00},
  {zipCode: "19111", differential: 0.00},
  {zipCode: "19112", differential: 0.00},
  {zipCode: "19113", differential: 1.00},
  {zipCode: "19114", differential: 1.00},
  {zipCode: "19115", differential: 2.00},
  {zipCode: "19116", differential: 1.00},
  {zipCode: "19117", differential: 1.00},
  {zipCode: "19118", differential: 0.00},
  {zipCode: "19119", differential: 2.00},
  {zipCode: "19120", differential: 2.00},
  {zipCode: "19121", differential: 0.00},
  {zipCode: "19122", differential: 4.00},
  {zipCode: "19123", differential: 2.00},
  {zipCode: "19124", differential: 0.00},
  {zipCode: "19125", differential: 1.00},
  {zipCode: "19126", differential: 0.00},
  {zipCode: "19127", differential: 0.00},
  {zipCode: "19128", differential: 2.00},
  {zipCode: "19129", differential: 1.00},
  {zipCode: "19130", differential: 0.00},
  {zipCode: "19131", differential: 0.00},
  {zipCode: "19132", differential: 3.00},
  {zipCode: "19133", differential: 1.00},
  {zipCode: "19134", differential: 2.00},
  {zipCode: "19135", differential: 0.00},
  {zipCode: "19136", differential: 1.00},
  {zipCode: "19137", differential: 1.00},
  {zipCode: "19138", differential: 0.00},
  {zipCode: "19139", differential: 0.00},
  {zipCode: "19140", differential: 0.00},
  {zipCode: "19141", differential: 0.00},
  {zipCode: "19142", differential: 1.00},
  {zipCode: "19143", differential: 1.00},
  {zipCode: "19144", differential: 2.00},
  {zipCode: "19145", differential: 1.00},
  {zipCode: "19146", differential: 1.00},
  {zipCode: "19147", differential: 1.00},
  {zipCode: "19148", differential: 2.00},
  {zipCode: "19149", differential: 1.00},
  {zipCode: "19150", differential: 1.00},
  {zipCode: "19151", differential: 2.00},
  {zipCode: "19152", differential: 2.00},
  {zipCode: "19153", differential: 3.00},
  {zipCode: "19154", differential: 2.00},
  {zipCode: "19155", differential: 2.00},
  {zipCode: "19156", differential: 1.00},
  {zipCode: "19157", differential: 3.00},
  {zipCode: "19158", differential: 1.00},
  {zipCode: "19159", differential: 3.00},
  {zipCode: "19160", differential: 1.00},
  {zipCode: "19161", differential: 1.00},
  {zipCode: "19162", differential: 4.00},
  {zipCode: "19163", differential: 2.00},
  {zipCode: "19164", differential: 4.00},
  {zipCode: "19165", differential: 2.00},
  {zipCode: "19166", differential: 3.00},
  {zipCode: "19167", differential: 1.00},
  {zipCode: "19168", differential: 2.00},
  {zipCode: "19169", differential: 1.00},
  {zipCode: "19170", differential: 1.00},
  {zipCode: "19171", differential: 3.00},
  {zipCode: "19172", differential: 2.00},
  {zipCode: "19173", differential: 3.00},
  {zipCode: "19174", differential: 2.00},
  {zipCode: "19175", differential: 3.00},
  {zipCode: "19176", differential: 2.00},
  {zipCode: "19177", differential: 1.00},
  {zipCode: "19178", differential: 1.00},
  {zipCode: "19179", differential: 2.00},
  {zipCode: "19180", differential: 1.00},
  {zipCode: "19181", differential: 1.00},
  {zipCode: "19182", differential: 1.00},
  {zipCode: "19183", differential: 1.00},
  {zipCode: "19184", differential: 1.00},
  {zipCode: "19185", differential: 1.00},
  {zipCode: "19186", differential: 2.00},
  {zipCode: "19187", differential: 2.00},
  {zipCode: "19188", differential: 3.00},
  {zipCode: "19189", differential: 1.00},
  {zipCode: "19190", differential: 2.00},
  {zipCode: "19191", differential: 2.00},
  {zipCode: "19192", differential: 1.00},
  {zipCode: "19193", differential: 1.00},
  {zipCode: "19194", differential: 1.00},
  {zipCode: "19195", differential: 1.00},
  {zipCode: "19196", differential: 0.00},
  {zipCode: "19197", differential: 1.00},
  {zipCode: "19198", differential: 1.00},
  {zipCode: "19199", differential: 2.00}
].sort((a, b) => a.zipCode.localeCompare(b.zipCode));

const HexGridLow = () => {
    const hexSize = 40;
    const hexWidth = hexSize * 2;
    const hexHeight = Math.sqrt(3) * hexSize;
    const columns = 10;
    
    // Calculate dimensions
    const width = columns * (hexWidth * 0.75) + hexWidth / 4;
    const rows = Math.ceil(data.length / columns);
    const height = rows * hexHeight + hexHeight / 2;
  
    // Calculate centering offset
    const gridWidth = columns * (hexWidth * 0.75);
    const xOffset = (width - gridWidth) / 2;

  // Discrete color mapping function
  const getColor = (value) => {
    if (value <= 4) return '#9fa8da';
    if (value <= 8) return '#3949ab';
    return '#db3737';
  };

  const hexPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      points.push([
        hexSize * Math.cos(angle),
        hexSize * Math.sin(angle)
      ]);
    }
    return points.map(point => point.join(',')).join(' ');
  }, [hexSize]);

  return (
    <div className="w-full flex flex-col items-center space-y-4 p-8">
      <h2 className="text-xl font-semibold text-blue-600">
      Zip Code Price Differential Breakdown
      </h2>
      <p className="text-sm text-gray-600 max-w-xl text-center">
        Underpricing hotspots have been eliminated through subregional pricing adjustments
      </p>
      
      <div className="w-full flex justify-center overflow-x-auto">
        <div className="inline-block">
          <svg 
            width={width} 
            height={height}
            viewBox={`${-hexWidth/2} ${-hexHeight/2} ${width + hexWidth} ${height + hexHeight}`}
          >
            {data.map((d, i) => {
              const col = i % columns;
              const row = Math.floor(i / columns);
              const x = col * (hexWidth * 0.75);
              const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0);
              
              return (
                <g key={d.zipCode} transform={`translate(${x},${y})`}>
                  <polygon
                    points={hexPoints}
                    fill={getColor(d.differential)}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    fill="white"
                    className="text-xs font-bold"
                    style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}
                  >
                    {d.zipCode}
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    fill="white"
                    className="text-xs"
                    style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}
                  >
                    ${d.differential.toFixed(2)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-6 mb-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#9fa8da]"></div>
            <span className="ml-2 text-xs" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>$0.00 - $4.00</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#3949ab]"></div>
            <span className="ml-2 text-xs" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>$4.01 - $8.00</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#db3737]"></div>
            <span className="ml-2 text-xs" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>$8.01 - $12.00</span>
          </div>
        </div>
        <div className="text-xs mt-4" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>
          Price Differential ($/hr)
        </div>
      </div>
    </div>
  );
};

export default HexGridLow;