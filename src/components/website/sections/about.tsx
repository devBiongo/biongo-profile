'use client';

import RadarChart from '@/components/website/Chart';
import Waves from '@/components/website/waves';
import WebsiteContainer from '@/components/website/website-container';
import { useSectionInView } from '@/hooks/useSectionInView';
import Image from 'next/image';

export default function About() {
  const { ref } = useSectionInView('#about', 0.5);
  return (
    <section id="about" ref={ref} className="w-full">
      <WebsiteContainer>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 shadow rounded-xl p-4 bg-white">
            <RadarChart />
          </div>
          <div className="flex-2 shadow rounded-xl p-4 flex flex-col gap-3 bg-white">
            <p>{"Currently I'm living Kawasaki, Janpan."}</p>
            <div className="w-auto h-auto relative overflow-hidden">
              <div className="absolute right-[25%] top-[60%]">
                <Waves />
              </div>

              <Image
                src="/map.png"
                width={1364}
                height={808}
                alt="respositive"
                quality={100}
                className="rounded-xl"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </WebsiteContainer>
    </section>
  );
}
