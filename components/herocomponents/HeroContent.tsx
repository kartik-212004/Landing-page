'use client';

import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';
import AnimatedTitle from './AnimatedTitle';
import AnimatedLaunchButton from './AnimatedLaunchButton';
import AnimatedVideoDialog from './AnimatedVideoDialog';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';

export default function HeroContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className='relative z-10 flex flex-col items-center w-full max-w-6xl space-y-8 md:space-y-10 lg:space-y-12'>
        <button className='px-4 py-2 md:px-6 md:py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
          <Zap className='w-4 h-4 md:w-5 md:h-5' />
          <span className='hidden sm:inline'>
            Extend your LLM capabilities with Aximo
          </span>
          <span className='sm:hidden'>Extend LLM with Aximo</span>
        </button>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold flex flex-col text-center leading-tight'>
          <span>Revolutionizing MCP With</span>
          <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>QEDA Architecture</span>
        </h1>

        <Button className='bg-white text-black px-8 py-3 md:px-10 md:py-4 btn-text-medium md:btn-text-large border border-neutral-400 rounded-lg hover:bg-neutral-100 transition-colors'>
          Launch Dapp
        </Button>

        <div className='relative z-20 w-full max-w-4xl'>
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
    <div className='relative z-10 flex flex-col items-center w-full max-w-6xl space-y-8 md:space-y-10 lg:space-y-12'>
      <AnimatedButton />
      <AnimatedTitle />
      <AnimatedLaunchButton />
      <AnimatedVideoDialog />
    </div>
  );
}
