import Image from 'next/image';
import WebsiteContainer from './website/website-container';

export default function MusicSection() {
  return (
    <div className="relative">
      <div
        style={{
          width: '75%',
          height: 'auto',
          position: 'relative',
          left: -300,
          top: 300,
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
            <div className="basis-1/5 flex flex-col gap-6">
              <div className="border  rounded-xl bg-[#283343] p-10 text-white flex flex-col gap-6">
                <p>{'My favorite singer.'}</p>
              </div>
            </div>
            <div className="basis-4/5 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
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
          </div>
        </WebsiteContainer>
      </div>
    </div>
  );
}
