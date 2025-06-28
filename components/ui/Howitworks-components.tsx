'use client';

// import React, { use } from "react";
import { AnimatedList } from '@/components/magicui/animated-list';
import { Globe } from '@/components/magicui/globe';
import { Compare } from '@/components/ui/compare';
import { cn } from '@/lib/utils';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: 'Redis',
    description: 'Database Server',
    time: '15m ago',
    icon: '🛢️', // Replaced StackIcon with a Redis emoji
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
    icon: '�',
    color: '#24292E',
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-2xl p-3 ',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[102%]',
        // dark styles for better visibility
        'bg-[#1c1c1c] backdrop-blur-sm shadow-lg'
      )}
    >
      <div className='flex flex-row items-center gap-3'>
        <div
          className='flex size-8 items-center justify-center rounded-lg text-white'
          style={{
            backgroundColor: color,
          }}
        >
          <span className='text-sm'>{icon}</span>
        </div>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-caption text-white'>
            <span className='text-caption'>{name}</span>
            <span className='mx-1'>·</span>
            <span className='text-overline text-gray-400'>{time}</span>
          </figcaption>
          <p className='text-body-small text-gray-300'>{description}</p>
        </div>
      </div>
    </figure>
  );
};

export { Notification };

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full min-h-[200px] flex-col overflow-hidden rounded-lg bg-black/5 p-2',
        className
      )}
    >
      <AnimatedList>
        {notifications.slice(0, 5).map((item, idx) => (
          <Notification
            {...item}
            key={idx}
          />
        ))}
      </AnimatedList>

      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent'></div>
    </div>
  );
}

export function CompareDemo() {
  return (
    <div className='w-full h-full min-h-[200px] rounded-lg overflow-hidden'>
      <Compare
        firstImage='https://assets.aceternity.com/code-problem.png'
        secondImage='https://assets.aceternity.com/code-solution.png'
        firstImageClassName='object-cover object-left-top'
        secondImageClassname='object-cover object-left-top'
        className='w-full h-full min-h-[200px]'
        slideMode='hover'
      />
    </div>
  );
}

export function GlobeDemo() {
  return (
    <div className='relative flex w-full h-full min-h-[200px] items-center justify-center overflow-hidden rounded-lg p-2'>
      <Globe className='scale-90' />
      <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]' />
    </div>
  );
}
