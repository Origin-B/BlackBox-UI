import { useParams } from 'react-router-dom';
import Destinations from './Destinations/Destinations';
import Crew from './Crew/Crew';
import Technology from './Technology/Technology';

export default function Content({ setBg }) {
  const { section } = useParams();
  if (section === 'crew') {
    setBg(
      "bg-[url('./assets/crew/bg-crew-mob.jpg')] md:bg-[url('./assets/crew/bg-crew-tab.jpg')] lg:bg-[url('./assets/crew/bg-crew-dsk.jpg')]",
    );
    return <Crew />;
  } else if (section === 'technology') {
    setBg(
      "bg-[url('./assets/technology/bg-technology-mob.jpg')] md:bg-[url('./assets/technology/bg-technology-tab.jpg')] lg:bg-[url('./assets/technology/bg-technology-dsk.jpg')]",
    );
    return <Technology />;
  } else {
    setBg(
      "bg-[url('./assets/destination/bg-destination-mob.jpg')] md:bg-[url('./assets/destination/bg-destination-tab.jpg')] lg:bg-[url('./assets/destination/bg-destination-dsk.jpg')]",
    );
    return <Destinations />;
  }
}
