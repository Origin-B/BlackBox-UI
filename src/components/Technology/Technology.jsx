import ContentSection from '../shared/ContentSection';
import SectionHeader from '../shared/SectionHeader';
import { useSelection } from '../shared/useSelection';
import { technologyData } from '../../myData';
import SelectionList from '../shared/SelectionList';

export default function Technology() {
  const { items, selectItem, activeItem } = useSelection(technologyData);

  return (
    <main className="main-style xl:ml-20 xl:grid-cols-[auto_1fr_1fr] xl:grid-rows-[auto_1fr] xl:items-center xl:gap-8">
      <SectionHeader
        heading={'Space launch 101'}
        span={'03 '}
        className={'xl:col-span-3'}
      />

      <div className="xl:rows-span-2 w-[120%] overflow-hidden md:h-110 xl:col-start-3 xl:h-fit">
        <img
          src={activeItem.images.landscape}
          alt={`${activeItem.name} image`}
          className="block h-fit w-full md:hidden"
        />
        <img
          src={activeItem.images.portrait}
          alt={`${activeItem.name} image`}
          className="relative top-[-55%] hidden h-fit w-full md:block"
        />
      </div>

      <SelectionList
        data={{
          listType: 'tec',
          items: items,
          condition: {
            true: 'text-Blue-900 border-transparent bg-white',
            false: 'border-white/25',
          },
          itemF: selectItem,
          style: {
            container:
              'text-Preset-9 font-bellefair xl:text-Preset-4 flex gap-4 text-white md:text-[24px] xl:col-start-1 xl:row-start-2 xl:flex-col',
            liS: 'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition hover:border-white md:h-14 md:w-14 xl:h-20 xl:w-20',
          },
        }}
      />

      <ContentSection
        active={{
          heading: activeItem.name,
          body: activeItem.description,
          pContent: 'The terminology...',
          style: {
            container:
              'md:w-[70%] xl:row-start-2 xl:col-start-2 xl:w-[85%] xl:justify-self-center',
            heading: 'crew-tec-heading',
            body: ' article-paragraph',
            p: 'crew-tec-content text-white/50',
          },
        }}
      />
    </main>
  );
}
