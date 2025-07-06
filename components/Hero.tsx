import React from 'react';
import Spline from '@splinetool/react-spline/next';
import HeroContent from './herocomponents/HeroContent';

export default function Hero() {
  return (
    <section className='relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-3 sm:px-4 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-0'>
      <div className='absolute hidden md:block inset-0 z-0'>
        <Spline
          scene='https://prod.spline.design/hrSFBrjnLVa-AGek/scene.splinecode'
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Mobile background gradient when Spline is hidden */}
      <div className='absolute md:hidden inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20'></div>

      <HeroContent />
    </section>
  );
}
