'use client';

import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { Button } from '@/components/ui/button';

import React, { useEffect, useState } from 'react';

import { Zap } from 'lucide-react';

import AnimatedButton from './AnimatedButton';
import AnimatedLaunchButton from './AnimatedLaunchButton';
import AnimatedTitle from './AnimatedTitle';
import AnimatedVideoDialog from './AnimatedVideoDialog';

export default function HeroContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className='relative z-10 flex flex-col items-center w-full max-w-6xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 px-2 sm:px-4'>
        <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
          <Zap className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' />
          <span className='hidden sm:inline'>
            Extend your LLM capabilities with Aximo
          </span>
          <span className='sm:hidden'>Extend LLM with Aximo</span>
        </button>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-col text-center leading-tight px-2 sm:px-4'>
          <span className='mb-1 sm:mb-2'>Revolutionizing MCP With</span>
          <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            QEDA Architecture
          </span>
        </h1>

        <Button className='bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:btn-text-large border border-neutral-400 rounded-lg hover:bg-neutral-100 transition-colors font-semibold'>
          Launch Dapp
        </Button>

        <div className='relative z-20 w-full max-w-4xl px-2 sm:px-4'>
          <HeroVideoDialog
            className='block w-full aspect-video rounded-lg md:rounded-xl overflow-hidden border border-neutral-700'
            animationStyle='from-center'
            videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
            thumbnailAlt='Hero Video'
          />
        </div>
      </div>
    );
  }

  return (
    <div className='relative z-10 flex flex-col items-center w-full max-w-6xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 px-2 sm:px-4'>
      <AnimatedButton />
      <AnimatedTitle />
      <AnimatedLaunchButton />
      <AnimatedVideoDialog />
    </div>
  );
}
