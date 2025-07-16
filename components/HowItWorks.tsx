'use client';

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { CompareDemo } from './ui/Howitworks-components';
import { GlobeDemo } from './ui/Howitworks-components';
import { AnimatedListDemo } from './ui/Howitworks-components';
import { typography } from '@/lib/typography';

const HowItWorks = React.memo(() => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for performance
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Memoized step change handler
  const handleStepChange = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  // Memoize steps to prevent re-renders
  const steps = useMemo(() => [
    {
      title: 'Choose a MCP Server',
      description: 'Launch your own compute server or pick from existing nodes listed on the marketplace.',
      component: <AnimatedListDemo />,
    },
    {
      title: 'Deploy',
      description: 'Deploy the MCP node on our Q-flow servers. This will spin a private server in our backend infrastructure.',
      component: <CompareDemo />,
    },
    {
      title: 'Register And Publish',
      description: 'Enter credentials to make MCP work on commands and publish in test playground.',
      component: <GlobeDemo />,
    },
    {
      title: 'Test in Playground',
      description: 'Use the Playground to simulate inputs, observe outputs, and configure runtime behaviors.',
      icon: <Play className='w-6 h-6' />,
      component: <CompareDemo />,
    },
  ], []);

  // Simplified animation variants for better performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: shouldReduceMotion ? { duration: 0.1 } : { duration: 0.2 }
    }
  }), [shouldReduceMotion]);

  const childVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.1 } : { duration: 0.3 }
    }
  }), [shouldReduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      className='bg-black text-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden perf-optimized'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background effects - only render if in view */}
      {isInView && (
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/3 left-1/5 w-48 md:w-96 h-48 md:h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/3 right-1/5 w-48 md:w-96 h-48 md:h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
        </div>
      )}

      <motion.div
        className='max-w-7xl mx-auto relative z-10'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.1,
              delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        {/* Header */}
        <motion.div
          className='text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16'
          variants={childVariants}
        >
          <motion.div
            className='flex flex-row justify-center pb-2 sm:pb-3 md:pb-6 items-center'
            variants={childVariants}
          >
            <button className='px-3 sm:px-4 md:px-5 flex flex-row space-x-2 justify-center items-center py-1 md:py-2 text-xs sm:text-sm md:btn-text-medium border-2 border-neutral-700 rounded-2xl sm:rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors font-medium'>
              Pick a MCP • Deploy a Node • Register • Run it
            </button>
          </motion.div>

          <motion.h2
            className={`${typography.sectionHeading} ${typography.gradientText} mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 sm:px-4 md:px-0 hero-text`}
            variants={childVariants}
          >
            How it Works
          </motion.h2>

          <motion.p
            className={`${typography.bodyText} max-w-3xl mx-auto px-2 sm:px-4 md:px-0 leading-relaxed`}
            variants={childVariants}
          >
            Select from the marketplace, deploy or list nodes built to run:
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: shouldReduceMotion ? 
                { duration: 0.1 } : 
                { staggerChildren: 0.05, delayChildren: 0.1 }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='border border-[#222222] p-3 sm:p-4 md:p-5 pt-4 sm:pt-6 md:pt-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#0f0f0f] cursor-pointer group h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] w-full hover:border-gray-600 motion-element'
              onClick={() => handleStepChange(index)}
              variants={childVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className='h-full flex flex-col'>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center text-white group-hover:text-gray-100 transition-colors mb-2 sm:mb-3 md:mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`${typography.smallText} text-center mb-3 sm:mb-4 md:mb-6 group-hover:text-gray-300 transition-colors px-1 sm:px-2 md:px-0 leading-relaxed`}>
                  {step.description}
                </p>

                {/* Component container with responsive height */}
                <div className='flex-1 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[180px] w-full'>
                  <div className='w-full h-full max-w-full overflow-hidden observer-element'>
                    {step.component}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Step navigation dots */}
        <motion.div
          className='flex justify-center mt-6 sm:mt-8 md:mt-12 space-x-2 md:space-x-3'
          variants={childVariants}
        >
          {steps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleStepChange(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                activeStep === index
                  ? 'bg-white scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
});

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
