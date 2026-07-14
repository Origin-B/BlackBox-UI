export default function MobileMenuToggle({
  onEvent,
  src,
  alt,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onEvent}
      className={`${className} cursor-pointer md:hidden`}
    >
      <img src={src} alt={alt} />
    </button>
  );
}
