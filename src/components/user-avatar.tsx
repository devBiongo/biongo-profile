import { SignedIn, UserButton } from '@clerk/nextjs';

export const UserAvatar = () => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: 'w-9 h-9', // Custom width and height
      userButtonPopoverCard: 'bg-blue-100', // Custom background for the popover card
      userButtonPopoverActionButton: 'text-red-600', // Custom text color for action buttons
    },
  };
  return (
    <SignedIn>
      <UserButton appearance={userButtonAppearance} />
    </SignedIn>
  );
};
