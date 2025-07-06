'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function AnimatedLaunchButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
        delay: 1.0 
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className='bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:btn-text-large border border-neutral-400 rounded-lg hover:bg-neutral-100 transition-colors relative overflow-hidden group font-semibold'>
        <motion.span
          className='relative z-10'
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Launch Dapp
        </motion.span>
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20'
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
}
