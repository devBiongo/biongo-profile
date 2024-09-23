import Introduce from '@/components/introduce';
import MusicSection from '@/components/music-section';
import SkillSection from '@/components/website/skill-section';

export default function Page() {
  return (
    <main className="flex flex-col gap-20 items-center py-20 md:pt-28 ">
      <Introduce />
      <SkillSection />
      <MusicSection />
      <div className="mt-10 text-blue-500 text-2xl">作成中...</div>
    </main>
  );
}
