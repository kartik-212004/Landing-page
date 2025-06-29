import React from 'react';

import { Send } from 'lucide-react';

import { InfiniteMovingCardsDemo } from './marquee';
import { Button } from './ui/button';

export default function Recommended() {
  return (
    <section className='bg-black text-white pt-12 md:pt-16 lg:pt-20 mobile-container relative flex space-y-6 md:space-y-8 lg:space-y-10 flex-col justify-center items-center overflow-hidden'>
      <div className='flex justify-center mb-4'>
        <button className='px-5 flex flex-row space-x-2 justify-center items-center py-2 md:px-4 md:py-2 btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900'>
          <Send className='w-4 h-4 md:w-5 md:h-5' />
          <span className='inline'>Testimonials</span>
        </button>
      </div>

      <h1 className='text-headline-medium md:text-headline-large flex flex-col text-center px-4 md:px-0'>
        <span>Recommended by leaders in the</span>
        <span>digital asset industry.</span>
      </h1>
      <div className='w-full'>
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
}
