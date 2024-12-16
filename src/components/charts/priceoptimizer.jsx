import React from 'react';
import PriceOptimizerImage from './price-optimizer.png';

const PriceOptimizer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[900px]">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full px-4 pt-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">A Simple Price Optimizer</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
              The initial price optimizer formed the underpinnings of a machine learning price optimization model and would automate
              the experimental pricing recommendation process
            </p>
          </div>
          
          <div className="w-full p-4 bg-white rounded-lg shadow">
            <img 
              src={PriceOptimizerImage}
              alt="Heatmap showing price differentials across Philadelphia ZIP codes"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceOptimizer;