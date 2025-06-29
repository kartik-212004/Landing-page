import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

export function ScrollBasedVelocityDemo() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <VelocityScroll className='text-base sm:text-base md:text-lg lg:text-xl'>
        <span className='px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6'>Google</span>
        <span className='px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6'>Binance</span>
        <span className='px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6'>Chatgpty</span>
        <span className='px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6'>Facebook</span>
      </VelocityScroll>

      {/* Responsive gradient overlays */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/5 md:w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/5 md:w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  );
}
