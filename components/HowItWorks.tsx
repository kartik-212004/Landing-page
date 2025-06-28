'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import React, { useState } from 'react';

import { Play, Rocket, Server, Settings } from 'lucide-react';

import { CompareDemo } from './ui/Howitworks-components';
import { GlobeDemo } from './ui/Howitworks-components';
import { AnimatedListDemo } from './ui/Howitworks-components';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Choose a MCP Server',
      description:
        'Launch your own compute server or pick from existing nodes listed on the marketplace.',
      icon: <Server className='w-6 h-6' />,
      component: <AnimatedListDemo />, // Optional component to show notifications
    },
    {
      title: 'Deploy',
      description:
        'Deploy the MCP node on our Q-flow servers. This will spin a private server in our backend infrastructure.',
      icon: <Rocket className='w-6 h-6' />,
      component: <CompareDemo />, // Optional component to show tech stack
    },
    {
      title: 'Register And Publish',
      description:
        'Enter credentials to make MCP work on commands and publish in test playground.',
      icon: <Settings className='w-6 h-6' />,
      component: <GlobeDemo />, // Optional component to show tech stack
    },
    {
      title: 'Test in Playground',
      description:
        'Use the Playground to simulate inputs, observe outputs, and configure runtime behaviors.',
      icon: <Play className='w-6 h-6' />,
      component: <CompareDemo />, // Optional component to show tech stack
    },
  ];

  return (
    <section className='bg-black text-white mobile-container relative overflow-hidden py-12 md:py-16 lg:py-20'>
      {/* Background effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/3 left-1/5 w-48 md:w-96 h-48 md:h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/3 right-1/5 w-48 md:w-96 h-48 md:h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16 lg:mb-20'>
          <Button className='btn-text-small border-2 my-6 md:my-8 border-neutral-700 rounded-xl md:rounded-2xl bg-neutral-900 btn-mobile'>
            Bringing Scalable MPC Together
          </Button>
          <h2 className='text-display-medium mb-6 md:mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4 md:px-0'>
            How it Works
          </h2>

          <p className='text-body-medium md:text-body-large text-gray-400 max-w-3xl mx-auto px-4 md:px-0'>
            Select from the marketplace, deploy or list nodes built to run:
          </p>
        </div>

        {/* Steps Grid - Mobile: Stack vertically, Tablet: 2 cols, Desktop: 4 cols */}
        <div className='mobile-grid'>
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`border card-mobile bg-[#0f0f0f] transition-all duration-500 cursor-pointer group min-h-[24rem] md:min-h-[28rem] lg:h-[37rem] ${
                activeStep === index
                  ? 'border-neutral-500 shadow-lg'
                  : 'border-[#212121] hover:border-neutral-600'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <CardContent className='p-4 md:p-6 h-full flex flex-col'>
                {/* Icon */}
                <div className='flex justify-center mb-4'>
                  <div className='p-3 bg-neutral-800 rounded-full'>
                    {React.cloneElement(step.icon, {
                      className: 'w-5 h-5 md:w-6 md:h-6',
                    })}
                  </div>
                </div>

                <h3 className='text-title-medium md:text-title-large text-center text-white group-hover:text-gray-100 transition-colors mb-4'>
                  {step.title}
                </h3>

                {/* Description */}
                <p className='text-body-small md:text-body-medium text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors flex-grow'>
                  {step.description}
                </p>

                {/* Component - hide on mobile to save space, show on larger screens */}
                <div className='hidden md:block'>{step.component}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Step navigation dots */}
        <div className='flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3'>
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? 'bg-white scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
