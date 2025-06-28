import HowItWorks from '@/components/HowItWorks';
import Recommended from '@/components/Recommended';
import WhatAreWe from '@/components/Scalable';
import ServicesSection from '@/components/WhatWeProvide';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { Button } from '@/components/ui/button';

import Spline from '@splinetool/react-spline/next';
import { Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className='relative w-full bg-black min-h-screen'>
      {/* Hero Section with Spline */}
      <section className='relative w-full hero-mobile flex flex-col items-center justify-center overflow-hidden'>
        <div className='absolute hidden md:block inset-0 z-0'>
          <Spline
            scene='https://prod.spline.design/hrSFBrjnLVa-AGek/scene.splinecode'
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Mobile background gradient when Spline is hidden */}
        <div className='absolute md:hidden inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20'></div>

        <div className='relative z-10 flex flex-col items-center w-full mobile-container space-y-6 md:space-y-8 lg:space-y-10'>
          <button className='px-5 flex flex-row space-x-2 justify-center items-center py-1 md:px-4 md:py-2 btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900'>
            <Zap className='w-4 h-4 md:w-5 md:h-5' />
            <span className='hidden sm:inline'>
              Extend your LLM capabilities with Aximo
            </span>
            <span className='sm:hidden'>Extend LLM with Aximo</span>
          </button>

          <h1 className='sm:text-5xl md:text-6xl text-3xl font-semibold flex flex-col text-center px-2 md:px-0'>
            <span>Revolutionizing MCP With</span>
            <span>QEDA Architecture</span>
          </h1>

          <Button className='bg-white h-1 text-black btn-text-medium md:btn-text-large border border-neutral-400 btn-mobile'>
            Launch Dapp
          </Button>

          <div className='relative z-20 w-full max-w-4xl md:px-0'>
            <HeroVideoDialog
              className='block w-full aspect-video rounded-lg md:rounded-xl overflow-hidden'
              animationStyle='from-center'
              videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
              thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
              thumbnailAlt='Hero Video'
            />
          </div>
        </div>
      </section>
      {/* Rest of the page content */}
      <WhatAreWe />
      <HowItWorks />
      <Recommended />
      <ServicesSection />
    </main>
  );
}
