import Header from '@/components/secure/header';
import { Sidebar } from '@/components/secure/sidebar';
import React from 'react';

export default function SecureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f9fafb] h-full">
      <Header />
      <Sidebar />
      <div className={`pt-16 transition-all duration-300 ml-0 md:ml-64`}>
        <main className="p-2 md:p-4 transition-all duration-300 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
