import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import MobileMenuToggle from './MobileMenuToggle';

export default function Header({ switchSection, children }) {
  const [navbarState, setNavbarState] = useState({
    btnClass: '',
    active: false,
    navbarClass: 'hidden',
  });

  const handelNavbarState = () =>
    setNavbarState(
      navbarState.active
        ? {
            btnClass: '',
            active: false,
            navbarClass: 'hidden',
          }
        : {
            btnClass: 'act',
            active: true,
            navbarClass: 'flex',
          },
    );

  return (
    <header className="flex items-center justify-between p-6 md:p-0">
      <Link to={'/'} role="button" onClick={() => switchSection(1)}>
        <img
          className="md:p-6"
          src="../src/assets/shared/logo.svg"
          alt="space tourism website logo"
        />
      </Link>
      <hr className="relative z-1 -mr-6 hidden grow text-white/25 md:block" />
      <MobileMenuToggle
        onEvent={handelNavbarState}
        src={'../src/assets/shared/icon-hamburger.svg'}
        alt={'navbar icon to open'}
      />
      <Navbar
        display={navbarState.navbarClass}
        children={children}
        onEvent={handelNavbarState}
      />
    </header>
  );
}
