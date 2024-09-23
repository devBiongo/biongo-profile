import { CommonLayoutProps } from '@/types/common';

export default function WebsiteContainer({ children }: CommonLayoutProps) {
  return (
    <div className="px-4 lg:px-16 xl:px-32 2xl:px-44 w-full">{children}</div>
  );
}
