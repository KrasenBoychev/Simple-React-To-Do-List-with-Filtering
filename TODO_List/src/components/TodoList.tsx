// display the list of to-do items

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { ItemInterface } from "../interfaces & types/ItemInterface";

export default function TodoList({ itemsProps }) {
  const { filteredItems, setListOfItems } = itemsProps;

  return (
    <div className="todo_list_container">
      <h1>TO-DO List</h1>
      <div className="todo_list_body">
        <TodoInput setListOfItems={setListOfItems} />
        <ul>
          {filteredItems &&
            filteredItems.map((item: ItemInterface) => (
              <TodoItem key={item._id} itemsProps={{ item, setListOfItems }} />
            ))}
        </ul>
      </div>
    </div>
  );
}
