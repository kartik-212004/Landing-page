'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function VoiceNative() {
  return (
    <section className='relative w-full bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Desktop Layout */}
        <div className='hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center'>
          {/* Left Content */}
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            {/* Badge */}
            <motion.div
              className='inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm font-medium text-white'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4,
              }}
            >
              <div className='w-4 h-4 mr-2 bg-white rounded-full flex items-center justify-center'>
                <div className='w-2 h-2 bg-black rounded-full'></div>
              </div>
              Talk. Trigger. Compute.
            </motion.div>

            {/* Title */}
            <motion.h2
              className='text-5xl xl:text-6xl font-bold text-white leading-tight'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6,
              }}
            >
              Voice-Native Servers
            </motion.h2>

            {/* Description */}
            <motion.p
              className='text-lg xl:text-xl text-gray-400 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.8,
              }}
            >
              MCP servers now listen. Voice becomes the first protocol - fast,
              natural, frictionless. Command infrastructure like you command an
              assistant. This is compute you can{' '}
              <span className='text-white font-semibold'>speak</span> to.
            </motion.p>
          </motion.div>

          {/* Right Content - Video card */}
          <motion.div
            className='flex items-center justify-center'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            <motion.div
              className='relative w-96 h-96 border border-neutral-800 rounded-3xl overflow-hidden'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.8,
              }}
            >
              {/* Video background covering full card */}
              <video
                src='/aivideo.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Text overlay */}
              <div className='relative z-10 w-full h-full flex flex-col items-center justify-start pt-8 bg-black/20'>
                <motion.h3
                  className='text-2xl font-semibold text-white'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.2,
                  }}
                >
                  Ask with{' '}
                  <span className='bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'>
                    Axom
                  </span>
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className='lg:hidden space-y-8'>
          {/* Badge */}
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            <div className='inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm font-medium text-white'>
              <div className='w-4 h-4 mr-2 bg-white rounded-full flex items-center justify-center'>
                <div className='w-2 h-2 bg-black rounded-full'></div>
              </div>
              Talk. Trigger. Compute.
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center leading-tight'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            Voice-Native Servers
          </motion.h2>

          {/* Description */}
          <motion.p
            className='text-base md:text-lg text-gray-400 text-center leading-relaxed px-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6,
            }}
          >
            MCP servers now listen. Voice becomes the first protocol - fast, natural,
            frictionless. Command infrastructure like you command an assistant. This
            is compute you can{' '}
            <span className='text-white font-semibold'>speak</span> to.
          </motion.p>

          {/* Mobile Card */}
          <motion.div
            className='mx-auto max-w-sm'
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
          >
            <div className='relative border border-neutral-800 rounded-2xl overflow-hidden h-64'>
              {/* Video background covering full card */}
              <video
                src='/aivideo.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Text overlay */}
              <div className='relative z-10 w-full h-full flex flex-col items-center justify-start pt-6 bg-black/20 p-6'>
                <motion.h3
                  className='text-xl font-semibold text-white text-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.2,
                  }}
                >
                  Ask with{' '}
                  <span className='bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'>
                    Axom
                  </span>
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
