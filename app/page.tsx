import Hero from '@/components/Hero';
import CustomLineSeparator from '@/components/ui/CustomLineSeparator';

import { Suspense, lazy } from 'react';

// Lazy load heavy components with better chunking
const Partners = lazy(() => import('@/components/Partners'));
const WhatAreWe = lazy(() => import('@/components/Scalable'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Recommended = lazy(() => import('@/components/Recommended'));
const ServicesSection = lazy(() => import('@/components/WhatWeProvide'));
const UseCases = lazy(() => import('@/components/UseCases'));
const VoiceNative = lazy(() => import('@/components/Voice-Navtive'));
const Comparison = lazy(() => import('@/components/Comparison'));
const Visionary = lazy(() => import('@/components/visionary'));

// Optimized loading component with reduced animation
function SectionLoader() {
  return (
    <div className='w-full h-32 bg-black flex items-center justify-center'>
      <div className='w-6 h-6 border border-gray-600 border-t-white rounded-full animate-spin'></div>
    </div>
  );
}

// Memoized wrapper for sections to prevent unnecessary re-renders
function SectionWrapper({
  children,
  fallback = <SectionLoader />,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default function Home() {
  return (
    <main className='relative w-full bg-black min-h-screen'>
      {/* Hero Section - Load immediately */}
      <Hero />

      {/* Lazy loaded content sections with optimized loading */}
      <div className='space-y-0'>
        <SectionWrapper>
          <Partners />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <WhatAreWe />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <HowItWorks />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <Recommended />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <ServicesSection />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <UseCases />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <VoiceNative />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <Comparison />
        </SectionWrapper>
        <CustomLineSeparator />

        <SectionWrapper>
          <Visionary />
        </SectionWrapper>
      </div>
    </main>
  );
}
