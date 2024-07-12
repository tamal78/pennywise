import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';

export function generateMetadata() {
  return {
    title: 'Dashboard',
    description: 'Manage Money, Stay Organized, Take Control of Your Finances'
  };
}

function layout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex h-screen w-full flex-col'>
      <Navbar />
      <div className='w-full'>{children}</div>
    </div>
  );
}

export default layout;
