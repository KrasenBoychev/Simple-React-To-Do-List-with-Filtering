// represent a single to-do item

import { ItemInterface } from "../interfaces & types/ItemInterface";

export default function TodoItem({ itemsProps }) {
  const { item, setListOfItems } = itemsProps;

  const itemClickHandler = () => {
    setListOfItems((prevItems: ItemInterface[]) =>
      prevItems.map((singleItem) => {
        if (singleItem._id === item._id) {
          const newItem = {
            _id: item._id,
            content: item.content,
            completed: !item.completed,
          };
          return newItem;
        } else {
          return singleItem;
        }
      })
    );
  };

  return (
    <li
      className={`item ${item.completed && "item_completed"}`}
      onClick={itemClickHandler}
    >
      {item.content}
    </li>
  );
}
