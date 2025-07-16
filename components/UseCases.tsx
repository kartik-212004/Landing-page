'use client';

import React from 'react';

import { Globe, Lock, Settings, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

import Buttons from './ui/Buttons';
import { typography } from '../lib/typography';

export default function UseCases() {
  const useCases = [
    {
      icon: Globe,
      title: 'Adaptive MCP Hosting',
      description:
        'Spin up intelligent systems that can learn, evolve, and persist across sessions without centralized control.',
    },
    {
      icon: Settings,
      title: 'Realtime Monitoring',
      description:
        'Real-time on-chain data analysis powered by LLMs. Set up AI-driven behavior monitoring & alerts.',
    },
    {
      icon: Users,
      title: 'Agent Interaction',
      description:
        'Boost agent interaction with on-chain data streams. With live stream of data from Real world applications.',
    },
    {
      icon: Zap,
      title: 'Q-Flow Nodes',
      description: 'Deliver scalable nodes with Q-flow backend.',
    },
    {
      icon: Lock,
      title: 'Devs Usecases',
      description:
        'Accelerate contract and dApp development pipelines. Access full SDKs, devkits, and utility layers.',
    },
  ];

  return (
    <section className='relative w-full bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            <Buttons className='mb-8'> Give your average LLM superpowers</Buttons>
          </motion.div>

          <motion.h2
            className={`${typography.sectionHeading} text-white ${typography.margins.headingBottom}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            Use Cases
          </motion.h2>

          <motion.p
            className='text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6,
            }}
          >
            From the marketplace, deploy or list nodes built to run:
          </motion.p>
        </div>

        {/* Use Cases Grid - Top 3 cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10'>
          {useCases.slice(0, 3).map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={index}
                className='group relative p-4 md:p-6 lg:p-8 bg-transparent rounded-2xl'
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.8 + index * 0.1,
                }}
              >
                {/* Vertical accent line */}
                <div className='absolute left-4 md:left-6 lg:left-8 top-4 md:top-6 lg:top-8 w-0.5 h-6 md:h-7 lg:h-8 bg-white'></div>

                {/* Icon */}
                <motion.div
                  className='flex items-center mb-3 md:mb-4 ml-4 md:ml-6 lg:ml-8'
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.0 + index * 0.1,
                  }}
                >
                  <IconComponent className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white transition-colors duration-300' />
                </motion.div>

                <div className='ml-4 md:ml-6 lg:ml-8'>
                  <motion.h3
                    className='text-base md:text-lg lg:text-xl font-semibold text-white mb-2 md:mb-3 group-hover:text-purple-100 transition-colors duration-300'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 1.1 + index * 0.1,
                    }}
                  >
                    {useCase.title}
                  </motion.h3>
                  <motion.p
                    className='text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 1.2 + index * 0.1,
                    }}
                  >
                    {useCase.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom 2 cards - Centered */}
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl'>
            {useCases.slice(3).map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={index + 3}
                  className='group relative p-4 md:p-6 lg:p-8 bg-transparent rounded-2xl'
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.5 + index * 0.1,
                  }}
                >
                  {/* Vertical accent line */}
                  <div className='absolute left-4 md:left-6 lg:left-8 top-4 md:top-6 lg:top-8 w-0.5 h-6 md:h-7 lg:h-8 bg-white'></div>

                  {/* Icon */}
                  <motion.div
                    className='flex items-center mb-3 md:mb-4 ml-4 md:ml-6 lg:ml-8'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 1.7 + index * 0.1,
                    }}
                  >
                    <IconComponent className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white transition-colors duration-300' />
                  </motion.div>

                  <div className='ml-4 md:ml-6 lg:ml-8'>
                    <motion.h3
                      className='text-base md:text-lg lg:text-xl font-semibold text-white mb-2 md:mb-3 group-hover:text-purple-100 transition-colors duration-300'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 1.8 + index * 0.1,
                      }}
                    >
                      {useCase.title}
                    </motion.h3>
                    <motion.p
                      className='text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 1.9 + index * 0.1,
                      }}
                    >
                      {useCase.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
