import React from 'react';
import ActiveSectionContextProvider from './active-section';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
  );
}
