import Header from '@/components/secure/header';
import { Sidebar } from '@/components/secure/sidebar';
import { db } from '@/lib/server/db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function SecureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) {
    return redirect('/sign-in');
  }
  const existed = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  const primaryEmail = user?.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId
  );
  if (!existed) {
    await db.user.create({
      data: {
        id: userId,
        email: primaryEmail?.emailAddress || '',
        hasImage: user.hasImage,
        locked: user.locked,
        imageUrl: user.imageUrl,
        username: user.username || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        lastSignInAt: new Date(user.lastSignInAt || ''),
        createdAt: new Date(user.createdAt || ''),
        updatedAt: new Date(user.updatedAt || ''),
      },
    });
  }
  return (
    <div className="bg-[#f9fafb] h-full">
      <Header />
      <Sidebar />
      <div className={`pt-16 transition-all duration-300 ml-0 md:ml-64`}>
        <main className="p-2 md:p-4 transition-all duration-300 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
