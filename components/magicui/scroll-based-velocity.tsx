'use client';

import { cn } from '@/lib/utils';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'motion/react';

interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultVelocity?: number;
  className?: string;
  numRows?: number;
}

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity: number;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxText = React.memo(({ children, baseVelocity = 100, ...props }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const shouldReduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  // Intersection Observer for performance
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: '50px 0px' // Start animating slightly before/after viewport
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: shouldReduceMotion ? 100 : 50,
    stiffness: shouldReduceMotion ? 1000 : 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, shouldReduceMotion ? 1 : 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(3);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized calculation function
  const calculateRepetitions = useCallback(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.offsetWidth;
      const newRepetitions = Math.max(2, Math.ceil(containerWidth / textWidth) + 1);
      
      setRepetitions(prev => prev !== newRepetitions ? newRepetitions : prev);
    }
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = setTimeout(calculateRepetitions, 150);
  }, [calculateRepetitions]);

  useEffect(() => {
    const initialTimer = setTimeout(calculateRepetitions, 100);
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      clearTimeout(initialTimer);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateRepetitions, handleResize]);

  const x = useTransform(baseX, v => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    // Only animate if in view and motion is not reduced
    if (!isInView || shouldReduceMotion) return;
    
    // Throttle animation frame for better performance
    const clampedDelta = Math.min(delta, 32);
    let moveBy = directionFactor.current * baseVelocity * (clampedDelta / 1000);

    const velocity = velocityFactor.get();
    if (velocity < 0) {
      directionFactor.current = -1;
    } else if (velocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocity;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className='relative w-full overflow-hidden whitespace-nowrap'
      {...props}
    >
      <motion.div
        className='inline-block will-change-transform'
        style={{ x }}
      >
        {Array.from({ length: repetitions }, (_, i) => (
          <span
            key={i}
            ref={i === 0 ? textRef : null}
            className='inline-block'
          >
            {children}{' '}
          </span>
        ))}
      </motion.div>
      
      {/* Optimized fade gradients with better performance */}
      <div className='absolute left-0 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none z-10 will-change-auto' />
      <div className='absolute right-0 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none z-10 will-change-auto' />
    </div>
  );
});

ParallaxText.displayName = 'ParallaxText';

export const VelocityScroll = React.memo(({
  defaultVelocity = 5,
  numRows = 1,
  children,
  className,
  ...props
}: VelocityScrollProps) => {
  return (
    <div
      className={cn(
        'relative w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] will-change-auto',
        className
      )}
      {...props}
    >
      {Array.from({ length: numRows }, (_, i) => (
        <ParallaxText
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
        >
          {children}
        </ParallaxText>
      ))}
    </div>
  );
});

VelocityScroll.displayName = 'VelocityScroll';
