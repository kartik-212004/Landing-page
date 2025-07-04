'use client';

import { useState } from 'react';

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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className='relative flex items-center justify-between mobile-container py-3 bg-black text-white overflow-hidden'>
        {/* Left - Logo */}
        <div className='flex items-center space-x-2 z-20'>
          <Image
            src={logo}
            alt='Logo'
            width={24}
            height={24}
            className='md:w-[30px] md:h-[30px]'
          />
          <span className='text-title-small md:text-title-medium'>
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
        <div className='flex items-center space-x-3 z-20'>
          <button className='bg-white hidden items-center  text-black btn-text-small btn-mobile'>
            <span className='hidden sm:inline'>Whitepaper</span>
            <span className='sm:hidden'>Paper</span>
          </button>

          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 hover:bg-gray-800 rounded-md transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 lg:hidden z-10'>
            <div className='mobile-container py-6'>
              <div className='flex flex-col space-y-4'>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='text-body-medium hover:text-[#00faff] transition-colors py-2 border-b border-gray-800 last:border-b-0'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className='h-[1px] bg-gradient-to-r from-black via-[#00faff] to-black w-full' />
    </>
  );
}
