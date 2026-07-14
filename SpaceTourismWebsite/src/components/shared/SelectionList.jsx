import { Link } from 'react-router-dom';

export default function SelectionList({ isNavList = false, data }) {
  const { listType, items, condition, itemF, style } = data;

  const itemsRender = items.map((item) => {
    if (isNavList) {
      const { id, children, to, active } = item;
      const itemStyle =
        active === true ? 'border-white/50' : 'border-transparent';

      return (
        <Link to={`/${to}`} key={id}>
          <li
            id={id}
            className={` ${itemStyle} flex cursor-pointer gap-2 border-[0_3px_0_0] transition hover:border-white md:border-[0_0_3px_0] md:py-9.5 lg:p-8`}
            onClick={() => itemF(id)}
          >
            {children}
          </li>
        </Link>
      );
    } else {
      const itemStyle = item.active === true ? condition.true : condition.false;
      return (
        <li
          className={`${itemStyle} ${style.liS}`}
          key={item.id}
          role="button"
          onClick={() => itemF(item.id)}
        >
          {listType === 'tec' ? item.id : listType === 'des' ? item.name : ''}
        </li>
      );
    }
  });
  return <ul className={style.container}>{itemsRender}</ul>;
}
