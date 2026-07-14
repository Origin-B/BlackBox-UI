export default function SectionHeader({ heading, span, className }) {
  return (
    <p className={`app-sec-heading md:self-start xl:col-span-2 ${className}`}>
      <span className="app-sec-heading-span">{span}</span>
      {heading}
    </p>
  );
}
