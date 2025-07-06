'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState, useCallback, useMemo } from 'react';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications = [
  {
    name: 'Redis',
    description: 'Database Server',
    time: '15m ago',
    icon: '🛢️',
    color: '#DC382D',
  },
  {
    name: 'Microsoft Playwright MCP',
    description: 'Browser Automation',
    time: '10m ago',
    icon: '🎭',
    color: '#00BCF2',
  },
  {
    name: 'Alchemy MCP Server',
    description: 'Blockchain API',
    time: '5m ago',
    icon: '⚗️',
    color: '#8B5CF6',
  },
  {
    name: 'Base',
    description: 'L2 Blockchain',
    time: '2m ago',
    icon: '🏗️',
    color: '#0052FF',
  },
  {
    name: 'Github',
    description: 'Code Repository',
    time: '1m ago',
    icon: '🔧',
    color: '#24292E',
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.figure
      className={cn(
        'relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-xl p-3',
        'bg-[#1c1c1c] backdrop-blur-sm shadow-sm border border-gray-800/50'
      )}
      initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
    >
      <div className='flex flex-row items-center gap-3 w-full'>
        <div
          className='flex size-8 items-center justify-center rounded-lg text-white flex-shrink-0'
          style={{ backgroundColor: color }}
        >
          <span className='text-sm'>{icon}</span>
        </div>
        <div className='flex flex-col overflow-hidden flex-1 min-w-0'>
          <figcaption className='flex flex-row items-center whitespace-pre text-caption text-white'>
            <span className='text-caption truncate'>{name}</span>
            <span className='mx-1'>·</span>
            <span className='text-overline text-gray-400 flex-shrink-0'>{time}</span>
          </figcaption>
          <p className='text-body-small text-gray-300 truncate'>{description}</p>
        </div>
      </div>
    </motion.figure>
  );
};

export { Notification };

// Lightweight animated list component
export function AnimatedListDemo({ className }: { className?: string }) {
  const [visibleItems, setVisibleItems] = useState<Item[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const resetAnimation = useCallback(() => {
    setVisibleItems([]);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      // Show all items immediately if motion is reduced
      setVisibleItems(notifications.slice(0, 4));
      return;
    }

    const interval = setInterval(() => {
      if (currentIndex < notifications.length) {
        setVisibleItems(prev => [...prev, notifications[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        resetAnimation();
      }
    }, 1000); // Increased interval for better performance

    return () => clearInterval(interval);
  }, [currentIndex, shouldReduceMotion, resetAnimation]);

  const displayCount = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 3 : 4;
    }
    return 4;
  }, []);

  return (
    <div className={cn('relative flex h-full w-full flex-col overflow-hidden rounded-lg', className)}>
      <div className='space-y-2 flex-1 overflow-hidden'>
        {visibleItems.slice(-displayCount).map((item, idx) => (
          <Notification {...item} key={`${item.name}-${idx}`} />
        ))}
      </div>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent'></div>
    </div>
  );
}

// Lightweight deployment progress demo
export function CompareDemo() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      setStatus('Ready! ✅');
      return;
    }

    const steps = [
      { label: 'Initializing...', duration: 800 },
      { label: 'Building container...', duration: 1500 },
      { label: 'Deploying to cluster...', duration: 1200 },
      { label: 'Starting services...', duration: 800 },
      { label: 'Ready! ✅', duration: 800 },
    ];
    
    let currentStep = 0;
    let currentProgress = 0;

    const runStep = () => {
      if (currentStep < steps.length) {
        setStatus(steps[currentStep].label);
        
        const stepProgress = (currentStep + 1) * (100 / steps.length);
        const duration = steps[currentStep].duration;
        const progressIncrement = (stepProgress - currentProgress) / (duration / 50);

        const progressInterval = setInterval(() => {
          currentProgress += progressIncrement;
          if (currentProgress >= stepProgress) {
            currentProgress = stepProgress;
            clearInterval(progressInterval);
            currentStep++;
            setTimeout(runStep, 200);
          }
          setProgress(Math.min(100, currentProgress));
        }, 50);
      } else {
        // Reset after completion
        setTimeout(() => {
          currentStep = 0;
          currentProgress = 0;
          setProgress(0);
          runStep();
        }, 2000);
      }
    };

    runStep();
  }, [shouldReduceMotion]);

  return (
    <div className='w-full h-full flex flex-col justify-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700/50'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-300'>Deployment Status</span>
          <span className='text-xs text-gray-400'>{Math.round(progress)}%</span>
        </div>
        
        <div className='w-full bg-gray-700 rounded-full h-2 overflow-hidden'>
          <motion.div
            className='h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
            style={{ width: `${progress}%` }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.1 }}
          />
        </div>
        
        <div className='flex items-center space-x-2'>
          <motion.div
            className='w-2 h-2 bg-blue-500 rounded-full'
            animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className='text-sm text-gray-200'>{status}</span>
        </div>
      </div>
    </div>
  );
}

// Ultra-lightweight network visualization
export function GlobeDemo() {
  const [activeNode, setActiveNode] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nodes = useMemo(() => [
    { x: 20, y: 30, label: 'US-East' },
    { x: 70, y: 25, label: 'EU-West' },
    { x: 85, y: 60, label: 'Asia-Pacific' },
    { x: 50, y: 75, label: 'US-West' },
  ], []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length);
    }, 2000); // Slower for better performance
    
    return () => clearInterval(interval);
  }, [nodes.length, shouldReduceMotion]);

  return (
    <div className='relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900/30 to-blue-900/20 rounded-lg border border-gray-700/30 overflow-hidden'>
      {/* Network background */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]'></div>
      </div>

      {/* Network nodes */}
      <div className='relative w-full h-full'>
        {nodes.map((node, index) => (
          <div key={index}>
            {/* Node */}
            <motion.div
              className={`absolute w-3 h-3 rounded-full ${
                activeNode === index ? 'bg-blue-400' : 'bg-gray-500'
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={shouldReduceMotion ? {} : {
                scale: activeNode === index ? [1, 1.3, 1] : 1,
                opacity: activeNode === index ? [0.8, 1, 0.8] : 0.6,
              }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Node label */}
            <motion.div
              className='absolute text-xs text-gray-300 font-medium'
              style={{
                left: `${node.x}%`,
                top: `${node.y + 12}%`,
                transform: 'translateX(-50%)',
              }}
              animate={shouldReduceMotion ? {} : {
                opacity: activeNode === index ? 1 : 0.5,
                scale: activeNode === index ? 1.1 : 1,
              }}
            >
              {node.label}
            </motion.div>
          </div>
        ))}
        
        {/* Center hub */}
        <motion.div
          className='absolute w-4 h-4 bg-blue-500 rounded-full'
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 0 0 rgba(59, 130, 246, 0.7)',
              '0 0 0 8px rgba(59, 130, 246, 0)',
              '0 0 0 0 rgba(59, 130, 246, 0)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
