import { useEffect, useState } from "react";
import { ItemInterface } from "./interfaces & types/ItemInterface";
import "./App.css";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [listOfItems, setListOfItems] = useState([]);
  const [filterApplied, setFilterApplied] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    switch (filterApplied) {
      case "all":
        setFilteredItems(listOfItems);
        break;
      case "active":
        const activeItems = listOfItems.filter(
          (item: ItemInterface) => item.completed == false
        );
        setFilteredItems(activeItems);
        break;
      case "completed":
        const completedItems = listOfItems.filter(
          (item: ItemInterface) => item.completed == true
        );
        setFilteredItems(completedItems);
        break;
    }
  }, [filterApplied, listOfItems]);

  return (
    <div className="app_container">
      <FilterButtons filterProps={{ filterApplied, setFilterApplied }} />
      <TodoList itemsProps={{ filteredItems, setListOfItems }} />
    </div>
  );
}

export default App;
