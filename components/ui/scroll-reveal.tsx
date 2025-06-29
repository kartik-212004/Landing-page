import React from 'react';

import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { RiOpenaiFill } from 'react-icons/ri';
import { SiBinance } from 'react-icons/si';

export const ScrollBasedVelocityDemo = React.memo(() => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center'>
      <VelocityScroll
        className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'
        numRows={1}
        defaultVelocity={3}
      >
        <span className='inline-flex items-center'>
          <span className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 inline-flex items-center gap-2 sm:gap-3 md:gap-4'>
            <FaGoogle className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
            <span className='font-semibold text-purple-100'>Google</span>
          </span>
          <span className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 inline-flex items-center gap-2 sm:gap-3 md:gap-4'>
            <SiBinance className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
            <span className='font-semibold text-purple-100'>Binance</span>
          </span>
          <span className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 inline-flex items-center gap-2 sm:gap-3 md:gap-4'>
            <RiOpenaiFill className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
            <span className='font-semibold text-purple-100'>ChatGPT</span>
          </span>
          <span className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 inline-flex items-center gap-2 sm:gap-3 md:gap-4'>
            <FaFacebook className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
            <span className='font-semibold text-purple-100'>Facebook</span>
          </span>
        </span>
      </VelocityScroll>
    </div>
  );
});

ScrollBasedVelocityDemo.displayName = 'ScrollBasedVelocityDemo';
