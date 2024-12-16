// src/components/common/SectionDivider.jsx
import React from 'react';

const SectionDivider = ({ title }) => (
  <div className="relative py-8">
    <div className="absolute left-0 top-0 w-px h-full bg-[#D4CBC3]" />
    <h2 className="text-[#9C8E80] font-mono text-sm tracking-wider pl-8">
      {title}
    </h2>
  </div>
);

export default SectionDivider;
