import { db } from '@/lib/server/db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function Page() {
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

  const logs = await db.accessLog.findMany();

  return (
    <div className="flex flex-col  gap-3 h-[2000px]">
      <div className="flex flex-col  gap-3">
        <div className="flex-2 p-4 bg-white rounded-lg border">
          <div>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ip</TableHead>
                  <TableHead>hostname</TableHead>
                  <TableHead>country</TableHead>
                  <TableHead className="text-right">region</TableHead>
                  <TableHead className="text-right">city</TableHead>
                  <TableHead className="text-right">timezone</TableHead>
                  <TableHead className="text-right">timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.ip}>
                    <TableCell className="w-[100px]">{log.ip}</TableCell>
                    <TableCell>{log.hostname}</TableCell>
                    <TableCell>{log.country}</TableCell>
                    <TableCell className="text-right">{log.region}</TableCell>
                    <TableCell className="text-right">{log.city}</TableCell>
                    <TableCell className="text-right">{log.timezone}</TableCell>
                    <TableCell className="text-right">
                      {`${log.timestamp.getMonth()}-${log.timestamp.getDate()}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg border ">
          <div className="h-[300px]"></div>
        </div>
      </div>
    </div>
  );
}
