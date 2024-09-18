import { db } from '@/lib/db';

interface IParams {
  userId: string;
}

export default async function Page({ params }: { params: IParams }) {
  const users = await db.user.findMany();
  return (
    <div>
      <p>{params.userId}</p>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>-----
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
