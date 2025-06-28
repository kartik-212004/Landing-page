'use client';

import { cn } from '@/lib/utils';

import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '100s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '120s');
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getSpeed();
      setStart(true);
    }
  }, [getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start &&
            (direction === 'left' ? 'animate-scroll' : 'animate-scroll-right'),
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className='relative w-[280px] max-w-full shrink-0 rounded-xl  bg-zinc-900/80 backdrop-blur-sm px-6 py-4 md:w-[320px] shadow-lg'
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              ></div>
              <span className='relative z-20 text-body-small text-gray-300 line-clamp-3'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-4 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-caption text-white'>{item.name}</span>
                  <span className='text-overline text-white'>{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
