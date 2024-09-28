'use client';

import NextLink from 'next/link';

import { ModeToggle } from './mode-toggle';
import { Link } from '@/types/types';
import WebsiteContainer from './website-container';
import { Button } from '../ui/button';
import { useUser } from '@clerk/nextjs';
import { useActiveSectionContext } from '@/containers/active-section';
import { House } from 'lucide-react';
import LoginButton from '@/components/login-button';

export default function Header({ links }: { links: Link[] }) {
  const { isSignedIn } = useUser();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header
      className={`hidden md:flex  fixed top-0 left-0 w-full py-4
        backdrop-blur-[2px]  border-b bg-gradient-to-gray-50 bg-gradient-to-b from-gray-100 to-gray-100/0 z-20  border-b-gray-300/10`}
    >
      <WebsiteContainer>
        <div className="flex justify-between w-full">
          <nav>
            <ul className="flex text-lg text-slate-700 justify-start items-center gap-x-12">
              <li>
                <NextLink
                  className="hidden lg:block font-fantasy text-2xl"
                  href="/#home"
                >
                  BIONGO
                </NextLink>
              </li>
              {links.map((link) => (
                <li key={link.hash}>
                  <NextLink
                    href={link.hash}
                    className="hidden lg:block"
                    onClick={() => {
                      setActiveSection(link.hash);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.nameEng}
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {!isSignedIn ? (
              <NextLink href={'/sign-in'}>
                <LoginButton />
              </NextLink>
            ) : (
              <NextLink href={'/dashboard'}>
                <Button variant={'outline'}>
                  <House />
                </Button>
              </NextLink>
            )}
          </div>
          <div className="hidden">
            <ModeToggle />
          </div>
        </div>
      </WebsiteContainer>
    </header>
  );
}
