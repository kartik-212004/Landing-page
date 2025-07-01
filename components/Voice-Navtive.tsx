import React from 'react';

export default function VoiceNative() {
  return (
    <section className='relative w-full bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Desktop Layout */}
        <div className='hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-6'>
            {/* Badge */}
            <div className='inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm font-medium text-white'>
              <div className='w-4 h-4 mr-2 bg-white rounded-full flex items-center justify-center'>
                <div className='w-2 h-2 bg-black rounded-full'></div>
              </div>
              Talk. Trigger. Compute.
            </div>

            {/* Title */}
            <h2 className='text-5xl xl:text-6xl font-bold text-white leading-tight'>
              Voice-Native Servers
            </h2>

            {/* Description */}
            <p className='text-lg xl:text-xl text-gray-400 leading-relaxed'>
              MCP servers now listen. Voice becomes the first protocol - fast,
              natural, frictionless. Command infrastructure like you command an
              assistant. This is compute you can{' '}
              <span className='text-white font-semibold'>speak</span> to.
            </p>
          </div>

          {/* Right Content - Video card */}
          <div className='flex items-center justify-center'>
            <div className='relative w-96 h-96 border border-neutral-800 rounded-3xl overflow-hidden'>
              {/* Video background covering full card */}
              <video
                src='/aivideo.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Text overlay */}
              <div className='relative z-10 w-full h-full flex flex-col items-center justify-start pt-8 bg-black/20'>
                <h3 className='text-2xl font-semibold text-white'>
                  Ask with{' '}
                  <span className='bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'>
                    Axom
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='lg:hidden space-y-8'>
          {/* Badge */}
          <div className='flex justify-center'>
            <div className='inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm font-medium text-white'>
              <div className='w-4 h-4 mr-2 bg-white rounded-full flex items-center justify-center'>
                <div className='w-2 h-2 bg-black rounded-full'></div>
              </div>
              Talk. Trigger. Compute.
            </div>
          </div>

          {/* Title */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center leading-tight'>
            Voice-Native Servers
          </h2>

          {/* Description */}
          <p className='text-base md:text-lg text-gray-400 text-center leading-relaxed px-2'>
            MCP servers now listen. Voice becomes the first protocol - fast, natural,
            frictionless. Command infrastructure like you command an assistant. This
            is compute you can{' '}
            <span className='text-white font-semibold'>speak</span> to.
          </p>

          {/* Mobile Card */}
          <div className='mx-auto max-w-sm'>
            <div className='relative border border-neutral-800 rounded-2xl overflow-hidden h-64'>
              {/* Video background covering full card */}
              <video
                src='/aivideo.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Text overlay */}
              <div className='relative z-10 w-full h-full flex flex-col items-center justify-start pt-6 bg-black/20 p-6'>
                <h3 className='text-xl font-semibold text-white text-center'>
                  Ask with{' '}
                  <span className='bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'>
                    Axom
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
