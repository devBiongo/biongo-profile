import { UserAvatar } from '../user-avatar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white h-16 border-b flex items-center justify-center">
      <div className="flex justify-between items-center w-full h-full  px-8">
        <div className="md:hidden">
          <button className="p-2 bg-blue-500 text-white">Toggle Sidebar</button>
        </div>
        <div className="text-xl text-blue-400">Admin</div>
        <div className="flex justify-between items-center">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
