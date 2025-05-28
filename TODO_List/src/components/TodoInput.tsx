//adding new to-do items
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ItemInterface } from "../interfaces & types/ItemInterface";
import { ChangeEventHandler } from "../interfaces & types/EventsTypes";

export default function TodoInput({ setListOfItems }) {
  const [addItem, setAddItem] = useState(false);
  const [newItemValue, setNewItemValue] = useState("");

  const addTaskClickHandler = () => {
    setAddItem(true);
  };

  const addNewItemChangeHandler = (e: ChangeEventHandler) => {
    setNewItemValue(e.target.value);
  };

  const cancelNewItemClickHandler = () => {
    setAddItem(false);
  };

  const publicNewItemClickHandler = () => {
    if (newItemValue == "") {
      return;
    }

    const unique_id = uuid();
    setListOfItems((prev: ItemInterface[]) => [
      { _id: unique_id, content: newItemValue, completed: false },
      ...prev,
    ]);
    setNewItemValue("");
    setAddItem(false);
  };

  return (
    <div>
      {addItem ? (
        <div className="todo_input_wrapper">
          <input
            type="text"
            name="item"
            value={newItemValue}
            onChange={addNewItemChangeHandler}
          />
          <div className="todo_input_btns">
            <button onClick={publicNewItemClickHandler}>Add</button>
            <button onClick={cancelNewItemClickHandler}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="todo_add_task" onClick={addTaskClickHandler}>
          <i className="fa-solid fa-plus fa-2s"></i>
          Add Task
        </div>
      )}
    </div>
  );
}
