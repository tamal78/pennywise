import LandinngPage from '@/components/LandingPage';
import React from 'react';
import Logo, { LogoMobile } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ChevronRight } from 'lucide-react';
import { ThemeSwitcherBtn } from '@/components/ThemeSwitcherBtn';

export default function Page() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between px-4 lg:px-20 overflow-hidden'>
      <Navbar />
      <LandinngPage />
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center border-b border-border h-[60px] px-4 py-2'>
      <div className='mr-2'>
        <div className='hidden lg:block'>
          <Logo />
        </div>
        <div className='block lg:hidden'>
          <LogoMobile />
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <ThemeSwitcherBtn />
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          <Button asChild>
            <Link href='/dashboard'>
              Dashboard
              <span className='ml-2'>
                <ChevronRight size={12} strokeWidth={4} />
              </span>
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild variant='secondary'>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button asChild>
            <Link href='/sign-up'>Get Started</Link>
          </Button>
        </SignedOut>
      </div>
    </nav>
  );
};
