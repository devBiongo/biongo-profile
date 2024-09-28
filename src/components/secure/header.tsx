import HamburgerTrigger from '@/components/secure/hamburger-trigger';
import { UserAvatar } from '../user-avatar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white h-16 border-b flex items-center justify-center">
      <div className="flex justify-between items-center w-full h-full  px-8">
        <HamburgerTrigger />
        <div className="text-2xl font-bold">Admin</div>
        <div className="hidden md:flex justify-between items-center">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
