'use client';

import { Link } from '@/lib/types';
import NextLink from 'next/link';
import { SearchButton } from './SearchButton';
import { useActiveSectionContext } from '@/containers/active-section';
import { ModeToggle } from './mode-toggle';

export default function Header({ links }: { links: Link[] }) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header
      className={`hidden md:flex px-4 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 w-full py-4
        backdrop-blur-[2px]  border-b bg-gradient-to-gray-50 bg-gradient-to-b from-gray-100 to-gray-100/0 z-20  border-b-gray-300/10`}
    >
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
        <div className="w-[300px]">
          <SearchButton />
        </div>
        <div className="hidden">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
