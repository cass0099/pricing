// src/components/common/CaseStudyHeader.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudyHeader = ({ title, subtitle, metric }) => (
  <div className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-24 bg-gradient-to-b from-blue-50 to-white px-4">
    <p className="text-blue-600 text-sm font-medium tracking-widest mb-8">
      PRICING STRATEGY CASE STUDY
    </p>
    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
    <p className="text-xl text-gray-500 max-w-xl">{subtitle}</p>
    {metric && (
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <div className="text-4xl font-bold text-blue-600">{metric.value}</div>
        <div className="text-sm text-gray-500">{metric.label}</div>
      </div>
    )}
    <div className="mt-12 animate-bounce">
      <ArrowUpRight className="text-blue-600" size={24} />
    </div>
  </div>
);

export default CaseStudyHeader;