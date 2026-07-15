import { Link } from 'react-router-dom';
import ContentSection from '../shared/ContentSection';

export default function Home({ switchSection }) {
  return (
    <main className="main-style grid-rows-[auto] justify-items-center xl:items-end xl:justify-items-end xl:p-[10%]">
      <ContentSection
        active={{
          pContent: 'So, you want to travel to',
          heading: 'Space',
          body: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
          style: {
            p: 'font-barlow-condensed tracking-[15%] md:text-[28px] md:tracking-[4px]',
            heading: 'md:text-Preset-1 text-[80px]',
            container: 'xl:gap-0 md:justify-end md:gap-6 md:w-[80%] xl:w-full',
          },
        }}
      />

      <Link
        to={'/destination'}
        className="xl:col-start-2"
        onClick={() => switchSection(2)}
      >
        <button
          type="button"
          className="font-bellefair text-Blue-900 bg-White hover:text-Blue-900/50 md:text-Preset-4 h-36 w-36 cursor-pointer rounded-full text-lg shadow-white/10 transition hover:shadow-[0_0_0_40px] md:hover:shadow-[0_0_0_80px] xl:h-68 xl:w-68"
        >
          Explore
        </button>
      </Link>
    </main>
  );
}
