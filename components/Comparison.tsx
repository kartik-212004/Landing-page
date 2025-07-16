'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import Tablesvg from './ui/table-svg';

export default function Comparison() {
  const features = [
    'Server Interaction Playground',
    'Marketplace',
    'Voice interface for server use.',
    'Chat interface for integration',
    'Composable Infrastructure',
    'User-listed MCP',
    'General Purpose Server Hosting',
    'Multichain Server Interactions'
  ];

  const getFeatureSupport = (featureIndex: number, companyIndex: number) => {
    // AXOM MCP supports all features except the last one (index 7)
    if (companyIndex === 0) {
      return featureIndex !== 7;
    }
    // QU3 supports only index 3 and 7
    if (companyIndex === 1) {
      return featureIndex === 3 || featureIndex === 7;
    }
    // SkyAI supports only index 3
    if (companyIndex === 2) {
      return featureIndex === 3;
    }
    return false;
  };

  return (
    <section className="relative w-full bg-black py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 lg:gap-8 xl:gap-12 items-start">
            {/* Left Content - Smaller width */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
            >
              <div className="inline-block">
                <motion.h2
                  className="text-4xl xl:text-5xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.4,
                  }}
                >
                  Axom Vs The Rest:
                </motion.h2>
                <motion.p
                  className="text-base xl:text-lg text-gray-400 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.6,
                  }}
                >
                  Modular, Monetizable, and Mission-Ready
                </motion.p>
              </div>
            </motion.div>
            
            {/* Right Content - Table takes 2 columns */}
            <motion.div
              className="col-span-2 relative"
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
                className="w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.8,
                }}
              >
                <Tablesvg />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4,
              }}
            >
              Axom Vs The Rest:
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6,
              }}
            >
              Modular, Monetizable, and Mission-Ready
            </motion.p>
          </motion.div>

          {/* Mobile Table */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
          >
            <motion.div
              className="border border-neutral-800 rounded-lg bg-neutral-900/20 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.0,
              }}
            >
              <motion.h3
                className="text-white font-semibold text-lg mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.2,
                }}
              >
                AXOM MCP
              </motion.h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 1.4 + index * 0.05,
                    }}
                  >
                    <span className="text-white text-sm">{feature}</span>
                    {getFeatureSupport(index, 0) ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="pt-2 border-t border-neutral-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.8,
                  }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Holders:</span>
                    <span className="text-white">TBA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white">ATH:</span>
                    <span className="text-white">TBA</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
