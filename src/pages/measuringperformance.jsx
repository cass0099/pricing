import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';
import CostPerPackageChart from '../components/charts/cppchart';
import ModelComparisonBoxPlot from '../components/charts/modelcomparisonboxplot';
import CostPerPackageSingleChart from '../components/charts/cppsinglechart';


const MeasuringPerformance = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="py-8 border-b border-gray-200">
          <p className="text-blue-600 text-sm font-medium tracking-widest mb-2">EVALUATING IMPACT</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">Building Performance Analysis Mechanisms</h1>
          <p className="text-lg text-gray-500"></p>
        </div>

        <div className="space-y-12">
          <section>
            <SectionDivider title="01 ESTABLISHING THE BASELINE PRIMARY KPI" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Cost Per Package: The Ultimate Arbiter of Pricing Performance</h2>
              <p className="text-gray-600 mb-8">
              The primary KPI for evaluating marketplace efficiency is the <strong>Driver Cost Per Package</strong> metric at the market-day level. This metric represents the delivery cost component of the company's P&L and indicates whether the company is scaling effectively. 

On high-volume days, increased route density leads to more efficient delivery routes, reflected in a higher <strong>Packages per Hour</strong> operational metric. Market days with higher Packages per Hour typically achieve lower Driver Cost Per Package. 

The chart below highlights historical market-day outcomes, showing a clear correlation between higher Packages per Hour and lower Cost Per Package. Any adjustments to the pricing model should aim to deliver results that outperform these historical benchmarks.
              </p>
              <div className="w-full overflow-hidden">
                <CostPerPackageSingleChart />
              </div>
            </div>


          </section>

          <section>
            <SectionDivider title="02 MEASURING EFFECTS ON THE PRIMARY KPI" />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">The New Model Consistently Improves Outcomes</h2>
              <p className="text-gray-600 mb-8">
              By analyzing the outcomes of the new model, it was evident that it performed well. Although the rollout of the new pricing model was not structured as an A/B test, its impact could still be assessed. The immediate change in performance, along with the absence of other significant operational changes during that period, indicated that the new model was the primary driver of the observed improvements.
              </p>
              <div className="w-full overflow-hidden">
                <CostPerPackageChart />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">Simple Stastistical Analysis Confirmed The Improvement</h2>
              <p className="text-gray-600 mb-8">
                By aligning base curves with historical clearing price trends, I developed more accurate pricing models 
                without the need to explicitly add additional variables. Real-world pricing outcomes inherently account 
                for all influencing factors, enabling the refined model to better reflect market dynamics.
              </p>
              <div className="w-full overflow-hidden">
                <ModelComparisonBoxPlot />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default MeasuringPerformance;