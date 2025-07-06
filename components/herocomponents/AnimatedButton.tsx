'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function AnimatedButton() {
  return (
    <motion.button
      className='px-3 sm:px-4 py-2 md:px-6 md:py-3 flex flex-row space-x-2 justify-center items-center text-xs sm:text-sm md:btn-text-medium border-2 border-neutral-700 rounded-2xl sm:rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors font-medium'
      initial={{ opacity: 0, y: -30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1],
        delay: 0.2 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Zap className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' />
      </motion.div>
      <span className='hidden sm:inline'>
        Extend your LLM capabilities with Aximo
      </span>
      <span className='sm:hidden'>Extend LLM with Aximo</span>
    </motion.button>
  );
}
