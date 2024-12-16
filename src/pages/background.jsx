import React from 'react';
import CaseStudyHeader from '../components/common/CaseStudyHeader';
import SectionDivider from '../components/common/SectionDivider';

const Background = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <CaseStudyHeader 
        title="Marketplace Pricing Optimization"
        subtitle="How I built a multi-variable dynamic pricing model that drove a 14% reduction in marketplace operating cost for a gig driver package delivery platform"
        metric={{ value: "14%", label: "Realized Cost Reduction" }}
      />
      
      <div className="space-y-12">

      <section>
          <SectionDivider title="OVERVIEW" />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 mb-8">
            This case study presents a simplified review of a real-world pricing strategy application. A synthetic dataset is used to protect actual figures and is intended solely to conceptually illustrate the approach taken. 
            The general approach borrows from well-known revenue management, yield optimization, and operations management concepts.
            </p>
          </div>
        </section>

        <section>
          <SectionDivider title="COMPANY OPERATING MODEL AND PRICING OBJECTIVE" />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 mb-8">
            E-commerce packages from major retailers are received daily into company warehouses and sorted into delivery routes. Gig drivers pick up these packages from warehouses and deliver them to customers, earning pay based on published offers for each route. Driver delivery costs are the largest cost item in the company's P&L by a significant margin. <strong>The objective is to price routes in a way that minimizes this operating cost while maintaining delivery quality and providing sustainable, long term value to drivers.</strong>
            </p>
          </div>
        </section>

        <section>
          <SectionDivider title="DELIVERY PROCESS AND PRICING MODELS" />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 mb-6">
              Delivery routes for each market are priced and published the evening before delivery, 
              with delivery start times ranging from 5 a.m. to 2 p.m. Drivers use an app to select routes based on preferences 
              such as delivery length, start time, and geographic area. In the hours following initial route publishing, pricing follows 
              a "store shelf" model where prices are fixed.
            </p>
            <p className="text-gray-600 mb-6">
              To ensure delivery quality and free up warehouse space for the next day's package sort, all routes must 
              be sold and picked up by 3 p.m. On delivery day, any unsold routes are subject to periodic 
              price increases to encourage timely market-clearing (a dynamic surge pricing application). During this phase, 
              pricing transitions from the store shelf model to a game-theoretic, auction-style model.
            </p>
          </div>
        </section>

        <section>
          <SectionDivider title="PRICING DYNAMICS" />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 mb-6">
              When base prices are set high, routes typically sell out the evening before, minimizing 
              the need for price adjustments on delivery day. This fast market-clearing process indicates 
              potential overpricing and highlights opportunities for margin expansion.
            </p>
            <p className="text-gray-600 mb-6">
              Conversely, low base prices incentivize drivers to delay selecting routes since they correctly anticipate delivery-day 
              price increases. This behavior leads to higher overall market-clearing costs and other inefficiencies.
            </p>
            <p className="text-gray-600 mb-6">
              Optimizing base prices is the primary factor in creating a performant pricing operation.
            </p>
          </div>
        </section>

        <section>
          <SectionDivider title="KEY FACTORS IMPACTING PRICING AND DELIVERY" />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 mb-8">
              Several other microeconomic and operational factors influence pricing dynamics. For the purpose of simplicity, most of these additional factors are not explicitly considered in this particular pricing case study:
            </p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">Supply Side: Elasticity of Driver Supply</h3>
                <div className="space-y-3">
                  {['Size and availability of the driver pool',
                    'Responsiveness of drivers to price changes',
                    'Competition among gig worker platforms for gig worker hours',
                    'Minimum wage changes and unemployment rates'

                  ].map((item, index) => (
                    <p key={index} className="text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mb-0.5"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">Demand Side: Variability of Daily Package Volumes</h3>
                <div className="space-y-3">
                  {['Fluctuations in the number of packages needing delivery',
                    'Large vehicles enabling drivers to handle two routes simultaneously',
                    'Drivers swapping or dropping routes at the last minute'
                  ].map((item, index) => (
                    <p key={index} className="text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mb-0.5"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">Driver Behavior</h3>
                <div className="space-y-3">
                  {['Drivers returning to pick up multiple routes in a day',
                    'Large vehicles enabling drivers to handle two routes simultaneously',
                    'Drivers swapping or dropping routes at the last minute',
                    'Drivers churning at varying rates depending on the total value proposition',
                  ].map((item, index) => (
                    <p key={index} className="text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mb-0.5"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-gray-800 font-semibold mb-2">Geographic and Route Preferences</h3>
                <div className="space-y-3">
                  {[
                    'High-density urban areas (e.g., apartments) are less desirable due to challenges like parking and traffic',
                    'Longer routes are preferred as they justify the time spent traveling to the warehouse. Routes under two hours are highly undesirable'
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

export default Background;