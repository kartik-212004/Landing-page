'use client';

import { AnimatedList } from '@/components/magicui/animated-list';
import { Globe } from '@/components/magicui/globe';
import { Compare } from '@/components/ui/compare';
import { cn } from '@/lib/utils';

import { useEffect, useState } from 'react';

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
        'relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-3',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[102%]',
        // dark styles for better visibility
        'bg-[#1c1c1c] backdrop-blur-sm shadow-lg'
      )}
    >
      <div className='flex flex-row items-center gap-3 w-full'>
        <div
          className='flex size-8 items-center justify-center rounded-lg text-white flex-shrink-0'
          style={{
            backgroundColor: color,
          }}
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
    </figure>
  );
};

export { Notification };

export function AnimatedListDemo({ className }: { className?: string }) {
  // Show 3 notifications on mobile, 5 on larger screens
  const getNotificationCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 4 : 5;
    }
    return 5; // Default for SSR
  };

  const [notificationCount, setNotificationCount] = useState(getNotificationCount);

  useEffect(() => {
    const handleResize = () => {
      setNotificationCount(getNotificationCount());
    };

    window.addEventListener('resize', handleResize);
    // Set initial count after mount
    setNotificationCount(getNotificationCount());

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={cn(
        'relative flex h-[100%] w-full flex-col overflow-hidden rounded-lgp-2',
        className
      )}
    >
      <AnimatedList className='w-full'>
        {notifications.slice(0, notificationCount).map((item, idx) => (
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
    <div className='w-full h-[180px] md:h-[200px] rounded-lg overflow-hidden bg-black/10'>
      <Compare
        firstImage='https://assets.aceternity.com/code-problem.png'
        secondImage='https://assets.aceternity.com/code-solution.png'
        firstImageClassName='object-cover object-center w-full h-full'
        secondImageClassname='object-cover object-center w-full h-full'
        className='w-full h-full min-w-full'
        slideMode='hover'
      />
    </div>
  );
}

export function GlobeDemo() {
  return (
    <div className='relative flex w-full h-[180px] md:h-[200px] items-center justify-center overflow-hidden rounded-lg bg-black/10'>
      <Globe className='scale-75 md:scale-90 w-full h-full' />
      <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]' />
    </div>
  );
}
