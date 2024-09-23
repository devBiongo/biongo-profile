import Image from 'next/image';
import WebsiteContainer from './website/website-container';

export default function MusicSection() {
  return (
    <div className="relative overflow-hidden h-[1000px]">
      <div
        style={{
          width: '75%',
          height: 'auto',
          position: 'relative',
          left: -300,
          top: -10,
        }}
      >
        <Image
          src="/bg.webp"
          layout="responsive"
          width={525}
          height={517}
          alt=""
        />
      </div>

      <div className="absolute left-0 top-0 w-full h-full">
        <WebsiteContainer>
          <div className="flex w-full gap-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                style={{
                  width: 'auto',
                  height: 'auto',
                  position: 'relative',
                }}
              >
                <Image
                  className="rounded-xl"
                  src="/higedan.jpg"
                  layout="responsive"
                  width={525}
                  height={517}
                  alt=""
                />
              </div>

              <div
                style={{
                  width: 'auto',
                  height: '340px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="rounded-xl"
              >
                <Image
                  className="rounded-xl"
                  src="/yoasobi.jpg"
                  layout="responsive"
                  width={525}
                  height={517}
                  alt=""
                />
              </div>
              <div
                style={{
                  width: 'auto',
                  height: 'auto',
                  position: 'relative',
                }}
              >
                <Image
                  className="rounded-xl"
                  src="/justin.jpg"
                  layout="responsive"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
          </div>
        </WebsiteContainer>
      </div>
    </div>
  );
}
