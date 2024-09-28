'use client';

import { AnimatePresence, motion } from 'framer-motion';
import FaHamburger from 'hamburger-react';

import { useState } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import { menus } from '@/components/secure/menu';

export default function HamburgerTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden top-2 right-3 fixed w-60 z-[999] flex flex-col items-end gap-2">
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
            {menus.map((link, index) => (
              <motion.div
                key={link.path}
                className="w-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <NextLink
                  href={link.path}
                  className={clsx(
                    `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 
                    transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer`,
                    {
                      'text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded':
                        false,
                      'rounded-t-xl round': index === 0,
                      'rounded-b-xl round': index === menus.length - 1,
                    }
                  )}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
