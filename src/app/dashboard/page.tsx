import { db } from '@/lib/db';

export default async function Page() {
  const users = await db.user.findMany();
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
