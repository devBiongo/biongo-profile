import { cn } from '@/lib/utils';
import { BarChart } from 'lucide-react';

const menus = [
  { label: 'dashboard', icon: BarChart },
  { label: 'dashboard', icon: BarChart },
  { label: 'dashboard', icon: BarChart },
];

export function Sidebar() {
  return (
    <aside
      className={cn(
        `fixed top-16 bottom-0 left-0 bg-white border-r w-64 z-20  ease-in-out transform md:block`,
        'transition-transform duration-300',
        '-translate-x-full md:translate-x-0'
      )}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menus.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Icon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
