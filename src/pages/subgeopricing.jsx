import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';
import TotalPayChart from '../components/charts/TotalPayChart';
import TotalPayComparisonChart from '../components/charts/totalpaycomparisonchart';
import LowDemandChart from '../components/charts/lowdemandchart';
import HighDemandChart from '../components/charts/highdemandchart';
import PhillyHeatMap from '../components/charts/phillyheatmap';
import PriceOptimizer from '../components/charts/priceoptimizer';
import HexGrid from '../components/charts/heatgrid';
import HexGridLow from '../components/charts/heatgridlow';
import PhillyHeatMapL from '../components/charts/phillyheatmaplow';


const Subgeopricing = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="py-8 border-b border-gray-200">
          <p className="text-blue-600 text-sm font-medium tracking-widest mb-2">FINE TUNING</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">Accounting For Geographic Variables</h1>
          <p className="text-lg text-gray-500"></p>
        </div>

        <div className="space-y-12">
          <section>
            <SectionDivider title="01 DRIVERS HAVE STRONG DELIVERY LOCATION PREFERENCES" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Subregional Cost Hotspots</h2>
              <p className="text-gray-600 mb-8">
              Route duration pricing often needs to be highly dynamic, but this doesn’t mean that all routes within a particular duration require pricing adjustments. Delivery location is another crucial factor to consider. Variables such as traffic conditions, parking availability, and the prevalence of apartment deliveries—which are typically more challenging than suburban ones—significantly impact costs. These factors influence driver willingness and can be analyzed to identify subregional cost hotspots. By calculating the median delivery coordinates of a route and mapping the delivery area to a specific ZIP code, we can pinpoint ZIP codes that may require additional pricing adjustments.
              </p>
              <div className="w-full overflow-hidden">
                <PhillyHeatMap />
              </div>
              <div className="w-full overflow-hidden">
                <HexGrid />
              </div>
            </div>
          </section>

          <section>
            <SectionDivider title="02 MARGIN OPTIMIZATION THROUGH SUBREGIONAL PRICING ADJUSTMENTS" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Selective Pricing Adjustments at the ZIP Level</h2>
              <p className="text-gray-600 mb-8">
              By selectively applying pricing adjustments only where necessary, pricing can be optimized with greater granularity, leading to improved cost outcomes. In the chart below, we see a large reduction in base vs. clearing price differentials indicating that the subregional pricing adjustments have had their desired effect.
              </p>
              <div className="w-full overflow-hidden">
                <PhillyHeatMapL />
              </div>
              <div className="w-full overflow-hidden">
                <HexGridLow />
              </div>              
            </div>
          </section>
        </div>
      </div>
    );
};

export default Subgeopricing;