import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';
import SingleVariableChart from '../components/charts/SingleVariableChart';
import MarketClearingChart from '../components/charts/marketclearingprice';
import PriceCurveChart from '../components/charts/pricecurvechart';
import ModelComparisonChart from '../components/charts/modelcomparison';

const PerformancePricing = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="py-8 border-b border-gray-200">
          <p className="text-blue-600 text-sm font-medium tracking-widest mb-2">GETTING THE FUNDAMENTALS RIGHT</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">Building Performance-Based Pricing Curves</h1>
          <p className="text-lg text-gray-500"></p>
        </div>

        <div className="space-y-12">
          <section>
            <SectionDivider title="01 LIMITATIONS OF THE EXISTING PRICING MODEL" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">The Existing Pricing Model</h2>
              <p className="text-gray-600 mb-8">

The existing pricing model was overly simplistic, as it priced routes based solely on route length. This approach failed to consider that shorter routes often required exponentially higher hourly pricing than longer ones due to the time drivers spent traveling to the warehouse and loading packages. Additionally, the model did not account for other critical factors, such as demand and route desirability. Consequently, price adjustments were applied uniformly across the pricing curve, increasing or decreasing all prices without optimizing for the unique characteristics of individual routes.
              </p>
              <div className="w-full overflow-hidden">
                <SingleVariableChart />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">The Existing Model in Action</h2>
              <p className="text-gray-600 mb-8">
                The single-variable model resulted in significant mispricing across route durations. 
                The below chart illustrates pricing outcomes for a specific market day, showing substantial differences between 
                the average hourly clearing price and base price by route duration. Some durations required large price increases to clear (indicating base underpricing), 
                while others required no adjustments (indicating base overpricing). The shaded areas highlight the extent of underpricing for each duration. The extent of overpricing cannot be detected at this stage.
              </p>
              <div className="w-full overflow-hidden">
                <MarketClearingChart />
              </div>
            </div>
          </section>

          <section>
            <SectionDivider title="02 SHIFTING TO A MULTIVARIABLE MODEL" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Optimizing Base Pricing Curves</h2>
              <p className="text-gray-600 mb-8">
I developed a more accurate multivariable pricing model by aligning base curves with historical clearing price trends. This method allowed me to build a defacto multivariable model without needing to explicitly account for additional variables. Real-world pricing outcomes inherently reflect all influencing factors, so adjusting the price curves automatically incorporates many of these variables, providing a more accurate representation of market dynamics.
              
               
              </p>
              <div className="w-full overflow-hidden">
                <PriceCurveChart />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Model Comparison</h2>
              <p className="text-gray-600 mb-8">
              The new model improved base pricing outcomes by enabling more route sales on the evening prior to delivery day, reducing the reliance on exponential day-of-sales pricing adjustments, and providing a more cost-effective market-clearing solution.
              </p>
              <div className="w-full overflow-hidden">
                <ModelComparisonChart />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default PerformancePricing;