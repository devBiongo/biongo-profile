import React from 'react';
import ActiveSectionContextProvider from './active-section';
import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ActiveSectionContextProvider>
        <QueryProvider>{children}</QueryProvider>
      </ActiveSectionContextProvider>
    </ThemeProvider>
  );
}
