import AjaxResult from '@/lib/ajax-result';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  const body = await request.json();
  const { id } = body;
  console.log(1111, id);
  const users = await db.user.findMany();
  return AjaxResult.ok(users);
}
