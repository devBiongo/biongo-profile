'use client';
import { useActiveSectionContext } from '@/containers/active-section';
import { Link } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import FaHamburger from 'hamburger-react';
import NextLink from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

export default function HamburgerMenu({ links }: { links: Link[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className="md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2">
      <motion.button
        variants={{
          visible: { scale: 1, opacity: 0.7, y: 0 },
          tap: { scale: 0.85 },
          hover: { scale: 1.2 },
        }}
        initial="visible"
        whileTap="tap"
        whileHover="hover"
        className="bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400
      dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
      >
        <FaHamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full bg-white drop-shadow border border-slate-400 dark:border-white border-opacity-60 shadow-2xl rounded-2xl
        flex flex-col items-center justify-center dark:bg-gray-950 p-1"
            variants={{
              start: { scale: 0.6, opacity: 0.7, y: -20 },
              visible: { scale: 1, opacity: 0.9, y: 0 },
            }}
            initial="start"
            animate="visible"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.hash}
                className="w-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <NextLink
                  href={link.hash}
                  className={clsx(
                    `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 
                    transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer`,
                    {
                      'text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded':
                        activeSection === link.hash,
                      'rounded-t-xl round': index === 0,
                      'rounded-b-xl round': index === links.length - 1,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(link.hash);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.nameEng}
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
