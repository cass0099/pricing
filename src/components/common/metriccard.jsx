// src/components/common/MetricCard.jsx
import React from 'react';

const MetricCard = ({ label, value, change }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="text-sm text-gray-500 mb-1">{label}</div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    {change && (
      <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </div>
    )}
  </div>
);

export default MetricCard;