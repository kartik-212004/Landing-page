'use client';

import React from 'react';

import { motion } from 'motion/react';
import { typography } from '../lib/typography';

const ServicesSection = () => {
  return (
    <section className='bg-black text-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Badge */}
        <motion.div
          className='flex justify-center mb-8'
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
            <span className='inline'>Your Average LLM&apos;s On Steroids</span>
          </button>
        </motion.div>

        {/* Main Title */}
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
            What we provide?
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className='space-y-6 md:space-y-8'>
          {/* Top Row - 2 Cards - Mobile: Stack vertically, Large: 2 columns */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
            {/* Q-Flow Scalable Backend Infrastructure */}
            <motion.div
              className='border border-[#212121] rounded-3xl bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6,
              }}
            >
              <div className='p-6 md:p-8'>
                <h3 className='text-title-medium md:text-title-large text-white mb-3 md:mb-4'>
                  Q-Flow Scalable Backend Infrastructure
                </h3>
                <p className='text-body-small md:text-body-medium text-gray-400'>
                  Protocol extension that makes it easy to deploy and connect MCP
                  servers across blockchain ecosystems.
                </p>
              </div>
            </motion.div>

            {/* Cross-Chain Compute and Data Access */}
            <motion.div
              className='border border-[#212121] bg-[#0f0f0f] rounded-3xl transition-all duration-300 hover:border-neutral-600'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.75,
              }}
            >
              <div className='p-6 md:p-8'>
                <h3 className='text-title-medium md:text-title-large text-white mb-3 md:mb-4'>
                  Cross-Chain Compute and Data Access
                </h3>
                <p className='text-body-small md:text-body-medium text-gray-400'>
                  Supports scalable, accurate MCP services that fetch, process, and
                  relay data across multiples chains.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - 3 Cards - Mobile: Stack vertically, Tablet: 2 cols, Large: 3 cols */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {/* Voice-First Server Interface */}
            <motion.div
              className='border border-[#212121] bg-[#0f0f0f] rounded-3xl transition-all duration-300 hover:border-neutral-600'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.9,
              }}
            >
              <div className='p-6 md:p-8'>
                <h3 className='text-title-small md:text-title-medium text-white mb-3 md:mb-4'>
                  Voice-First Server Interface
                </h3>
                <p className='text-body-small text-gray-400'>
                  Enables natural voice interaction with MCP servers - trigger tasks,
                  deploy logic, or query outputs just by speaking.
                </p>
              </div>
            </motion.div>

            {/* Unified Platform for MCP Services */}
            <motion.div
              className='border border-[#212121] rounded-3xl bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.05,
              }}
            >
              <div className='p-6 md:p-8'>
                <h3 className='text-title-small md:text-title-medium text-white mb-3 md:mb-4'>
                  Unified Platform for MCP Services
                </h3>
                <p className='text-body-small text-gray-400'>
                  A developer-friendly marketplace and playground to list, access,
                  and integrate compute services in real time.
                </p>
              </div>
            </motion.div>

            {/* Tooling for Faster Development */}
            <motion.div
              className='border border-[#212121] rounded-3xl bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600 md:col-span-2 lg:col-span-1'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.2,
              }}
            >
              <div className='p-6 md:p-8'>
                <h3 className='text-title-small md:text-title-medium text-white mb-3 md:mb-4'>
                  Tooling for Faster Development
                </h3>
                <p className='text-body-small text-gray-400'>
                  SDKs, templates, and APIs that accelerate the build, testing, and
                  deployment of MCP-based AI models and on-chain logic.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
