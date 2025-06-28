import React from 'react';

import { InfiniteMovingCardsDemo } from './marquee';
import { Button } from './ui/button';

export default function Recommended() {
  return (
    <section className='bg-black text-white py-12 md:py-16 lg:py-20 mobile-container relative flex space-y-6 md:space-y-8 lg:space-y-10 flex-col justify-center items-center overflow-hidden'>
      <Button className='btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-xl md:rounded-2xl bg-neutral-900 btn-mobile'>
        <span className='hidden sm:inline'>What people has to say</span>
        <span className='sm:hidden'>Testimonials</span>
      </Button>
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
