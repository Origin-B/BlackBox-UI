import { useState } from 'react';

export function useSelection(initialData) {
  const [items, setItems] = useState(initialData);

  function selectItem(id) {
    setItems(
      items.map((item) =>
        item.id === +id
          ? { ...item, active: true }
          : { ...item, active: false },
      ),
    );
  }

  const activeItem = items.find((item) => item.active === true);

  return { items, selectItem, activeItem };
}
