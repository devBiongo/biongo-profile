'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

// interface ServerSearchProps {}

export const SearchButton = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-[#e2e8f0] hover:border-[#e2e8f0] transition border"
      >
        <Search className="w-4 h-4 text-zinc-500 " />
        <p className=" font-semibold text-sm text-zinc-500  group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          Search
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all channels and members" />
        <CommandList>
          <CommandEmpty>No Results found</CommandEmpty>
          {false &&
            [1].map((value, index) => {
              return (
                <CommandGroup key={index} heading={value}>
                  <CommandItem onSelect={() => {}}></CommandItem>
                </CommandGroup>
              );
            })}
        </CommandList>
      </CommandDialog>
    </>
  );
};
