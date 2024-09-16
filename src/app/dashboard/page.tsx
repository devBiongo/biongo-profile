import { db } from '@/lib/db';
import { logger } from '@/lib/logger';

export default async function Page() {
  const users = await db.user.findMany();
  logger.info('hi1111 ');
  return (
    <div>
      <p>info</p>
      {users.map((user) => (
        <div key={user.id}>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
