'use client';
import Image from 'next/image';
import WebsiteContainer from '../website-container';
import { Fade } from 'react-awesome-reveal';
import { useSectionInView } from '@/hooks/useSectionInView';

const singersSrcs = [
  '/singers/higedan.jpg',
  '/singers/justin.jpg',
  '/singers/yonezu.jpg',
  '/singers/bruno.jpg',
  '/singers/yoasobi.jpg',
];

export default function Musics() {
  const { ref } = useSectionInView('#musics', 0.5);
  return (
    <WebsiteContainer>
      <section id="musics" ref={ref} className="flex flex-col gap-10">
        <p>
          <span className="text-xl shadow p-2">My favorite singers</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">
          {singersSrcs.map((item, index) => (
            <Fade
              key={index}
              direction="up"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="relative w-full h-0 pb-[100%] overflow-hidden">
                <Image
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                  src={item}
                  fill
                  alt=""
                />
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </WebsiteContainer>
  );
}
