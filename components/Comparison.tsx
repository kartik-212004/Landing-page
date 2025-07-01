import React from 'react';
import { Check, X } from 'lucide-react';
import Tablesvg from './ui/table-svg';

export default function Comparison() {
  const features = [
    'Server Interaction Playground',
    'Marketplace',
    'Voice interface for server use.',
    'Chat interface for integration',
    'Composable Infrastructure',
    'User-listed MCP',
    'General Purpose Server Hosting',
    'Multichain Server Interactions'
  ];

  const getFeatureSupport = (featureIndex: number, companyIndex: number) => {
    // AXOM MCP supports all features except the last one (index 7)
    if (companyIndex === 0) {
      return featureIndex !== 7;
    }
    // QU3 supports only index 3 and 7
    if (companyIndex === 1) {
      return featureIndex === 3 || featureIndex === 7;
    }
    // SkyAI supports only index 3
    if (companyIndex === 2) {
      return featureIndex === 3;
    }
    return false;
  };

  return (
    <section className="relative w-full bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 lg:gap-8 xl:gap-12 items-start">
            {/* Left Content - Smaller width */}
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Axom Vs The Rest:
                </h2>
                <p className="text-base xl:text-lg text-gray-400 mt-4">
                  Modular, Monetizable, and Mission-Ready
                </p>
              </div>
            </div>
            
            {/* Right Content - Table takes 2 columns */}
            <div className="col-span-2 relative">
              <div className="w-full">
                <Tablesvg />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Axom Vs The Rest:
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Modular, Monetizable, and Mission-Ready
            </p>
          </div>

          {/* Mobile Table */}
          <div className="space-y-4">
            <div className="border border-neutral-800 rounded-lg bg-neutral-900/20 p-4">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                AXOM MCP
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white text-sm">{feature}</span>
                    {getFeatureSupport(index, 0) ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-neutral-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Holders:</span>
                    <span className="text-white">TBA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white">ATH:</span>
                    <span className="text-white">TBA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
