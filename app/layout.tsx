import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Axom AI - Revolutionizing MCP With QEDA Architecture',
  description:
    'MCP protocol for Blockchain and real-world platforms. Built on QEDA, powering real-time, voice-driven execution with support for custom protocols.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </head>
      <body className='antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
