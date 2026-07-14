import ContentSection from '../shared/ContentSection';
import SectionHeader from '../shared/SectionHeader';
import SelectionList from '../shared/SelectionList';
import { crewData } from '../../myData';
import { useSelection } from '../shared/useSelection';

export default function Crew() {
  const { items, selectItem, activeItem } = useSelection(crewData);

  return (
    <main className="main-style items-center xl:w-[85%] xl:grid-rows-[repeat(3,auto)]">
      <SectionHeader span={'02'} heading={'Meet your crew'} />

      <ContentSection
        active={{
          pContent: activeItem.role,
          heading: activeItem.name,
          body: activeItem.bio,
          style: {
            p: 'crew-tec-content text-white/50',
            heading: 'crew-tec-heading',
            container:
              'md:gap-4 justify-evenly xl:justify-start md:w-1/2 xl:row-start-2 xl:w-full',
          },
        }}
      />

      <SelectionList
        data={{
          listType: 'crew',
          items: items,
          condition: {
            true: 'bg-white ',
            false: 'bg-white/25',
          },
          itemF: selectItem,
          style: {
            container: 'flex gap-4 xl:row-start-3 xl:gap-10 xl:self-end',
            liS: 'h-2.5 w-2.5 cursor-pointer rounded-full transition hover:bg-white',
          },
        }}
      />

      <img
        src={activeItem.image}
        alt={`${activeItem.name} image`}
        className="w-4/5 xl:row-span-2 xl:max-h-115 xl:w-[80%] xl:self-center xl:justify-self-center"
      />
    </main>
  );
}
