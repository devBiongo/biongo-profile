'use client';

import http from '@/lib/client/http';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchUsers'],
    async queryFn() {
      const data: Array<{ id: string; name: string; email: string }> =
        await http.post('/user', {});
      return data;
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;
  return (
    <div>
      <p>info</p>
      <p>{new Date().toLocaleTimeString()}</p>
      <div>
        {data?.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>-----
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
