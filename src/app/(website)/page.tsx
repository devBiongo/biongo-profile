import Introduce from '@/components/introduce';
import SkillSection from '@/components/website/skill-section';

export default function Page() {
  return (
    <main className="flex flex-col gap-[100px] items-center py-20 md:pt-28 px-4">
      <Introduce />
      <SkillSection />
      <div className="mt-10 text-blue-500 text-2xl">作成中...</div>
    </main>
  );
}
