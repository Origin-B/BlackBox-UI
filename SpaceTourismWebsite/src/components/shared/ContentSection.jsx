export default function ContentSection({ active }) {
  const { heading, body, style, pContent = '' } = active;
  return (
    <article className={`article-style ${style.container} `}>
      <p className={`${style.p}`}>{pContent}</p>
      <h1 className={`${style.heading} font-bellefair text-white`}>
        {heading}
      </h1>
      <p className="article-paragraph">{body}</p>
    </article>
  );
}
