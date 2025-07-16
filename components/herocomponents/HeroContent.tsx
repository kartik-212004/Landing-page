'use client';

import React from 'react';

import AnimatedButton from './AnimatedButton';
import AnimatedLaunchButton from './AnimatedLaunchButton';
import AnimatedTitle from './AnimatedTitle';
import AnimatedVideoDialog from './AnimatedVideoDialog';

export default function HeroContent() {
  return (
    <div className='relative z-10 flex flex-col items-center w-full max-w-6xl space-y-6 sm:space-y-5 md:space-y-6 lg:space-y-7 px-2 pt-2 sm:px-4'>
      <AnimatedButton />
      <AnimatedTitle />
      <AnimatedLaunchButton />
      <AnimatedVideoDialog />
    </div>
  );
}
