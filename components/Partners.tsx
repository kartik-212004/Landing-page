import React from 'react';

import { BugIcon } from 'lucide-react';

import { ScrollBasedVelocityDemo } from './ui/scroll-reveal';

export default function Partners() {
  return (
    <section className='bg-black text-white  px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Badge */}
        <div className='flex justify-center mb-8'>
          <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
            <BugIcon className='w-4 h-4 md:w-5 md:h-5' />
            <span className='inline'>Built with Builders</span>
          </button>
        </div>

        {/* Main Title */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-display-medium mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
            Partners & Ecosystem
          </h2>
        </div>
        
        <ScrollBasedVelocityDemo />
      </div>
    </section>
  );
}
