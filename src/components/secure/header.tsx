import HamburgerTrigger from '@/components/secure/hamburger-trigger';
import { UserAvatar } from '../user-avatar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white h-16 border-b flex items-center justify-center">
      <div className="flex justify-between items-center w-full h-full  px-8">
        <HamburgerTrigger />
        <div className="flex gap-10">
          <div className="font-bold w-[300px]">
            <div className="w-10 h-10 rounded-full bg-purple-400 text-white flex justify-center items-center text-xl">
              Z
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
