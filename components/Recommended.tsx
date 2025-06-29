import React from 'react';

import { Send } from 'lucide-react';

import { InfiniteMovingCardsDemo } from './marquee';

export default function Recommended() {
  return (
    <section className='bg-black text-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 relative flex flex-col justify-center items-center overflow-hidden'>
      <div className='max-w-7xl mx-auto w-full flex flex-col items-center space-y-8 md:space-y-10'>
        {/* Header Badge */}
        <div className='flex justify-center'>
          <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
            <Send className='w-4 h-4 md:w-5 md:h-5' />
            <span className='inline'>Testimonials</span>
          </button>
        </div>

        {/* Main Title */}
        <h2 className='text-display-small text-center mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
          <span>Recommended by leaders in the</span>
          <br />
          <span>digital asset industry.</span>
        </h2>
        
        {/* Testimonials */}
        <div className='w-full'>
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </section>
  );
}
