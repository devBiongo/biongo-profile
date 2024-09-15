import About from '@/components/about';
import Introduce from '@/components/introduce';

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Introduce />
      <About />
    </main>
  );
}
