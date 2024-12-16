import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => (
  <header className="fixed top-0 right-0 left-0 h-16 bg-white shadow-sm z-30 lg:pl-[280px]">
    <div className="h-full px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden p-2 hover:bg-gray-50 rounded-lg"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        <div>
          <h1 className="text-base font-medium text-gray-900">Pricing Strategy Case Study</h1>
          <p className="hidden md:block text-xs uppercase tracking-tight text-gray-500">
            Pricing Optimization in a Gig Driver Last-Mile Package Delivery Marketplace
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-gray-900">Shezane Cassim</p>
          <p className="text-xs text-gray-500">Operations Leader</p>
        </div>
        <div className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
          SC
        </div>
      </div>
    </div>
  </header>
);

export default Header;