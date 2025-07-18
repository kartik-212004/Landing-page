'use client';

import React from 'react';

import { Bitcoin } from 'lucide-react';
import { Code, Database, Puzzle } from 'lucide-react';
import { motion } from 'motion/react';
import { typography } from '../lib/typography';

const WhatAreWe = () => {
  const features = [
    {
      icon: <Puzzle className='h-12 w-12 md:h-12 md:w-12  text-white' />,
      title: 'Marketplace of MCPs.',
      description: 'Discover and integrate various MCP protocols',
    },
    {
      icon: <Code className='h-12 w-12 md:h-12 md:w-12  text-white' />,
      title: 'Voice-Driven task execution',
      description: 'Execute tasks through natural voice commands',
    },
    {
      icon: <Database className='h-12 w-12 md:h-12 md:w-12  text-white' />,
      title: 'MCP protocol for blockchain',
      description: 'Specialized protocols for blockchain integration',
    },
  ];

  return (
    <section className='bg-black text-white py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden'>
      {/* Background gradient effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Badge */}
        <motion.div
          className='flex justify-center mb-8'
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
            <Bitcoin className='w-4 h-4 md:w-5 md:h-5' />
            <span className='inline'>Bringing Scalable MPC Together</span>
          </button>
        </motion.div>

        {/* Main Heading */}
        <div className='text-center mb-12 md:mb-16'>
          <motion.h2
            className={`${typography.sectionHeading} ${typography.gradientText} ${typography.margins.headingBottom}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            What are we?
          </motion.h2>
          <motion.p
            className='text-body-medium md:text-body-large text-gray-400 max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6,
            }}
          >
            We are MCP protocol for Blockchain and real-world platforms like Maps,
            GitHub etc. Built on QEDA, it powers real-time, voice-driven execution
            with support for custom protocols.
          </motion.p>
        </div>

        {/* Feature Cards - Mobile: Stack vertically, Desktop: 3 columns */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='transition-all py-2 duration-500 hover:scale-105 group cursor-pointer'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.8 + index * 0.2,
              }}
            >
              <div className='card-mobile text-center flex flex-col md:flex-row md:text-left items-center md:items-start space-y-4 md:space-y-0 md:space-x-4'>
                <div className='w-24 h-24 md:w-28 md:h-28 bg-gradient-to-l from-white/20 via-black to-white/30 border rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0'>
                  {feature.icon}
                </div>

                <div className='flex-1'>
                  <h3 className={`${typography.cardHeading} text-white group-hover:text-gray-100 transition-colors duration-300 ${typography.margins.cardBottom}`}>
                    {feature.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreWe;
