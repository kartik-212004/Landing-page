import React from 'react';

import { Globe, Lock, Settings, Users, Zap } from 'lucide-react';

import Buttons from './ui/Buttons';

export default function UseCases() {
  const useCases = [
    {
      icon: Globe,
      title: 'Adaptive MCP Hosting',
      description:
        'Spin up intelligent systems that can learn, evolve, and persist across sessions without centralized control.',
    },
    {
      icon: Settings,
      title: 'Realtime Monitoring',
      description:
        'Real-time on-chain data analysis powered by LLMs. Set up AI-driven behavior monitoring & alerts.',
    },
    {
      icon: Users,
      title: 'Agent Interaction',
      description:
        'Boost agent interaction with on-chain data streams. With live stream of data from Real world applications.',
    },
    {
      icon: Zap,
      title: 'Q-Flow Nodes',
      description: 'Deliver scalable nodes with Q-flow backend.',
    },
    {
      icon: Lock,
      title: 'Devs Usecases',
      description:
        'Accelerate contract and dApp development pipelines. Access full SDKs, devkits, and utility layers.',
    },
  ];

  return (
    <section className='relative w-full bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20'>
          <Buttons className='mb-8'> Give your average LLM superpowers</Buttons>

          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6'>
            Use Cases
          </h2>

          <p className='text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl'>
            From the marketplace, deploy or list nodes built to run:
          </p>
        </div>
        
        {/* Use Cases Grid - Top 3 cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10'>
          {useCases.slice(0, 3).map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className='group relative p-4 md:p-6 lg:p-8 bg-transparent rounded-2xl'
              >
                {/* Vertical accent line */}
                <div className='absolute left-4 md:left-6 lg:left-8 top-4 md:top-6 lg:top-8 w-0.5 h-6 md:h-7 lg:h-8 bg-white'></div>

                {/* Icon */}
                <div className='flex items-center mb-3 md:mb-4 ml-4 md:ml-6 lg:ml-8'>
                  <IconComponent className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white transition-colors duration-300' />
                </div>

                <div className='ml-4 md:ml-6 lg:ml-8'>
                  <h3 className='text-base md:text-lg lg:text-xl font-semibold text-white mb-2 md:mb-3 group-hover:text-purple-100 transition-colors duration-300'>
                    {useCase.title}
                  </h3>
                  <p className='text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 cards - Centered */}
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl'>
            {useCases.slice(3).map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index + 3}
                  className='group relative p-4 md:p-6 lg:p-8 bg-transparent rounded-2xl'
                >
                  {/* Vertical accent line */}
                  <div className='absolute left-4 md:left-6 lg:left-8 top-4 md:top-6 lg:top-8 w-0.5 h-6 md:h-7 lg:h-8 bg-white'></div>

                  {/* Icon */}
                  <div className='flex items-center mb-3 md:mb-4 ml-4 md:ml-6 lg:ml-8'>
                    <IconComponent className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white transition-colors duration-300' />
                  </div>

                  <div className='ml-4 md:ml-6 lg:ml-8'>
                    <h3 className='text-base md:text-lg lg:text-xl font-semibold text-white mb-2 md:mb-3 group-hover:text-purple-100 transition-colors duration-300'>
                      {useCase.title}
                    </h3>
                    <p className='text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
