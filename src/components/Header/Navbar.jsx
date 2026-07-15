import MobileMenuToggle from './MobileMenuToggle';

export default function Navbar({ display, active, onEvent, children }) {
  return (
    <nav
      className={`${display} tracking-Preset-7 fixed right-0 bottom-0 flex h-screen w-[70%] flex-col gap-6 bg-white/5 pl-6 backdrop-blur-xl transition md:static md:block md:h-fit md:w-fit md:justify-end md:p-0`}
      navbar-active={`${active}`}
    >
      <MobileMenuToggle
        onEvent={onEvent}
        src={'../src/assets/shared/icon-close.svg'}
        alt={'navbar icon to close'}
        className="flex justify-end p-[24px_24px_24px_0]"
      />
      {children}
    </nav>
  );
}
