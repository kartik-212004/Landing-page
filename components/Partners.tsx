'use client';

import React, { memo } from 'react';

import { BugIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { ScrollBasedVelocityDemo } from './ui/scroll-reveal';

// Memoized component for better performance
const Partners = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  // Simplified animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section className='bg-black text-white px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Badge */}
        <motion.div
          className='flex justify-center mb-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <button className='px-6 py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors'>
            <BugIcon className='w-4 h-4 md:w-5 md:h-5' />
            <span className='inline'>Built with Builders</span>
          </button>
        </motion.div>

        {/* Main Title */}
        <div className='text-center mb-12 md:mb-16'>
          <motion.h2
            className='text-display-medium mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: shouldReduceMotion ? 0.1 : 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                  delay: shouldReduceMotion ? 0 : 0.2
                }
              }
            }}
          >
            Partners & Ecosystem
          </motion.h2>
        </div>

        {/* ScrollBasedVelocityDemo - no additional wrapper needed */}
        <ScrollBasedVelocityDemo />
      </div>
    </section>
  );
});

Partners.displayName = 'Partners';

export default Partners;
