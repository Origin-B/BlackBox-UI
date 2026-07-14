import StatCard from './StatCard';
import ContentSection from '../shared/ContentSection';
import SectionHeader from '../shared/SectionHeader';
import { destinationData } from '../../myData';
import { useSelection } from '../shared/useSelection';
import SelectionList from '../shared/SelectionList';

export default function Destinations() {
  const { items, selectItem, activeItem } = useSelection(destinationData);

  return (
    <main className="main-style items-center xl:w-[80%] xl:grid-rows-[repeat(4,auto)]">
      <SectionHeader
        heading={'Pick your destination'}
        span={'01'}
        className={''}
      />
      <img
        src={activeItem.image}
        alt={`${activeItem.name} image`}
        className="w-1/2 xl:row-span-3 xl:w-[90%]"
      />

      <SelectionList
        data={{
          listType: 'des',
          items: items,
          condition: {
            true: 'text-white border-white/25',
            false: 'border-transparent',
          },
          itemF: selectItem,
          style: {
            container:
              'font-barlow-condensed text-Preset-8 flex gap-8 tracking-[15%] md:text-base md:tracking-[2px] xl:self-end',
            liS: 'cursor-pointer border-b-[3px] transition hover:border-white xl:pb-4',
          },
        }}
      />

      <ContentSection
        active={{
          heading: activeItem.name,
          body: activeItem.description,
          style: {
            p: 'hidden',
            heading: 'text-Preset-3 md:text-Preset-2 xl:text-[96px]',
            container: 'md:w-3/4 xl:w-[85%] gap-6',
          },
        }}
      />

      <div className="text-Preset-7 font-barlow-condensed flex w-full flex-col justify-center gap-6 border-t border-white/25 pt-6 text-center tracking-[2px] md:w-4/5 md:flex-row md:justify-between">
        <StatCard contain={activeItem.distance} about={'Avg. distance'} />
        <StatCard contain={activeItem.travel} about={'Est. travel time'} />
      </div>
    </main>
  );
}
