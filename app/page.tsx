import Comparison from '@/components/Comparison';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import Recommended from '@/components/Recommended';
import WhatAreWe from '@/components/Scalable';
import UseCases from '@/components/UseCases';
import VoiceNative from '@/components/Voice-Navtive';
import ServicesSection from '@/components/WhatWeProvide';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import CustomLineSeparator from '@/components/ui/CustomLineSeparator';
import { Button } from '@/components/ui/button';
import Visionary from '@/components/visionary';

import Spline from '@splinetool/react-spline/next';
import { Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className='relative w-full bg-black min-h-screen'>
      {/* Hero Section with Spline */}
      <Hero />

      {/* Content Sections with custom line separators */}
      <div className='space-y-0'>
        <Partners />
        <CustomLineSeparator />

        <WhatAreWe />
        <CustomLineSeparator />

        <HowItWorks />
        <CustomLineSeparator />

        <Recommended />
        <CustomLineSeparator />

        <ServicesSection />
        <CustomLineSeparator />

        <UseCases />
        <CustomLineSeparator />

        <VoiceNative />
        <CustomLineSeparator />

        <Comparison />
        <CustomLineSeparator />

        <Visionary />
      </div>
    </main>
  );
}
