'use client';

import React, { Suspense, lazy, memo, useEffect, useState } from 'react';

import HeroContent from './herocomponents/HeroContent';

// Lazy load the heavy Spline component
const Spline = lazy(() => import('@splinetool/react-spline/next'));

function SplineLoader() {
  return (
    <div className='absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-black flex items-center justify-center'>
      <div className='w-8 h-8 border border-gray-600 border-t-purple-400 rounded-full animate-spin'></div>
    </div>
  );
}

// Memoized Spline wrapper to prevent unnecessary re-renders
const SplineWrapper = memo(() => {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Only load Spline after a delay to prioritize initial page load
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoadSpline) {
    return <SplineLoader />;
  }

  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline
        scene='https://prod.spline.design/hrSFBrjnLVa-AGek/scene.splinecode'
        style={{ pointerEvents: 'none' }}
      />
    </Suspense>
  );
});

SplineWrapper.displayName = 'SplineWrapper';

const Hero = memo(() => {
  return (
    <section className='relative w-full  flex flex-col items-center justify-center overflow-hidden px-3 sm:px-4 md:px-8 lg:px-12 pt-16 sm:pt-28 md:pt-20  pb-8 sm:pb-12 md:pb-16 perf-optimized'>
      {/* Desktop Spline - Lazy loaded with delay */}
      <div className='absolute hidden md:block inset-0 z-0'>
        <SplineWrapper />
      </div>

      {/* Mobile background gradient when Spline is hidden */}
      <div className='absolute md:hidden inset-0 z-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-black  gradient-optimized'></div>

      <HeroContent />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
