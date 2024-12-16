import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';
import SingleVariableChart from '../components/charts/SingleVariableChart';
import MarketClearingChart from '../components/charts/marketclearingprice';
import PriceCurveChart from '../components/charts/pricecurvechart';
import ModelComparisonChart from '../components/charts/modelcomparison';
import TotalPayChart from '../components/charts/TotalPayChart';
import TotalPayComparisonChart from '../components/charts/totalpaycomparisonchart';
import NewTotalPayComparisonChart from '../components/charts/newtotalpaycomparisonchart';
import TotalModelComparisonChart from '../components/charts/totalmodelcomparison';


const ValuePricing = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="py-8 border-b border-gray-200">
          <p className="text-blue-600 text-sm font-medium tracking-widest mb-2">ENABLING A NEW PERSPECTIVE</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">Adopting a Value-Based Pricing Methodology</h1>
          <p className="text-lg text-gray-500"></p>
        </div>

        <div className="space-y-12">
          <section>
            <SectionDivider title="01 LETTING GO OF ARBITRARY PRICING RULES" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Arbitrary Pricing Logic: A Blocker to Progress</h2>
              <p className="text-gray-600 mb-8">
              Under the existing pricing model, longer routes called for higher total pay, which made sense when duration was the sole variable. This logic was hardcoded into pricing systems based on the assumption that shorter routes offering lower total pay than longer ones was always correct. This hardcoded logic limited the flexibility to align pricing curves with actual market needs.
              </p>
              <div className="w-full overflow-hidden">
                <TotalPayChart />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Drivers Value Routes Differently</h2>
              <p className="text-gray-600 mb-8">
              The actual market-clearing price for certain route durations defied the assumption that longer routes should always be priced higher. In many cases, shorter routes required significantly higher total pay to clear due to factors like delivery location, the number of apartment stops, and delivery start time. Drivers were often willing to take longer routes for less or demanded higher compensation for shorter routes. As a result, the new pricing model needed to price routes based on drivers' willingness to take a route rather than relying on arbitrary pricing rules. 
              </p>
              <div className="w-full overflow-hidden">
                <TotalPayComparisonChart />
              </div>
            </div>
          </section>

          <section>
            <SectionDivider title="02 SHIFTING TO VALUE-BASED PRICING" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Eliminating Total Earnings Curve Limitations</h2>
              <p className="text-gray-600 mb-8">
              Removing the previous constraints enabled less desirable routes to be priced higher from the start, even if they were shorter than more desirable, lower-priced routes. Implementing a value-based pricing system made drivers indifferent to choosing between routes, helping to reduce the significant supply and demand imbalances caused by the previous pricing model.
              </p>
              <div className="w-full overflow-hidden">
                <NewTotalPayComparisonChart />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Realized Benefits</h2>
              <p className="text-gray-600 mb-8">
                Free of arbitrary constraints, these more dynamic base price curves drove additional marginal gains in pricing outcomes.
              </p>
              <div className="w-full overflow-hidden">
                <TotalModelComparisonChart />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default ValuePricing;