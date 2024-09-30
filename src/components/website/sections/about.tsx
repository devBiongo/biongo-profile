'use client';

import RadarChart from '@/components/website/Chart';
import Waves from '@/components/website/waves';
import WebsiteContainer from '@/components/website/website-container';
import { useSectionInView } from '@/hooks/useSectionInView';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

export default function About() {
  const { ref } = useSectionInView('#about', 0.5);
  return (
    <WebsiteContainer>
      <section id="about" ref={ref} className="w-full">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-2">
            <Fade
              direction="up"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="bg-white shadow rounded-xl p-4 h-full">
                <RadarChart />
              </div>
            </Fade>
          </div>
          <div className="flex-3">
            <Fade
              direction="up"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="shadow rounded-xl p-4 flex flex-col gap-3 bg-white h-full">
                <p>{"Currently I'm living Kawasaki, Janpan."}</p>
                <div
                  className="relative w-full"
                  style={{ aspectRatio: '16/9' }}
                >
                  <div className="absolute right-[25%] top-[60%]">
                    <Waves />
                  </div>
                  <Image src="/map.png" alt="map" fill className="rounded-lg" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </WebsiteContainer>
  );
}
