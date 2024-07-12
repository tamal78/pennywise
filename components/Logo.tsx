'use client';

import { PiggyBank } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Logo() {
  const isAuthenticated = usePathname().includes('/dashboard') ? true : false;
  return (
    <Link
      href={isAuthenticated ? '/dashboard' : '/'}
      className='flex items-center gap-2'
    >
      <PiggyBank className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5]' />
      <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>
        Pennywise
      </p>
    </Link>
  );
}

export function LogoMobile() {
  const isAuthenticated = usePathname().includes('/dashboard') ? true : false;
  return (
    <Link
      href={isAuthenticated ? '/dashboard' : '/'}
      className='flex items-center gap-2'
    >
      <PiggyBank className='stroke h-11 w-11 stroke-blue-500 stroke-[1.5]' />
    </Link>
  );
}

export default Logo;
