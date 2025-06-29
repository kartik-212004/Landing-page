import React from 'react';

const ServicesSection = () => {
  return (
    <section className='bg-black text-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Badge */}
        <div className='flex justify-center mb-8'>
          <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
            <span className='inline'>Your Average LLM&apos;s On Steroids</span>
          </button>
        </div>

        {/* Main Title */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-display-medium mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
            What we provide?
          </h2>
        </div>

        {/* Services Grid */}
        <div className='space-y-6 md:space-y-8'>
          {/* Top Row - 2 Cards - Mobile: Stack vertically, Large: 2 columns */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
            {/* Q-Flow Scalable Backend Infrastructure */}
            <div className='border border-[#212121] rounded-3xl bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600'>
              <div className='p-6 md:p-8'>
                <h3 className='text-title-medium md:text-title-large text-white mb-3 md:mb-4'>
                  Q-Flow Scalable Backend Infrastructure
                </h3>
                <p className='text-body-small md:text-body-medium text-gray-400'>
                  Protocol extension that makes it easy to deploy and connect MCP
                  servers across blockchain ecosystems.
                </p>
              </div>
            </div>

            {/* Cross-Chain Compute and Data Access */}
            <div className='border border-[#212121] bg-[#0f0f0f] rounded-3xl transition-all duration-300 hover:border-neutral-600'>
              <div className='p-6 md:p-8'>
                <h3 className='text-title-medium md:text-title-large text-white mb-3 md:mb-4'>
                  Cross-Chain Compute and Data Access
                </h3>
                <p className='text-body-small md:text-body-medium text-gray-400'>
                  Supports scalable, accurate MCP services that fetch, process, and
                  relay data across multiples chains.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Cards - Mobile: Stack vertically, Tablet: 2 cols, Large: 3 cols */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {/* Voice-First Server Interface */}
            <div className='border border-[#212121] bg-[#0f0f0f] rounded-3xl transition-all duration-300 hover:border-neutral-600'>
              <div className='p-6 md:p-8'>
                <h3 className='text-title-small md:text-title-medium text-white mb-3 md:mb-4'>
                  Voice-First Server Interface
                </h3>
                <p className='text-body-small text-gray-400'>
                  Enables natural voice interaction with MCP servers - trigger tasks,
                  deploy logic, or query outputs just by speaking.
                </p>
              </div>
            </div>

            {/* Unified Platform for MCP Services */}
            <div className='border border-[#212121] rounded-3xl bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600'>
              <div className='p-6 md:p-8'>
                <h3 className='text-title-small md:text-title-medium text-white mb-3 md:mb-4'>
                  Unified Platform for MCP Services
                </h3>
                <p className='text-body-small text-gray-400'>
                  A developer-friendly marketplace and playground to list, access, and
                  integrate compute services in real time.
                </p>
              </div>
            </div>

            {/* Tooling for Faster Development */}
            <div className='border border-[#212121] rounded-3xl bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600 md:col-span-2 lg:col-span-1'>
              <div className='p-6 md:p-8'>
                <h3 className='text-title-small md:text-title-medium text-white mb-3 md:mb-4'>
                  Tooling for Faster Development
                </h3>
                <p className='text-body-small text-gray-400'>
                  SDKs, templates, and APIs that accelerate the build, testing, and
                  deployment of MCP-based AI models and on-chain logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
