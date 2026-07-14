import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destinations from './components/Destinations/Destinations';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import SelectionList from './components/shared/SelectionList';

import { navbarContent } from './myData';
import { useSelection } from './components/shared/useSelection';


function App() {

  const [bgImage, setBgImage] = useState(
    `bg-[url('./assets/home/bg-home-mob.jpg')] md:bg-[url('./assets/home/bg-home-tab.jpg')] lg:bg-[url('./assets/home/bg-home-dsk.jpg')]`,
  );

  const { items, selectItem } = useSelection(navbarContent);

  function switchSection(id) {
    selectItem(id);
    const activeBg = items.find((item) => item.id === +id).bg;
    setBgImage(activeBg);
  }

  return (
    <div
      className={`font-Barlow text-Blue-300 flex min-h-screen w-full flex-col bg-cover bg-center uppercase ${bgImage} overflow-hidden`}
    >

      <Header
        children={
          <SelectionList
            isNavList={true}
            data={{
              items: items,
              itemF: switchSection,
              style: {
                container:
                  'font-barlow-condensed flex flex-col gap-8 tracking-[3px] text-white md:flex-row md:gap-10 md:px-10',
              },
            }}
          />
        }
      
        switchSection={switchSection}
      />

      <Routes>
        <Route path="/" element={<Home switchSection={switchSection} />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      
    </div>
  );
}

export default App;
