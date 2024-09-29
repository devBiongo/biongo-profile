import { Button } from '@/components/ui/button';

export default function LoginButton() {
  return (
    <Button variant={'outline'} className="flex h-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-log-in h-4 w-4 mr-2"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" x2="3" y1="12" y2="12"></line>
      </svg>
      <span>Login</span>
    </Button>
  );
}
