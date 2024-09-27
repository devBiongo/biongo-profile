'use client';

import Introduce from '@/components/website/sections/introduce';
import MusicSection from '@/components/website/sections/music-section';
import SkillSection from '@/components/website/sections/skill-section';
import { isDev } from '@/lib/common';
import axios from 'axios';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (!isDev()) {
      axios
        .get('https://api.ipify.org?format=json')
        .then((response) => {
          const ip = response.data.ip;
          return axios.get(`https://ipinfo.io/widget/demo/${ip}`);
        })
        .then((ipInfoResponse) => {
          return axios.post('/api/ipinfo', { data: ipInfoResponse.data });
        })
        .then((logInfoResponse) => {
          console.log('IP Info:', logInfoResponse.data);
          return logInfoResponse.data;
        })
        .catch((error) => {
          console.error('Error fetching IP info:', error);
        });
    }
  }, []);
  return (
    <main className="flex flex-col gap-20 items-center py-20 md:pt-28 ">
      <Introduce />
      <SkillSection />
      <MusicSection />
      <div className="mt-10 text-blue-500 text-2xl">作成中...</div>
    </main>
  );
}
