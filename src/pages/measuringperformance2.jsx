// src/pages/PerformancePricing.jsx
import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';
import MetricCard from '../components/common/MetricCard';
import PerformanceMetricsChart from '../components/charts/PerformanceMetricsChart';
import CostPerPackageChart from '../components/charts/cppchart';

const PerformancePricing = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <CaseStudyHeader 
        title="Performance-Based Pricing"
        subtitle="Optimizing pricing based on performance metrics"
        metric={{ value: "42%", label: "Performance Improvement" }}
      />
      
      <div className="space-y-12">
        <section>
          <SectionDivider title="METRICS" />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-4">Key Performance Indicators</h2>
            <p className="text-gray-600 mb-8">
              Analysis of performance metrics and their impact on pricing decisions.
            </p>
            <CostPerPackageChart />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <MetricCard 
                label="Efficiency Score"
                value="94%"
                change={15.2}
              />
              <MetricCard 
                label="Cost Reduction"
                value="$1.2M"
                change={8.7}
              />
              <MetricCard 
                label="Customer Retention"
                value="95%"
                change={4.3}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PerformancePricing;