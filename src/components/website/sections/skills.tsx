'use client';

import { Fade } from 'react-awesome-reveal';
import WebsiteContainer from '../website-container';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Skills() {
  const { ref } = useSectionInView('#skills', 0.5);
  return (
    <WebsiteContainer>
      <section
        id="skills"
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            progress={skill.progress}
          />
        ))}
      </section>
    </WebsiteContainer>
  );
}

const SkillCard = ({
  title,
  progress,
}: {
  title: string;
  description: string;
  progress: number;
}) => {
  return (
    <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
      <div className="shadow p-3 rounded-sm flex flex-col gap-8 py-6 bg-white">
        <p>{title}</p>
        <ProgressBar progress={progress} />
      </div>
    </Fade>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-3/5 bg-gray-200  h-4">
      <div className="bg-[#9ca3af] h-4" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const skills: any[] = [
  {
    title: 'ReactJS / NextJS / NodeJS',
    description:
      'I developed some personal websites and the Microsoft 365 networking connectivity frontend, and contributed to the FluentUI.',
    progress: 80,
  },
  {
    title: 'Java / Spring Family',
    description:
      'I developed the Microsoft 365 networking connectivity backend with ASP.NET, and created some Unity3D games.',
    progress: 75,
  },
  {
    title: 'Golang / Gin',
    description:
      'I developed the Microsoft 365 networking connectivity backend with ASP.NET, and created some Unity3D games.',
    progress: 60,
  },
  {
    title: 'AWS / Docker / Nginx / CI/CD',
    description:
      'I developed the Microsoft 365 networking connectivity backend with ASP.NET, and created some Unity3D games.',
    progress: 55,
  },
  {
    title: 'Python',
    description:
      'I developed the Microsoft 365 networking connectivity backend with ASP.NET, and created some Unity3D games.',
    progress: 30,
  },
  {
    title: 'Css / Sass / Less / Tailwind',
    description: 'I developed a HTML5 game, some personal websites and the ',
    progress: 30,
  },
  {
    title: 'C / C++',
    description:
      'I developed the Microsoft 365 networking connectivity backend with ASP.NET, and created some Unity3D games.',
    progress: 30,
  },
];
