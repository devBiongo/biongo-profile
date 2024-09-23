import Introduce from '@/components/introduce';
import MusicSection from '@/components/music-section';
import SkillSection from '@/components/website/skill-section';
import { db } from '@/lib/db';
import { headers } from 'next/headers';

function getIP() {
  const FALLBACK_IP_ADDRESS = '0.0.0.0';
  const forwardedFor = headers().get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
}

export default async function Page() {
  const headersList = await headers();
  await db.log.create({
    data: {
      host: headersList.get('host') || '',
      referer: headersList.get('referer') || '',
      content: getIP(),
    },
  });
  return (
    <main className="flex flex-col gap-20 items-center py-20 md:pt-28 ">
      <Introduce />
      <SkillSection />
      <MusicSection />
      <div className="mt-10 text-blue-500 text-2xl">作成中...</div>
    </main>
  );
}
