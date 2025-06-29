'use client';

import React, { useState } from 'react';

import { Play } from 'lucide-react';
import { motion } from 'motion/react';

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
      component: <AnimatedListDemo />, // Optional component to show notifications
    },
    {
      title: 'Deploy',
      description:
        'Deploy the MCP node on our Q-flow servers. This will spin a private server in our backend infrastructure.',
      component: <CompareDemo />, // Optional component to show tech stack
    },
    {
      title: 'Register And Publish',
      description:
        'Enter credentials to make MCP work on commands and publish in test playground.',
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
    <section className='bg-black text-white px-4 md:px-8 lg:px-12 relative overflow-hidden '>
      {/* Background effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/3 left-1/5 w-48 md:w-96 h-48 md:h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/3 right-1/5 w-48 md:w-96 h-48 md:h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <motion.div 
          className='text-center mb-12 md:mb-16 lg:mb-20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className='flex flex-row justify-center pb-4 sm:pb-8 items-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className='px-5 flex flex-row space-x-2 justify-center items-center py-1 md:px-4 md:py-2 btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
              Pick a MCP • Deploy a Node • Register • Run it
            </button>
          </motion.div>
          
          <motion.h2 
            className='text-display-medium mb-6 md:mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent px-4 md:px-0'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            How it Works
          </motion.h2>

          <motion.p 
            className='text-body-medium md:text-body-large text-gray-400 max-w-3xl mx-auto px-4 md:px-0'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Select from the marketplace, deploy or list nodes built to run:
          </motion.p>
        </motion.div>

        {/* Steps Grid - Mobile: Stack vertically, Tablet: 2 cols, Desktop: 4 cols */}
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='border border-[#222222] p-4 pt-8 rounded-3xl bg-[#0f0f0f] transition-all duration-500 cursor-pointer group h-[22rem] md:h-[32rem] lg:h-[30rem] w-full'
              onClick={() => setActiveStep(index)}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60,
                  scale: 0.9
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className='h-full flex flex-col '>
                <h3 className='text-title-medium md:text-title-large text-center  text-white group-hover:text-gray-100 transition-colors mb-4'>
                  {step.title}
                </h3>

                {/* Description */}
                <p className='text-body-small md:text-body-medium text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors'>
                  {step.description}
                </p>

                {/* Component container with fixed height and full width */}
                <div className='flex-1 flex items-center justify-center min-h-[180px] md:min-h-[200px] w-full'>
                  <div className='w-full h-full max-w-full overflow-hidden'>
                    {step.component}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Step navigation dots */}
        <motion.div 
          className='flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {steps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? 'bg-white scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
