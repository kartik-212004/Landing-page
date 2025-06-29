import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
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
      <section className='relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 lg:px-12'>
        <div className='absolute hidden md:block inset-0 z-0'>
          <Spline
            scene='https://prod.spline.design/hrSFBrjnLVa-AGek/scene.splinecode'
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Mobile background gradient when Spline is hidden */}
        <div className='absolute md:hidden inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20'></div>

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
            <span>QEDA Architecture</span>
          </h1>

          <Button className='bg-white text-black px-8 py-3 md:px-10 md:py-4 btn-text-medium md:btn-text-large border border-neutral-400 rounded-lg hover:bg-neutral-100 transition-colors'>
            Launch Dapp
          </Button>

          <div className='relative z-20 w-full max-w-4xl'>
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

      {/* Content Sections with consistent spacing */}
      <div className=''>
        <Partners />
        <WhatAreWe />
        <HowItWorks />
        <Recommended />
        <ServicesSection />
      </div>
    </main>
  );
}
