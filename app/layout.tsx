import Navbar from '@/components/Navbar';

import type { Metadata, Viewport } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Axom AI - Revolutionizing MCP With QEDA Architecture',
  description:
    'MCP protocol for Blockchain and real-world platforms. Built on QEDA, powering real-time, voice-driven execution with support for custom protocols.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
