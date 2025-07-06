'use client';

import React from 'react';
import { motion } from 'motion/react';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';

export default function AnimatedVideoDialog() {
  return (
    <motion.div
      className='relative z-20 w-full max-w-4xl'
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
        delay: 1.2 
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className='relative'
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        
        <div className='relative'>
          <HeroVideoDialog
            className='block w-full aspect-video rounded-lg md:rounded-xl overflow-hidden border border-neutral-700'
            animationStyle='from-center'
            videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
            thumbnailAlt='Hero Video'
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
