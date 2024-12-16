import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const CostPerPackageChart = () => {
  const svgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // Clear any existing content
    d3.select(svgRef.current).selectAll('*').remove();

    // Data
    const data = [
    {Packages_Per_Hour: 6.18, Cost_Per_Package_old: 3.2, Cost_per_package_new: 2.85},
    {Packages_Per_Hour: 6.18, Cost_Per_Package_old: 3.33, Cost_per_package_new: 2.98},
    {Packages_Per_Hour: 6.21, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 6.23, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.24, Cost_Per_Package_old: 3.23, Cost_per_package_new: 2.88},
    {Packages_Per_Hour: 6.24, Cost_Per_Package_old: 3.07, Cost_per_package_new: 2.72},
    {Packages_Per_Hour: 6.27, Cost_Per_Package_old: 3.37, Cost_per_package_new: 3.02},
    {Packages_Per_Hour: 6.27, Cost_Per_Package_old: 3.34, Cost_per_package_new: 2.99},
    {Packages_Per_Hour: 6.29, Cost_Per_Package_old: 3.36, Cost_per_package_new: 3.01},
    {Packages_Per_Hour: 6.34, Cost_Per_Package_old: 3.38, Cost_per_package_new: 3.03},
    {Packages_Per_Hour: 6.35, Cost_Per_Package_old: 3.16, Cost_per_package_new: 2.81},
    {Packages_Per_Hour: 6.35, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.35, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 6.35, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.37, Cost_Per_Package_old: 3.21, Cost_per_package_new: 2.86},
    {Packages_Per_Hour: 6.38, Cost_Per_Package_old: 3.35, Cost_per_package_new: 3.00},
    {Packages_Per_Hour: 6.4, Cost_Per_Package_old: 3.37, Cost_per_package_new: 3.02},
    {Packages_Per_Hour: 6.43, Cost_Per_Package_old: 3.31, Cost_per_package_new: 2.96},
    {Packages_Per_Hour: 6.51, Cost_Per_Package_old: 3.35, Cost_per_package_new: 3.00},
    {Packages_Per_Hour: 6.52, Cost_Per_Package_old: 3.14, Cost_per_package_new: 2.79},
    {Packages_Per_Hour: 6.54, Cost_Per_Package_old: 3.29, Cost_per_package_new: 2.94},
    {Packages_Per_Hour: 6.54, Cost_Per_Package_old: 3.33, Cost_per_package_new: 2.98},
    {Packages_Per_Hour: 6.56, Cost_Per_Package_old: 3.3, Cost_per_package_new: 2.95},
    {Packages_Per_Hour: 6.57, Cost_Per_Package_old: 3.44, Cost_per_package_new: 3.09},
    {Packages_Per_Hour: 6.57, Cost_Per_Package_old: 3.21, Cost_per_package_new: 2.86},
    {Packages_Per_Hour: 6.59, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.61, Cost_Per_Package_old: 2.87, Cost_per_package_new: 2.52},
    {Packages_Per_Hour: 6.61, Cost_Per_Package_old: 3.33, Cost_per_package_new: 2.98},
    {Packages_Per_Hour: 6.61, Cost_Per_Package_old: 3.07, Cost_per_package_new: 2.72},
    {Packages_Per_Hour: 6.62, Cost_Per_Package_old: 3.31, Cost_per_package_new: 2.96},
    {Packages_Per_Hour: 6.67, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.67, Cost_Per_Package_old: 3.41, Cost_per_package_new: 3.06},
    {Packages_Per_Hour: 6.7, Cost_Per_Package_old: 3.36, Cost_per_package_new: 3.01},
    {Packages_Per_Hour: 6.71, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 6.72, Cost_Per_Package_old: 3.19, Cost_per_package_new: 2.84},
    {Packages_Per_Hour: 6.72, Cost_Per_Package_old: 3.23, Cost_per_package_new: 2.88},
    {Packages_Per_Hour: 6.72, Cost_Per_Package_old: 3.45, Cost_per_package_new: 3.10},
    {Packages_Per_Hour: 6.72, Cost_Per_Package_old: 3.37, Cost_per_package_new: 3.02},
    {Packages_Per_Hour: 6.73, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.73, Cost_Per_Package_old: 3.07, Cost_per_package_new: 2.72},
    {Packages_Per_Hour: 6.74, Cost_Per_Package_old: 3.39, Cost_per_package_new: 3.04},
    {Packages_Per_Hour: 6.75, Cost_Per_Package_old: 3.3, Cost_per_package_new: 2.95},
    {Packages_Per_Hour: 6.75, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.76, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.82, Cost_Per_Package_old: 3.37, Cost_per_package_new: 3.02},
    {Packages_Per_Hour: 6.82, Cost_Per_Package_old: 3.21, Cost_per_package_new: 2.86},
    {Packages_Per_Hour: 6.83, Cost_Per_Package_old: 3.33, Cost_per_package_new: 2.98},
    {Packages_Per_Hour: 6.84, Cost_Per_Package_old: 3.2, Cost_per_package_new: 2.85},
    {Packages_Per_Hour: 6.87, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 6.88, Cost_Per_Package_old: 3.42, Cost_per_package_new: 3.07},
    {Packages_Per_Hour: 6.88, Cost_Per_Package_old: 3.43, Cost_per_package_new: 3.08},
    {Packages_Per_Hour: 6.9, Cost_Per_Package_old: 3.03, Cost_per_package_new: 2.68},
    {Packages_Per_Hour: 6.91, Cost_Per_Package_old: 3.12, Cost_per_package_new: 2.77},
    {Packages_Per_Hour: 6.92, Cost_Per_Package_old: 3.41, Cost_per_package_new: 3.06},
    {Packages_Per_Hour: 7.0, Cost_Per_Package_old: 3.14, Cost_per_package_new: 2.79},
    {Packages_Per_Hour: 7.0, Cost_Per_Package_old: 3.31, Cost_per_package_new: 2.96},
    {Packages_Per_Hour: 7.0, Cost_Per_Package_old: 3.33, Cost_per_package_new: 2.98},
    {Packages_Per_Hour: 7.02, Cost_Per_Package_old: 3.01, Cost_per_package_new: 2.66},
    {Packages_Per_Hour: 7.04, Cost_Per_Package_old: 2.95, Cost_per_package_new: 2.60},
    {Packages_Per_Hour: 7.04, Cost_Per_Package_old: 3.29, Cost_per_package_new: 2.94},
    {Packages_Per_Hour: 7.04, Cost_Per_Package_old: 3.08, Cost_per_package_new: 2.73},
    {Packages_Per_Hour: 7.05, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.06, Cost_Per_Package_old: 3.13, Cost_per_package_new: 2.78},
    {Packages_Per_Hour: 7.09, Cost_Per_Package_old: 3.15, Cost_per_package_new: 2.80},
    {Packages_Per_Hour: 7.1, Cost_Per_Package_old: 3.23, Cost_per_package_new: 2.88},
    {Packages_Per_Hour: 7.1, Cost_Per_Package_old: 3.23, Cost_per_package_new: 2.88},
    {Packages_Per_Hour: 7.1, Cost_Per_Package_old: 3.15, Cost_per_package_new: 2.80},
    {Packages_Per_Hour: 7.1, Cost_Per_Package_old: 3.07, Cost_per_package_new: 2.72},
    {Packages_Per_Hour: 7.12, Cost_Per_Package_old: 3.43, Cost_per_package_new: 3.08},
    {Packages_Per_Hour: 7.12, Cost_Per_Package_old: 3.17, Cost_per_package_new: 2.82},
    {Packages_Per_Hour: 7.12, Cost_Per_Package_old: 3.31, Cost_per_package_new: 2.96},
    {Packages_Per_Hour: 7.13, Cost_Per_Package_old: 3.3, Cost_per_package_new: 2.95},
    {Packages_Per_Hour: 7.14, Cost_Per_Package_old: 2.92, Cost_per_package_new: 2.57},
    {Packages_Per_Hour: 7.18, Cost_Per_Package_old: 3.17, Cost_per_package_new: 2.82},
    {Packages_Per_Hour: 7.18, Cost_Per_Package_old: 3.31, Cost_per_package_new: 2.96},
    {Packages_Per_Hour: 7.19, Cost_Per_Package_old: 2.78, Cost_per_package_new: 2.43},
    {Packages_Per_Hour: 7.21, Cost_Per_Package_old: 3.46, Cost_per_package_new: 3.11},
    {Packages_Per_Hour: 7.21, Cost_Per_Package_old: 3.21, Cost_per_package_new: 2.86},
    {Packages_Per_Hour: 7.22, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.22, Cost_Per_Package_old: 3.12, Cost_per_package_new: 2.77},
    {Packages_Per_Hour: 7.22, Cost_Per_Package_old: 3.07, Cost_per_package_new: 2.72},
    {Packages_Per_Hour: 7.22, Cost_Per_Package_old: 3.1, Cost_per_package_new: 2.75},
    {Packages_Per_Hour: 7.23, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.25, Cost_Per_Package_old: 3.25, Cost_per_package_new: 2.90},
    {Packages_Per_Hour: 7.28, Cost_Per_Package_old: 3.25, Cost_per_package_new: 2.90},
    {Packages_Per_Hour: 7.28, Cost_Per_Package_old: 3.22, Cost_per_package_new: 2.87},
    {Packages_Per_Hour: 7.28, Cost_Per_Package_old: 3.19, Cost_per_package_new: 2.84},
    {Packages_Per_Hour: 7.29, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.32, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.37, Cost_Per_Package_old: 3.05, Cost_per_package_new: 2.70},
    {Packages_Per_Hour: 7.37, Cost_Per_Package_old: 3.16, Cost_per_package_new: 2.81},
    {Packages_Per_Hour: 7.38, Cost_Per_Package_old: 3.24, Cost_per_package_new: 2.89},
    {Packages_Per_Hour: 7.38, Cost_Per_Package_old: 3.14, Cost_per_package_new: 2.79},
    {Packages_Per_Hour: 7.4, Cost_Per_Package_old: 3.15, Cost_per_package_new: 2.80},
    {Packages_Per_Hour: 7.41, Cost_Per_Package_old: 2.98, Cost_per_package_new: 2.63},
    {Packages_Per_Hour: 7.42, Cost_Per_Package_old: 3.06, Cost_per_package_new: 2.71},
    {Packages_Per_Hour: 7.42, Cost_Per_Package_old: 3.08, Cost_per_package_new: 2.73},
    {Packages_Per_Hour: 7.44, Cost_Per_Package_old: 2.94, Cost_per_package_new: 2.59},
    {Packages_Per_Hour: 7.46, Cost_Per_Package_old: 3.09, Cost_per_package_new: 2.74},
    {Packages_Per_Hour: 7.48, Cost_Per_Package_old: 3.05, Cost_per_package_new: 2.70},
    {Packages_Per_Hour: 7.53, Cost_Per_Package_old: 3.23, Cost_per_package_new: 2.88},
    {Packages_Per_Hour: 7.54, Cost_Per_Package_old: 3.32, Cost_per_package_new: 2.97},
    {Packages_Per_Hour: 7.56, Cost_Per_Package_old: 3.23, Cost_per_package_new: 2.88},
    {Packages_Per_Hour: 7.56, Cost_Per_Package_old: 3.36, Cost_per_package_new: 3.01},
    {Packages_Per_Hour: 7.56, Cost_Per_Package_old: 3.37, Cost_per_package_new: 3.02},
    {Packages_Per_Hour: 7.57, Cost_Per_Package_old: 2.92, Cost_per_package_new: 2.57},
    {Packages_Per_Hour: 7.58, Cost_Per_Package_old: 3.31, Cost_per_package_new: 2.96},
    {Packages_Per_Hour: 7.58, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 7.59, Cost_Per_Package_old: 2.9, Cost_per_package_new: 2.55},
    {Packages_Per_Hour: 7.59, Cost_Per_Package_old: 3.26, Cost_per_package_new: 2.91},
    {Packages_Per_Hour: 7.6, Cost_Per_Package_old: 3.43, Cost_per_package_new: 3.08},
    {Packages_Per_Hour: 7.62, Cost_Per_Package_old: 3.03, Cost_per_package_new: 2.68},
    {Packages_Per_Hour: 7.63, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 7.64, Cost_Per_Package_old: 3.44, Cost_per_package_new: 3.09},
    {Packages_Per_Hour: 7.68, Cost_Per_Package_old: 3.09, Cost_per_package_new: 2.74},
    {Packages_Per_Hour: 7.68, Cost_Per_Package_old: 2.99, Cost_per_package_new: 2.64},
    {Packages_Per_Hour: 7.69, Cost_Per_Package_old: 3.47, Cost_per_package_new: 3.12},
    {Packages_Per_Hour: 7.69, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.72, Cost_Per_Package_old: 3.25, Cost_per_package_new: 2.90},
    {Packages_Per_Hour: 7.72, Cost_Per_Package_old: 3.18, Cost_per_package_new: 2.83},
    {Packages_Per_Hour: 7.74, Cost_Per_Package_old: 2.95, Cost_per_package_new: 2.60},
    {Packages_Per_Hour: 7.75, Cost_Per_Package_old: 3.37, Cost_per_package_new: 3.02},
    {Packages_Per_Hour: 7.77, Cost_Per_Package_old: 3.08, Cost_per_package_new: 2.73},
    {Packages_Per_Hour: 7.8, Cost_Per_Package_old: 2.92, Cost_per_package_new: 2.57},
    {Packages_Per_Hour: 7.82, Cost_Per_Package_old: 3.24, Cost_per_package_new: 2.89},
    {Packages_Per_Hour: 7.82, Cost_Per_Package_old: 2.94, Cost_per_package_new: 2.59},
    {Packages_Per_Hour: 7.82, Cost_Per_Package_old: 2.93, Cost_per_package_new: 2.58},
    {Packages_Per_Hour: 7.87, Cost_Per_Package_old: 2.94, Cost_per_package_new: 2.59},
    {Packages_Per_Hour: 7.89, Cost_Per_Package_old: 3.39, Cost_per_package_new: 3.04},
    {Packages_Per_Hour: 7.9, Cost_Per_Package_old: 2.96, Cost_per_package_new: 2.61},
    {Packages_Per_Hour: 7.92, Cost_Per_Package_old: 2.9, Cost_per_package_new: 2.55},
    {Packages_Per_Hour: 7.92, Cost_Per_Package_old: 3.11, Cost_per_package_new: 2.76},
    {Packages_Per_Hour: 7.93, Cost_Per_Package_old: 2.87, Cost_per_package_new: 2.52},
    {Packages_Per_Hour: 7.94, Cost_Per_Package_old: 3.32, Cost_per_package_new: 2.97},
    {Packages_Per_Hour: 7.94, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 7.95, Cost_Per_Package_old: 3.19, Cost_per_package_new: 2.84},
    {Packages_Per_Hour: 7.96, Cost_Per_Package_old: 3.0, Cost_per_package_new: 2.65},
    {Packages_Per_Hour: 7.96, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 7.97, Cost_Per_Package_old: 3.22, Cost_per_package_new: 2.87},
    {Packages_Per_Hour: 7.97, Cost_Per_Package_old: 3.21, Cost_per_package_new: 2.86},
    {Packages_Per_Hour: 7.97, Cost_Per_Package_old: 3.03, Cost_per_package_new: 2.68},
    {Packages_Per_Hour: 7.98, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 7.98, Cost_Per_Package_old: 3.01, Cost_per_package_new: 2.66},
    {Packages_Per_Hour: 7.99, Cost_Per_Package_old: 3.13, Cost_per_package_new: 2.78},
    {Packages_Per_Hour: 8.0, Cost_Per_Package_old: 2.97, Cost_per_package_new: 2.62},
    {Packages_Per_Hour: 8.03, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 8.07, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 8.09, Cost_Per_Package_old: 2.94, Cost_per_package_new: 2.59},
    {Packages_Per_Hour: 8.12, Cost_Per_Package_old: 2.84, Cost_per_package_new: 2.49},
    {Packages_Per_Hour: 8.13, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 8.14, Cost_Per_Package_old: 3.15, Cost_per_package_new: 2.80},
    {Packages_Per_Hour: 8.15, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 8.15, Cost_Per_Package_old: 2.9, Cost_per_package_new: 2.55},
    {Packages_Per_Hour: 8.17, Cost_Per_Package_old: 3.05, Cost_per_package_new: 2.70},
    {Packages_Per_Hour: 8.18, Cost_Per_Package_old: 2.67, Cost_per_package_new: 2.32},
    {Packages_Per_Hour: 8.18, Cost_Per_Package_old: 2.78, Cost_per_package_new: 2.43},
    {Packages_Per_Hour: 8.2, Cost_Per_Package_old: 3.03, Cost_per_package_new: 2.68},
    {Packages_Per_Hour: 8.2, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 8.2, Cost_Per_Package_old: 2.92, Cost_per_package_new: 2.57},
    {Packages_Per_Hour: 8.21, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 8.21, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 8.21, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 8.23, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 8.23, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 8.24, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 8.24, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 8.25, Cost_Per_Package_old: 3.11, Cost_per_package_new: 2.76},
    {Packages_Per_Hour: 8.26, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 8.3, Cost_Per_Package_old: 2.81, Cost_per_package_new: 2.46},
    {Packages_Per_Hour: 8.32, Cost_Per_Package_old: 2.81, Cost_per_package_new: 2.46},
    {Packages_Per_Hour: 8.32, Cost_Per_Package_old: 2.97, Cost_per_package_new: 2.62},
    {Packages_Per_Hour: 8.32, Cost_Per_Package_old: 2.79, Cost_per_package_new: 2.44},
    {Packages_Per_Hour: 8.33, Cost_Per_Package_old: 2.94, Cost_per_package_new: 2.59},
    {Packages_Per_Hour: 8.34, Cost_Per_Package_old: 2.82, Cost_per_package_new: 2.47},
    {Packages_Per_Hour: 8.37, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 8.43, Cost_Per_Package_old: 2.91, Cost_per_package_new: 2.56},
    {Packages_Per_Hour: 8.43, Cost_Per_Package_old: 2.99, Cost_per_package_new: 2.64},
    {Packages_Per_Hour: 8.43, Cost_Per_Package_old: 2.88, Cost_per_package_new: 2.53},
    {Packages_Per_Hour: 8.44, Cost_Per_Package_old: 2.82, Cost_per_package_new: 2.47},
    {Packages_Per_Hour: 8.46, Cost_Per_Package_old: 2.91, Cost_per_package_new: 2.56},
    {Packages_Per_Hour: 8.47, Cost_Per_Package_old: 2.72, Cost_per_package_new: 2.37},
    {Packages_Per_Hour: 8.47, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 8.47, Cost_Per_Package_old: 2.72, Cost_per_package_new: 2.37},
    {Packages_Per_Hour: 8.48, Cost_Per_Package_old: 2.87, Cost_per_package_new: 2.52},
    {Packages_Per_Hour: 8.49, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 8.5, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 8.51, Cost_Per_Package_old: 2.82, Cost_per_package_new: 2.47},
    {Packages_Per_Hour: 8.52, Cost_Per_Package_old: 2.88, Cost_per_package_new: 2.53},
    {Packages_Per_Hour: 8.52, Cost_Per_Package_old: 2.75, Cost_per_package_new: 2.4},
    {Packages_Per_Hour: 8.52, Cost_Per_Package_old: 2.57, Cost_per_package_new: 2.22},
    {Packages_Per_Hour: 8.54, Cost_Per_Package_old: 3.05, Cost_per_package_new: 2.70},
    {Packages_Per_Hour: 8.57, Cost_Per_Package_old: 2.57, Cost_per_package_new: 2.22},
    {Packages_Per_Hour: 8.59, Cost_Per_Package_old: 2.95, Cost_per_package_new: 2.60},
    {Packages_Per_Hour: 8.59, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 8.59, Cost_Per_Package_old: 2.8, Cost_per_package_new: 2.45},
    {Packages_Per_Hour: 8.6, Cost_Per_Package_old: 2.55, Cost_per_package_new: 2.20},
    {Packages_Per_Hour: 8.62, Cost_Per_Package_old: 2.52, Cost_per_package_new: 2.17},
    {Packages_Per_Hour: 8.63, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 8.63, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 8.66, Cost_Per_Package_old: 2.78, Cost_per_package_new: 2.43},
    {Packages_Per_Hour: 8.67, Cost_Per_Package_old: 2.85, Cost_per_package_new: 2.50},
    {Packages_Per_Hour: 8.67, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 8.68, Cost_Per_Package_old: 2.75, Cost_per_package_new: 2.40},
    {Packages_Per_Hour: 8.68, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 8.7, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 8.71, Cost_Per_Package_old: 3.02, Cost_per_package_new: 2.67},
    {Packages_Per_Hour: 8.72, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 8.72, Cost_Per_Package_old: 2.89, Cost_per_package_new: 2.54},
    {Packages_Per_Hour: 8.74, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 8.76, Cost_Per_Package_old: 2.5, Cost_per_package_new: 2.15},
    {Packages_Per_Hour: 8.77, Cost_Per_Package_old: 2.5, Cost_per_package_new: 2.15},
    {Packages_Per_Hour: 8.79, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 8.81, Cost_Per_Package_old: 2.99, Cost_per_package_new: 2.64},
    {Packages_Per_Hour: 8.81, Cost_Per_Package_old: 2.58, Cost_per_package_new: 2.23},
    {Packages_Per_Hour: 8.81, Cost_Per_Package_old: 3.03, Cost_per_package_new: 2.68},
    {Packages_Per_Hour: 8.82, Cost_Per_Package_old: 2.75, Cost_per_package_new: 2.40},
    {Packages_Per_Hour: 8.83, Cost_Per_Package_old: 2.91, Cost_per_package_new: 2.56},
    {Packages_Per_Hour: 8.84, Cost_Per_Package_old: 2.57, Cost_per_package_new: 2.22},
    {Packages_Per_Hour: 8.84, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 8.84, Cost_Per_Package_old: 2.37, Cost_per_package_new: 2.02},
    {Packages_Per_Hour: 8.85, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 8.87, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 8.87, Cost_Per_Package_old: 2.51, Cost_per_package_new: 2.16},
    {Packages_Per_Hour: 8.87, Cost_Per_Package_old: 2.53, Cost_per_package_new: 2.18},
    {Packages_Per_Hour: 8.87, Cost_Per_Package_old: 3.09, Cost_per_package_new: 2.74},
    {Packages_Per_Hour: 8.88, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 8.91, Cost_Per_Package_old: 3.01, Cost_per_package_new: 2.66},
    {Packages_Per_Hour: 8.93, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 8.94, Cost_Per_Package_old: 2.65, Cost_per_package_new: 2.30},
    {Packages_Per_Hour: 8.96, Cost_Per_Package_old: 2.67, Cost_per_package_new: 2.32},
    {Packages_Per_Hour: 8.97, Cost_Per_Package_old: 2.59, Cost_per_package_new: 2.24},
    {Packages_Per_Hour: 8.97, Cost_Per_Package_old: 2.61, Cost_per_package_new: 2.26},
    {Packages_Per_Hour: 8.97, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 8.98, Cost_Per_Package_old: 2.88, Cost_per_package_new: 2.53},
    {Packages_Per_Hour: 8.98, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 8.99, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.01, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.02, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 9.03, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 9.05, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 9.07, Cost_Per_Package_old: 2.8, Cost_per_package_new: 2.45},
    {Packages_Per_Hour: 9.07, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 9.09, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 9.1, Cost_Per_Package_old: 2.51, Cost_per_package_new: 2.16},
    {Packages_Per_Hour: 9.1, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 9.1, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 9.1, Cost_Per_Package_old: 2.58, Cost_per_package_new: 2.23},
    {Packages_Per_Hour: 9.11, Cost_Per_Package_old: 2.67, Cost_per_package_new: 2.32},
    {Packages_Per_Hour: 9.11, Cost_Per_Package_old: 2.65, Cost_per_package_new: 2.30},
    {Packages_Per_Hour: 9.11, Cost_Per_Package_old: 2.65, Cost_per_package_new: 2.30},
    {Packages_Per_Hour: 9.12, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 9.13, Cost_Per_Package_old: 2.59, Cost_per_package_new: 2.24},
    {Packages_Per_Hour: 9.14, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.15, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 9.15, Cost_Per_Package_old: 2.46, Cost_per_package_new: 2.11},
    {Packages_Per_Hour: 9.16, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 9.16, Cost_Per_Package_old: 2.39, Cost_per_package_new: 2.04},
    {Packages_Per_Hour: 9.18, Cost_Per_Package_old: 2.51, Cost_per_package_new: 2.16},
    {Packages_Per_Hour: 9.19, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 9.21, Cost_Per_Package_old: 2.98, Cost_per_package_new: 2.63},
    {Packages_Per_Hour: 9.21, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.22, Cost_Per_Package_old: 2.53, Cost_per_package_new: 2.18},
    {Packages_Per_Hour: 9.22, Cost_Per_Package_old: 3.05, Cost_per_package_new: 2.70},
    {Packages_Per_Hour: 9.23, Cost_Per_Package_old: 2.92, Cost_per_package_new: 2.57},
    {Packages_Per_Hour: 9.25, Cost_Per_Package_old: 2.58, Cost_per_package_new: 2.23},
    {Packages_Per_Hour: 9.26, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 9.27, Cost_Per_Package_old: 2.27, Cost_per_package_new: 1.92},
    {Packages_Per_Hour: 9.29, Cost_Per_Package_old: 2.51, Cost_per_package_new: 2.16},
    {Packages_Per_Hour: 9.31, Cost_Per_Package_old: 2.55, Cost_per_package_new: 2.20},
    {Packages_Per_Hour: 9.32, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 9.32, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 9.33, Cost_Per_Package_old: 2.5, Cost_per_package_new: 2.15},
    {Packages_Per_Hour: 9.38, Cost_Per_Package_old: 2.39, Cost_per_package_new: 2.04},
    {Packages_Per_Hour: 9.39, Cost_Per_Package_old: 2.69, Cost_per_package_new: 2.34},
    {Packages_Per_Hour: 9.4, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 9.4, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 9.41, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 9.41, Cost_Per_Package_old: 2.88, Cost_per_package_new: 2.53},
    {Packages_Per_Hour: 9.41, Cost_Per_Package_old: 2.52, Cost_per_package_new: 2.17},
    {Packages_Per_Hour: 9.41, Cost_Per_Package_old: 2.6, Cost_per_package_new: 2.25},
    {Packages_Per_Hour: 9.42, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 9.42, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 9.43, Cost_Per_Package_old: 3.04, Cost_per_package_new: 2.69},
    {Packages_Per_Hour: 9.46, Cost_Per_Package_old: 2.81, Cost_per_package_new: 2.46},
    {Packages_Per_Hour: 9.47, Cost_Per_Package_old: 2.55, Cost_per_package_new: 2.20},
    {Packages_Per_Hour: 9.48, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 9.48, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.48, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 9.5, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 9.5, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 9.51, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.52, Cost_Per_Package_old: 2.49, Cost_per_package_new: 2.14},
    {Packages_Per_Hour: 9.52, Cost_Per_Package_old: 2.97, Cost_per_package_new: 2.62},
    {Packages_Per_Hour: 9.53, Cost_Per_Package_old: 2.84, Cost_per_package_new: 2.49},
    {Packages_Per_Hour: 9.53, Cost_Per_Package_old: 2.94, Cost_per_package_new: 2.59},
    {Packages_Per_Hour: 9.53, Cost_Per_Package_old: 2.51, Cost_per_package_new: 2.16},
    {Packages_Per_Hour: 9.57, Cost_Per_Package_old: 2.51, Cost_per_package_new: 2.16},
    {Packages_Per_Hour: 9.57, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 9.59, Cost_Per_Package_old: 2.53, Cost_per_package_new: 2.18},
    {Packages_Per_Hour: 9.6, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 9.64, Cost_Per_Package_old: 2.96, Cost_per_package_new: 2.61},
    {Packages_Per_Hour: 9.64, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 9.65, Cost_Per_Package_old: 2.98, Cost_per_package_new: 2.63},
    {Packages_Per_Hour: 9.65, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 9.67, Cost_Per_Package_old: 2.5, Cost_per_package_new: 2.15},
    {Packages_Per_Hour: 9.67, Cost_Per_Package_old: 2.61, Cost_per_package_new: 2.26},
    {Packages_Per_Hour: 9.68, Cost_Per_Package_old: 2.42, Cost_per_package_new: 2.07},
    {Packages_Per_Hour: 9.69, Cost_Per_Package_old: 2.76, Cost_per_package_new: 2.41},
    {Packages_Per_Hour: 9.69, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 9.7, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 9.7, Cost_Per_Package_old: 2.35, Cost_per_package_new: 2.00},
    {Packages_Per_Hour: 9.71, Cost_Per_Package_old: 2.48, Cost_per_package_new: 2.13},
    {Packages_Per_Hour: 9.71, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 9.71, Cost_Per_Package_old: 2.81, Cost_per_package_new: 2.46},
    {Packages_Per_Hour: 9.73, Cost_Per_Package_old: 2.62, Cost_per_package_new: 2.27},
    {Packages_Per_Hour: 9.73, Cost_Per_Package_old: 2.95, Cost_per_package_new: 2.60},
    {Packages_Per_Hour: 9.74, Cost_Per_Package_old: 2.84, Cost_per_package_new: 2.49},
    {Packages_Per_Hour: 9.74, Cost_Per_Package_old: 2.58, Cost_per_package_new: 2.23},
    {Packages_Per_Hour: 9.74, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 9.75, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 9.75, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 9.78, Cost_Per_Package_old: 2.67, Cost_per_package_new: 2.32},
    {Packages_Per_Hour: 9.8, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 9.81, Cost_Per_Package_old: 2.69, Cost_per_package_new: 2.34},
    {Packages_Per_Hour: 9.81, Cost_Per_Package_old: 2.3, Cost_per_package_new: 1.95},
    {Packages_Per_Hour: 9.81, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 9.82, Cost_Per_Package_old: 2.6, Cost_per_package_new: 2.25},
    {Packages_Per_Hour: 9.82, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 9.83, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 9.86, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 9.86, Cost_Per_Package_old: 2.44, Cost_per_package_new: 2.09},
    {Packages_Per_Hour: 9.89, Cost_Per_Package_old: 3.24, Cost_per_package_new: 2.89},
    {Packages_Per_Hour: 9.9, Cost_Per_Package_old: 2.83, Cost_per_package_new: 2.48},
    {Packages_Per_Hour: 9.9, Cost_Per_Package_old: 3.14, Cost_per_package_new: 2.79},
    {Packages_Per_Hour: 9.91, Cost_Per_Package_old: 3.2, Cost_per_package_new: 2.85},
    {Packages_Per_Hour: 9.92, Cost_Per_Package_old: 2.6, Cost_per_package_new: 2.25},
    {Packages_Per_Hour: 9.93, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 9.93, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 9.94, Cost_Per_Package_old: 3.05, Cost_per_package_new: 2.70},
    {Packages_Per_Hour: 9.95, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 9.96, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 9.96, Cost_Per_Package_old: 2.85, Cost_per_package_new: 2.50},
    {Packages_Per_Hour: 9.98, Cost_Per_Package_old: 2.27, Cost_per_package_new: 1.92},
    {Packages_Per_Hour: 9.98, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 9.99, Cost_Per_Package_old: 2.81, Cost_per_package_new: 2.46},
    {Packages_Per_Hour: 10.0, Cost_Per_Package_old: 2.69, Cost_per_package_new: 2.34},
    {Packages_Per_Hour: 10.03, Cost_Per_Package_old: 2.61, Cost_per_package_new: 2.26},
    {Packages_Per_Hour: 10.03, Cost_Per_Package_old: 2.6, Cost_per_package_new: 2.25},
    {Packages_Per_Hour: 10.04, Cost_Per_Package_old: 2.37, Cost_per_package_new: 2.02},
    {Packages_Per_Hour: 10.04, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 10.05, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.05, Cost_Per_Package_old: 2.67, Cost_per_package_new: 2.32},
    {Packages_Per_Hour: 10.08, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 10.09, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.09, Cost_Per_Package_old: 2.62, Cost_per_package_new: 2.27},
    {Packages_Per_Hour: 10.1, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 10.1, Cost_Per_Package_old: 2.47, Cost_per_package_new: 2.12},
    {Packages_Per_Hour: 10.1, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 10.1, Cost_Per_Package_old: 2.55, Cost_per_package_new: 2.20},
    {Packages_Per_Hour: 10.11, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 10.11, Cost_Per_Package_old: 2.52, Cost_per_package_new: 2.17},
    {Packages_Per_Hour: 10.13, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 10.13, Cost_Per_Package_old: 2.65, Cost_per_package_new: 2.30},
    {Packages_Per_Hour: 10.13, Cost_Per_Package_old: 2.44, Cost_per_package_new: 2.09},
    {Packages_Per_Hour: 10.13, Cost_Per_Package_old: 2.48, Cost_per_package_new: 2.13},
    {Packages_Per_Hour: 10.14, Cost_Per_Package_old: 2.86, Cost_per_package_new: 2.51},
    {Packages_Per_Hour: 10.15, Cost_Per_Package_old: 2.92, Cost_per_package_new: 2.57},
    {Packages_Per_Hour: 10.16, Cost_Per_Package_old: 2.39, Cost_per_package_new: 2.04},
    {Packages_Per_Hour: 10.17, Cost_Per_Package_old: 2.69, Cost_per_package_new: 2.34},
    {Packages_Per_Hour: 10.19, Cost_Per_Package_old: 2.58, Cost_per_package_new: 2.23},
    {Packages_Per_Hour: 10.2, Cost_Per_Package_old: 2.37, Cost_per_package_new: 2.02},
    {Packages_Per_Hour: 10.2, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 10.21, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 10.22, Cost_Per_Package_old: 2.46, Cost_per_package_new: 2.11},
    {Packages_Per_Hour: 10.22, Cost_Per_Package_old: 2.73, Cost_per_package_new: 2.38},
    {Packages_Per_Hour: 10.23, Cost_Per_Package_old: 2.77, Cost_per_package_new: 2.42},
    {Packages_Per_Hour: 10.23, Cost_Per_Package_old: 2.62, Cost_per_package_new: 2.27},
    {Packages_Per_Hour: 10.24, Cost_Per_Package_old: 2.48, Cost_per_package_new: 2.13},
    {Packages_Per_Hour: 10.24, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 10.24, Cost_Per_Package_old: 2.61, Cost_per_package_new: 2.26},
    {Packages_Per_Hour: 10.25, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 10.27, Cost_Per_Package_old: 2.46, Cost_per_package_new: 2.11},
    {Packages_Per_Hour: 10.27, Cost_Per_Package_old: 2.93, Cost_per_package_new: 2.58},
    {Packages_Per_Hour: 10.29, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 10.29, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 10.3, Cost_Per_Package_old: 2.88, Cost_per_package_new: 2.53},
    {Packages_Per_Hour: 10.3, Cost_Per_Package_old: 2.29, Cost_per_package_new: 1.94},
    {Packages_Per_Hour: 10.31, Cost_Per_Package_old: 2.39, Cost_per_package_new: 2.04},
    {Packages_Per_Hour: 10.32, Cost_Per_Package_old: 2.49, Cost_per_package_new: 2.14},
    {Packages_Per_Hour: 10.32, Cost_Per_Package_old: 2.57, Cost_per_package_new: 2.22},
    {Packages_Per_Hour: 10.33, Cost_Per_Package_old: 2.61, Cost_per_package_new: 2.26},
    {Packages_Per_Hour: 10.34, Cost_Per_Package_old: 2.32, Cost_per_package_new: 1.97},
    {Packages_Per_Hour: 10.36, Cost_Per_Package_old: 2.42, Cost_per_package_new: 2.07},
    {Packages_Per_Hour: 10.36, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.36, Cost_Per_Package_old: 2.84, Cost_per_package_new: 2.49},
    {Packages_Per_Hour: 10.38, Cost_Per_Package_old: 2.39, Cost_per_package_new: 2.04},
    {Packages_Per_Hour: 10.39, Cost_Per_Package_old: 2.33, Cost_per_package_new: 1.98},
    {Packages_Per_Hour: 10.4, Cost_Per_Package_old: 2.38, Cost_per_package_new: 2.03},
    {Packages_Per_Hour: 10.4, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 10.41, Cost_Per_Package_old: 2.5, Cost_per_package_new: 2.15},
    {Packages_Per_Hour: 10.42, Cost_Per_Package_old: 2.67, Cost_per_package_new: 2.32},
    {Packages_Per_Hour: 10.43, Cost_Per_Package_old: 2.62, Cost_per_package_new: 2.27},
    {Packages_Per_Hour: 10.43, Cost_Per_Package_old: 2.53, Cost_per_package_new: 2.18},
    {Packages_Per_Hour: 10.44, Cost_Per_Package_old: 2.34, Cost_per_package_new: 1.99},
    {Packages_Per_Hour: 10.45, Cost_Per_Package_old: 2.59, Cost_per_package_new: 2.24},
    {Packages_Per_Hour: 10.46, Cost_Per_Package_old: 2.52, Cost_per_package_new: 2.17},
    {Packages_Per_Hour: 10.48, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 10.49, Cost_Per_Package_old: 2.27, Cost_per_package_new: 1.92},
    {Packages_Per_Hour: 10.5, Cost_Per_Package_old: 2.93, Cost_per_package_new: 2.58},
    {Packages_Per_Hour: 10.53, Cost_Per_Package_old: 2.35, Cost_per_package_new: 2.00},
    {Packages_Per_Hour: 10.54, Cost_Per_Package_old: 2.34, Cost_per_package_new: 1.99},
    {Packages_Per_Hour: 10.54, Cost_Per_Package_old: 2.44, Cost_per_package_new: 2.09},
    {Packages_Per_Hour: 10.54, Cost_Per_Package_old: 2.46, Cost_per_package_new: 2.11},
    {Packages_Per_Hour: 10.55, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.55, Cost_Per_Package_old: 2.72, Cost_per_package_new: 2.37},
    {Packages_Per_Hour: 10.56, Cost_Per_Package_old: 2.63, Cost_per_package_new: 2.28},
    {Packages_Per_Hour: 10.57, Cost_Per_Package_old: 2.25, Cost_per_package_new: 1.90},
    {Packages_Per_Hour: 10.57, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 10.6, Cost_Per_Package_old: 2.21, Cost_per_package_new: 1.86},
    {Packages_Per_Hour: 10.6, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 10.61, Cost_Per_Package_old: 2.43, Cost_per_package_new: 2.08},
    {Packages_Per_Hour: 10.61, Cost_Per_Package_old: 2.49, Cost_per_package_new: 2.14},
    {Packages_Per_Hour: 10.61, Cost_Per_Package_old: 2.39, Cost_per_package_new: 2.04},
    {Packages_Per_Hour: 10.62, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 10.62, Cost_Per_Package_old: 2.24, Cost_per_package_new: 1.89},
    {Packages_Per_Hour: 10.63, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.63, Cost_Per_Package_old: 2.87, Cost_per_package_new: 2.52},
    {Packages_Per_Hour: 10.67, Cost_Per_Package_old: 2.7, Cost_per_package_new: 2.35},
    {Packages_Per_Hour: 10.67, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 10.67, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 10.71, Cost_Per_Package_old: 2.5, Cost_per_package_new: 2.15},
    {Packages_Per_Hour: 10.72, Cost_Per_Package_old: 2.68, Cost_per_package_new: 2.33},
    {Packages_Per_Hour: 10.72, Cost_Per_Package_old: 2.46, Cost_per_package_new: 2.11},
    {Packages_Per_Hour: 10.74, Cost_Per_Package_old: 2.43, Cost_per_package_new: 2.08},
    {Packages_Per_Hour: 10.76, Cost_Per_Package_old: 2.46, Cost_per_package_new: 2.11},
    {Packages_Per_Hour: 10.77, Cost_Per_Package_old: 2.19, Cost_per_package_new: 1.84},
    {Packages_Per_Hour: 10.78, Cost_Per_Package_old: 2.49, Cost_per_package_new: 2.14},
    {Packages_Per_Hour: 10.78, Cost_Per_Package_old: 2.26, Cost_per_package_new: 1.91},
    {Packages_Per_Hour: 10.81, Cost_Per_Package_old: 2.62, Cost_per_package_new: 2.27},
    {Packages_Per_Hour: 10.81, Cost_Per_Package_old: 2.28, Cost_per_package_new: 1.93},
    {Packages_Per_Hour: 10.81, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 10.83, Cost_Per_Package_old: 2.38, Cost_per_package_new: 2.03},
    {Packages_Per_Hour: 10.84, Cost_Per_Package_old: 2.19, Cost_per_package_new: 1.84},
    {Packages_Per_Hour: 10.84, Cost_Per_Package_old: 2.64, Cost_per_package_new: 2.29},
    {Packages_Per_Hour: 10.86, Cost_Per_Package_old: 2.3, Cost_per_package_new: 1.95},
    {Packages_Per_Hour: 10.86, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.86, Cost_Per_Package_old: 2.28, Cost_per_package_new: 1.93},
    {Packages_Per_Hour: 10.86, Cost_Per_Package_old: 2.61, Cost_per_package_new: 2.26},
    {Packages_Per_Hour: 10.88, Cost_Per_Package_old: 2.48, Cost_per_package_new: 2.13},
    {Packages_Per_Hour: 10.9, Cost_Per_Package_old: 2.54, Cost_per_package_new: 2.19},
    {Packages_Per_Hour: 10.91, Cost_Per_Package_old: 2.56, Cost_per_package_new: 2.21},
    {Packages_Per_Hour: 10.92, Cost_Per_Package_old: 2.41, Cost_per_package_new: 2.06},
    {Packages_Per_Hour: 10.93, Cost_Per_Package_old: 2.53, Cost_per_package_new: 2.18},
    {Packages_Per_Hour: 10.95, Cost_Per_Package_old: 2.45, Cost_per_package_new: 2.10},
    {Packages_Per_Hour: 10.96, Cost_Per_Package_old: 2.74, Cost_per_package_new: 2.39},
    {Packages_Per_Hour: 10.98, Cost_Per_Package_old: 2.35, Cost_per_package_new: 2.00},
    {Packages_Per_Hour: 10.98, Cost_Per_Package_old: 2.19, Cost_per_package_new: 1.84},
    {Packages_Per_Hour: 11.0, Cost_Per_Package_old: 2.27, Cost_per_package_new: 1.92},
    {Packages_Per_Hour: 11.01, Cost_Per_Package_old: 2.57, Cost_per_package_new: 2.22},
    {Packages_Per_Hour: 11.01, Cost_Per_Package_old: 2.31, Cost_per_package_new: 1.96},
    {Packages_Per_Hour: 11.02, Cost_Per_Package_old: 2.71, Cost_per_package_new: 2.36},
    {Packages_Per_Hour: 11.02, Cost_Per_Package_old: 2.34, Cost_per_package_new: 1.99},
    {Packages_Per_Hour: 11.04, Cost_Per_Package_old: 2.66, Cost_per_package_new: 2.31},
    {Packages_Per_Hour: 11.06, Cost_Per_Package_old: 2.19, Cost_per_package_new: 1.84},
    {Packages_Per_Hour: 11.09, Cost_Per_Package_old: 2.3, Cost_per_package_new: 1.95},
    {Packages_Per_Hour: 11.11, Cost_Per_Package_old: 2.31, Cost_per_package_new: 1.96},
    {Packages_Per_Hour: 11.12, Cost_Per_Package_old: 2.48, Cost_per_package_new: 2.13},
    {Packages_Per_Hour: 11.15, Cost_Per_Package_old: 2.4, Cost_per_package_new: 2.05}
];

// Calculate regression lines and confidence bands
const calculateRegression = (data, xKey, yKey) => {
  const xArray = data.map(d => d[xKey]);
  const yArray = data.map(d => d[yKey]);
  const n = data.length;

  const xMean = d3.mean(xArray);
  const yMean = d3.mean(yArray);

  // Calculate coefficients
  let ssxx = 0, ssyy = 0, ssxy = 0;
  for (let i = 0; i < n; i++) {
    ssxx += Math.pow(xArray[i] - xMean, 2);
    ssyy += Math.pow(yArray[i] - yMean, 2);
    ssxy += (xArray[i] - xMean) * (yArray[i] - yMean);
  }

  const slope = ssxy / ssxx;
  const intercept = yMean - (slope * xMean);

  // Calculate prediction intervals
  const yHat = xArray.map(x => slope * x + intercept);
  const residuals = yArray.map((y, i) => y - yHat[i]);
  const sse = residuals.reduce((a, b) => a + b * b, 0);
  const mse = sse / (n - 2);
  const std = Math.sqrt(mse);

  // Generate points for line and prediction bands
  const xRange = d3.range(6, 12.1, 0.1);
  return xRange.map(x => {
    const yPred = slope * x + intercept;
    const predictionInterval = 1.96 * std * Math.sqrt(1 + 1/n + Math.pow(x - xMean, 2)/ssxx);
    
    return {
      x: x,
      y: yPred,
      upper: yPred + predictionInterval,
      lower: yPred - predictionInterval
    };
  });
};

// Dimensions
const margin = { top: 80, right: 80, bottom: 80, left: 80 };
const width = 900;
const height = 500;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Create SVG
const svg = d3.select(svgRef.current)
  .attr('width', width)
  .attr('height', height);

// Create chart group
const g = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Add legend
const legend = g.append('g')
  .attr('transform', `translate(${innerWidth/2 - 160}, -40)`);

// Center the legend by translating it left by half its width
const legendGroup = legend.append('g');

// Old Model
legendGroup.append('g')
  .attr('transform', 'translate(0, 0)')
  .call(g => {
    g.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 30)
      .attr('y2', 0)
      .style('stroke', '#2563eb')
      .style('stroke-width', 2)
      .style('stroke-dasharray', '5,5');
    g.append('text')
      .attr('x', 40)
      .attr('y', 4)
      .style('font-family', 'Courier New')
      .style('font-size', '12px')
      .text('Old Model');
  });

// New Model
legendGroup.append('g')
  .attr('transform', 'translate(200, 0)')
  .call(g => {
    g.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 30)
      .attr('y2', 0)
      .style('stroke', '#e24a4a')
      .style('stroke-width', 2)
      .style('stroke-dasharray', '5,5');
    g.append('text')
      .attr('x', 40)
      .attr('y', 4)
      .style('font-family', 'Courier New')
      .style('font-size', '12px')
      .text('New Model');
  });

// Scales
const x = d3.scaleLinear()
  .domain([6, 12])
  .range([0, innerWidth]);

const y = d3.scaleLinear()
  .domain([1.5, 4.0])
  .range([innerHeight, 0]);

// Calculate regression data
const oldRegression = calculateRegression(data, 'Packages_Per_Hour', 'Cost_Per_Package_old');
const newRegression = calculateRegression(data, 'Packages_Per_Hour', 'Cost_per_package_new');

// Create line and area generators
const lineGenerator = d3.line()
  .x(d => x(d.x))
  .y(d => y(d.y))
  .curve(d3.curveMonotoneX);

const areaGenerator = d3.area()
  .x(d => x(d.x))
  .y0(d => y(d.lower))
  .y1(d => y(d.upper))
  .curve(d3.curveMonotoneX);

// Add confidence bands
g.append('path')
  .datum(oldRegression)
  .attr('fill', '#2563eb')
  .attr('opacity', 0.1)
  .attr('d', areaGenerator);

g.append('path')
  .datum(newRegression)
  .attr('fill', '#e24a4a')
  .attr('opacity', 0.1)
  .attr('d', areaGenerator);

// Add regression lines
g.append('path')
  .datum(oldRegression)
  .attr('fill', 'none')
  .attr('stroke', '#2563eb')
  .attr('stroke-width', 2)
  .attr('stroke-dasharray', '5,5')
  .attr('d', lineGenerator);

g.append('path')
  .datum(newRegression)
  .attr('fill', 'none')
  .attr('stroke', '#e24a4a')
  .attr('stroke-width', 2)
  .attr('stroke-dasharray', '5,5')
  .attr('d', lineGenerator);

// Add scatter points
g.selectAll('.dot-old')
  .data(data)
  .enter()
  .append('circle')
  .attr('class', 'dot-old')
  .attr('cx', d => x(d.Packages_Per_Hour))
  .attr('cy', d => y(d.Cost_Per_Package_old))
  .attr('r', 4)
  .attr('fill', 'none')
  .attr('stroke', '#2563eb');

g.selectAll('.dot-new')
  .data(data)
  .enter()
  .append('circle')
  .attr('class', 'dot-new')
  .attr('cx', d => x(d.Packages_Per_Hour))
  .attr('cy', d => y(d.Cost_per_package_new))
  .attr('r', 4)
  .attr('fill', 'none')
  .attr('stroke', '#e24a4a');

// Add X axis
g.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(x))
      .call(g => g.selectAll('text')
        .style('font-family', 'Courier New')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#6B7280')); // gray-500

// Add Y axis
g.append('g')
      .call(d3.axisLeft(y))
      .call(g => g.selectAll('text')
        .style('font-family', 'Courier New')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#6B7280')); // gray-500

        g.append('text')
        .attr('transform', `translate(${innerWidth/2}, ${innerHeight + 35})`)
        .style('text-anchor', 'middle')
        .style('font-family', 'Courier New')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .style('fill', '#4B5563') // gray-600
        .text('Packages Per Hour');
  
      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -60)
        .attr('x', -innerHeight/2)
        .style('text-anchor', 'middle')
        .style('font-family', 'Courier New')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        .style('fill', '#4B5563') // gray-600
        .text('Cost Per Package ($)');

}, []);

return (
<div ref={containerRef} className="w-full flex justify-center" style={{ minHeight: 500 }}>
  <div className="w-full max-w-[900px]">
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="w-full px-4 pt-8 text-center">
        <h2 className="text-xl font-semibold text-blue-600">
          Cost Per Package Analysis
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Comparison of old vs new package costs with confidence intervals
        </p>
      </div>
      <div className="w-full">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  </div>
</div>
);
};

export default CostPerPackageChart;