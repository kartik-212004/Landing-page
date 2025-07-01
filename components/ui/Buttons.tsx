import React from 'react';

export default function Buttons({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={
        'px-4 py-2 md:px-6 md:py-3 flex flex-row space-x-2 justify-center items-center btn-text-small md:btn-text-medium border-2 border-neutral-700 rounded-3xl bg-neutral-900 hover:bg-neutral-800 transition-colors ' +
        className
      }
    >
      {children}
    </button>
  );
}
