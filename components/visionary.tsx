'use client';

import React from 'react';

import { FileText, Github, Twitter } from 'lucide-react';

import Planetsvg from './ui/planetsvg';
import Backgroundlines from './ui/backgroundlines';

export default function Visionary() {
  return (
    <section className='relative w-full bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 overflow-hidden'>
      {/* Background Lines - For all screen sizes */}
      <div className='absolute inset-0 flex justify-center'>
        <div className='w-full max-w-7xl opacity-20 lg:opacity-30'>
          <Backgroundlines />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float-animation {
          animation: floatUpDown 4s ease-in-out infinite;
        }
        @media (max-width: 1024px) {
          .mobile-planet svg {
            filter: brightness(1.2) contrast(1.1);
          }
        }
      `}</style>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Centered Badge and Title for both layouts */}
        <div className='flex justify-center flex-col items-center mb-12'>
          <div className='inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm font-medium text-white mb-6'>
            Autonomous • Sovereign • Unstoppable
          </div>
          <h2 className='text-4xl xl:text-5xl font-bold text-white leading-tight text-center'>
            Visionary - Strategic
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className='hidden lg:block'>
          <div className='grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6'>
              {/* Content */}
              <div className='space-y-4'>
                <h3 className='text-xl xl:text-2xl font-bold text-white leading-tight'>
                  MCP, Simplified and Supercharged by Axom AI
                </h3>

                {/* Description */}
                <p className='text-base xl:text-lg text-gray-400 leading-relaxed max-w-lg'>
                  Unlock adaptive, decentralized compute with Axom AI&apos;s QEDA
                  architecture - designed for seamless AI context handling and
                  near-instant scalability.
                </p>
              </div>

              {/* Read Whitepaper Button */}
              <div className='pt-2'>
                <button className='inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors'>
                  <FileText className='w-5 h-5 mr-2' />
                  Read Whitepaper →
                </button>
              </div>

              {/* Social Icons */}
              <div className='flex items-center space-x-4 pt-2'>
                <button className='w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors'>
                  <Github className='w-5 h-5 text-white' />
                </button>
                <div className='w-px h-6 bg-neutral-700'></div>
                <button className='w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors'>
                  <Twitter className='w-5 h-5 text-white' />
                </button>
                <div className='w-px h-6 bg-neutral-700'></div>
                <button className='w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors'>
                  <Github className='w-5 h-5 text-white' />
                </button>
              </div>
            </div>

            {/* Right Content - Planet SVG with Subtle Animation */}
            <div className='flex items-center justify-center'>
              <div className='relative w-full max-w-lg float-animation'>
                <Planetsvg />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='lg:hidden space-y-6'>
          {/* Planet SVG - Mobile with enhanced visibility */}
          <div className='flex justify-center py-6'>
            <div className='relative w-96 h-96 sm:w-[28rem] sm:h-[28rem] float-animation mobile-planet'>
              <Planetsvg />
            </div>
          </div>

          {/* Content */}
          <div className='text-center space-y-4'>
            {/* Subtitle */}
            <h3 className='text-lg sm:text-xl font-bold text-white leading-tight'>
              MCP, Simplified and Supercharged by Axom AI
            </h3>

            {/* Description */}
            <p className='text-sm md:text-base text-gray-400 leading-relaxed px-4'>
              Unlock adaptive, decentralized compute with Axom AI&apos;s QEDA
              architecture - designed for seamless AI context handling and
              near-instant scalability.
            </p>

            {/* Read Whitepaper Button */}
            <div className='pt-2'>
              <button className='inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors'>
                <FileText className='w-5 h-5 mr-2' />
                Read Whitepaper →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
