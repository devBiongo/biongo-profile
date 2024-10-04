import {
  Binoculars,
  ChartPie,
  House,
  UserRoundSearch,
  BookLock,
} from 'lucide-react';

export const menus = [
  { label: 'Dashboard', icon: ChartPie, path: '/dashboard' },
  { label: 'Logs', icon: Binoculars, path: '/logs' },
  { label: 'Users', icon: UserRoundSearch, path: '/users' },
  { label: 'Crypto', icon: BookLock, path: '/crypto' },
  { label: 'HomePage', icon: House, path: '/' },
];
