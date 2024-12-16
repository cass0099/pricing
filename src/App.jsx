// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import {
  Background,
  PerformancePricing,
  ValuePricing,
  DemandPricing,
  SubgeoPricing,
  MeasuringPerformance
} from './pages';

// Initialize GA with your measurement ID
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID

// Create a component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });
  }, [location]);

  return null;
}

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop first */}
      <PageTracker /> {/* Then PageTracker */}
      <div className="min-h-screen flex">
        <Navigation isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <div className="flex-1">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="pt-16 lg:pl-[280px]">
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Background />} />
                <Route path="/performance-pricing" element={<PerformancePricing />} />
                <Route path="/value-pricing" element={<ValuePricing />} />
                <Route path="/demand-pricing" element={<DemandPricing />} />
                <Route path="/subgeo-pricing" element={<SubgeoPricing />} />
                <Route path="/measuring-performance" element={<MeasuringPerformance />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;