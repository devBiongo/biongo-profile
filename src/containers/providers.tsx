import React from 'react';
import ActiveSectionContextProvider from './active-section';
import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';
import ToasterContext from '@/containers/ToasterContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ActiveSectionContextProvider>
        <ToasterContext />
        <QueryProvider>{children}</QueryProvider>
      </ActiveSectionContextProvider>
    </ThemeProvider>
  );
}
