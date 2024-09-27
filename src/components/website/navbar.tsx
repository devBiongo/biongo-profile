import { links } from '@/lib/client/data';
import HamburgerMenu from './hamburger-menu';
import Header from './header';

export default function Navbar() {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
