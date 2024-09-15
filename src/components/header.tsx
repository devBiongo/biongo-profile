'use client';

import { Link } from '@/lib/types';
import NextLink from 'next/link';
import { SearchButton } from './SearchButton';

export default function Header({ links }: { links: Link[] }) {
  return (
    <header className="hidden md:flex px-4 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 w-full backdrop-blur-[2px] bg-gradient-to-gray-50 bg-gradient-to-b from-gray-100 to-gray-100/0 z-20 py-4 border-b-gray-300/10 border-b">
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
                <NextLink href={'#'} className="hidden lg:block">
                  {link.nameEng}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-[300px]">
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
