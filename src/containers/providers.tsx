import React from 'react';
import ActiveSectionContextProvider from './active-section';
import { QueryProvider } from './query-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ActiveSectionContextProvider>
      <QueryProvider>{children}</QueryProvider>
    </ActiveSectionContextProvider>
  );
}
