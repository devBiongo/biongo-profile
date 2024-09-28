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
  const logs = await db.accessLog.findMany({
    where: {
      NOT: {
        ip: {
          in: ['126.217.15.39', '126.157.140.114'],
        },
      },
    },
    orderBy: {
      timestamp: 'desc',
    },
    take: 15,
  });

  return (
    <div className="flex flex-col  gap-3 ">
      <div className="border bg-white rounded-lg p-3">
        <Table>
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
                  {formatDate(log.timestamp, 'YYYY-MM-DD')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
