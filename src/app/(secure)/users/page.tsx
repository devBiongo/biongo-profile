import { db } from '@/lib/server/db';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/common';

export default async function Page() {
  const users = await db.user.findMany();
  return (
    <div className="flex flex-col  gap-3 ">
      <div className="border bg-white rounded-lg p-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">name</TableHead>
              <TableHead className="text-left">email</TableHead>
              <TableHead className="text-left">lastSignInAt</TableHead>
              <TableHead className="text-left">createdAt</TableHead>
              <TableHead className="text-left">updatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="text-left">{`${user.firstName}${user.lastName}`}</TableCell>
                <TableCell className="text-left">{user.email}</TableCell>
                <TableCell className="text-left">
                  {formatDate(user.lastSignInAt)}
                </TableCell>
                <TableCell className="text-left">
                  {formatDate(user.createdAt)}
                </TableCell>
                <TableCell className="text-left">
                  {formatDate(user.updatedAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
