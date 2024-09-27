import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export const UserAvatar = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
