import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';
import TotalPayChart from '../components/charts/TotalPayChart';
import TotalPayComparisonChart from '../components/charts/totalpaycomparisonchart';
import LowDemandChart from '../components/charts/lowdemandchart';
import HighDemandChart from '../components/charts/highdemandchart';
import PriceOptimizer from '../components/charts/priceoptimizer';


const DemandPricing = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="py-8 border-b border-gray-200">
          <p className="text-blue-600 text-sm font-medium tracking-widest mb-2">REFINING THE BASE MODEL</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">Accounting For Variable Demand</h1>
          <p className="text-lg text-gray-500"></p>
        </div>

        <div className="space-y-12">
          <section>
            <SectionDivider title="01 DEMAND AS AN EXPLICIT PRICING VARIABLE" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Demand Greatly Influences The Required Clearing Price</h2>
              <p className="text-gray-600 mb-8">
              The optimal base price for a route duration is heavily influenced by package volume (delivery demand). Higher volumes for specific 
              durations may necessitate exponential increases in base pricing. The examples below show that 
              a more evenly distributed route duration count minimizes the need for such steep pricing adjustments. In contrast,
              a spike in shorter-duration routes drives the need for significantly higher pricing to balance supply and demand.

              </p>
              <div className="w-full overflow-hidden">
                <LowDemandChart />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">

              <div className="w-full overflow-hidden">
                <HighDemandChart />
              </div>
            </div>
          </section>

          <section>
            <SectionDivider title="02 INCORPORATING PREDICTIVE ELEMENTS INTO THE PRICING MODEL" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Setting Prices Based on Anticipated Demand</h2>
              <p className="text-gray-600 mb-8">
                Clearly, a pricing model that does not take into account variable demand cannot produce an optimal outcome. Fortunately, 
                demand can be predicted fairly well, so we only need to add in a component to the model that scales pricing based on historical 
                pricing performance for given route volume scenarios. For this, I built a simple Python optimizer that utilized historical data to recommend
                prices based on a set of route duration inputs. This initial recommendation system would use simple linear regression techinques
                and form the precursor for a more sophisticated Machine Learning pricing optimization model.
              </p>
              <div className="w-full overflow-hidden">
                <PriceOptimizer />
              </div>
            </div>
          </section>










          <section>
          <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Building a Machine Learning Model</h2>
          <p className="text-gray-600 mb-8">
          The example above demonstrates the application of the recommender system using a simple synthetic dataset. With real-world data, additional variables such as Market, Day of the Week, Seasonality, Holiday Flags, Weather, Delivery Area, and Client Mix must be considered. Future iterations of the optimizer could evolve into a fully developed Machine Learning application by incorporating these factors and leveraging advanced methods.
              </p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">Allowing for Even More Dynamic Changes</h3>
                <div className="space-y-3">
                  {['Ensure that outdated patterns decay naturally by using rolling windows of historical data',
                    'Continuously adapt to day of week and seasonal nuances',
                    'Consider recent price volatility or impending demand and supply shocks',



                  ].map((item, index) => (
                    <p key={index} className="text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mb-0.5"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">Model Robustness</h3>
                <div className="space-y-3">
                  {['Track prediction accuracy vs. actual clearing prices',
                    'Maintain different window sizes (e.g. 7 days, 30 days, 90 days) to find the optimum lookback window',

                  ].map((item, index) => (
                    <p key={index} className="text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mb-0.5"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">A More Sophisticated Algorithm</h3>
                <div className="space-y-3">
                  {['Experimenting with exponential lines of best fit',
                    'Considering the impact of total volume and the interrelationship between route counts across different durations',
                  ].map((item, index) => (
                    <p key={index} className="text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mb-0.5"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </section>
        </div>
      </div>
    );
};

export default DemandPricing;