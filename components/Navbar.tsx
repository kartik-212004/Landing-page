'use client';

import { memo, useCallback, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Menu, X } from 'lucide-react';

import logo from '../public/logo.png';

const navLinks = [
  { href: '#what', label: 'What are We' },
  { href: '#how', label: 'How it Works' },
  { href: '#provide', label: 'What we Provide' },
  { href: '#usecases', label: 'Use Cases' },
  { href: '#stack', label: 'Dev Stack' },
];

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 flex  items-center justify-between mobile-container py-2 sm:py-3 bg-black/95 backdrop-blur-sm text-white overflow-hidden border-b border-gray-800/50'>
        {/* Left - Logo */}
        <div className='flex items-center space-x-2 z-20'>
          <Image
            src={logo}
            alt='Logo'
            width={22}
            height={22}
            className='sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px]'
          />
          <span className='text-lg sm:text-title-small md:text-title-medium font-medium'>
            ax<span className='text-[#00faff]'>o</span>m{' '}
            <span className='font-normal'>ai</span>
          </span>
        </div>

        {/* Center - Desktop Links */}
        <div className='hidden lg:flex space-x-6 xl:space-x-8 text-body-small z-10'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='hover:text-[#00faff] transition-colors whitespace-nowrap'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Button and Mobile Menu */}
        <div className='flex items-center space-x-2 sm:space-x-3 z-20'>
          <button className='bg-white hidden sm:flex items-center text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:btn-text-small font-medium'>
            <span className='hidden sm:inline'>Whitepaper</span>
            <span className='sm:hidden'>Paper</span>
          </button>

          {/* Mobile menu button */}
          <button
            className='lg:hidden p-1.5 sm:p-2 hover:bg-gray-800 rounded-md transition-colors'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 lg:hidden z-40'>
            <div className='mobile-container py-4 sm:py-6'>
              <div className='flex flex-col space-y-3 sm:space-y-4'>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='text-base sm:text-body-medium hover:text-[#00faff] transition-colors py-2 border-b border-gray-800 last:border-b-0 font-medium'
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gradient bottom border */}
        <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-black via-purple-600 to-black w-full' />
      </nav>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
