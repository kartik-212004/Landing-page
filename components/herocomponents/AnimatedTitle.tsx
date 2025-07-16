'use client';

import React from 'react';

import { motion } from 'motion/react';

export default function AnimatedTitle() {
  return (
    <motion.h1
      className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-col text-center leading-tight px-2 sm:px-4'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.4,
      }}
    >
      <motion.span
        initial={{ opacity: 0, x: -50, rotateX: 90 }}
        animate={{ opacity: 1, x: 0, rotateX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.6,
        }}
        className='mb-1 sm:mb-2'
      >
        Revolutionizing MCP With
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 50, rotateX: -90 }}
        animate={{ opacity: 1, x: 0, rotateX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.8,
        }}
        className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'
      >
        QEDA Architecture
      </motion.span>
    </motion.h1>
  );
}
