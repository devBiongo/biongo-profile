import Navbar from '@/components/website/navbar';
import React from 'react';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <div
        className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
      />
      <div
        className="bg-[#dbd7fb] absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
        xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
      /> */}
      <Navbar />
      <div> {children}</div>
    </div>
  );
}
