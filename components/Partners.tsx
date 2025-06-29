import React from 'react';

import { BugIcon } from 'lucide-react';

import { ScrollBasedVelocityDemo } from './ui/scroll-reveal';

export default function Partners() {
  return (
    <div>
      <div className='flex justify-center mb-4'>
        <button className='px-5 flex flex-row space-x-2 justify-center items-center py-2 md:px-4 md:py-2 btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900'>
          <BugIcon className='w-4 h-4 md:w-5 md:h-5' />{' '}
          <span className='inline'>Built with Builders</span>
        </button>
      </div>

      {/* Main Title */}
      <div className='text-center mb-12 md:mb-16 lg:mb-20'>
        <h1 className='text-display-medium text-white mb-6 px-4 md:px-0'>
          Partners & Ecosystem
        </h1>
      </div>
      <ScrollBasedVelocityDemo />
    </div>
  );
}
