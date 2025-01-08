import { useEffect, useState } from "react";
import TodoContainer from "./components/TodoContainer";
import { ToDoContext } from "./store/ToDoContext";

function App() {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditEnabled, setIsEditEnabled] = useState(null);

  const handleAddItems = (item) => {
    if (item !== "" && item !== " ") {
      if (!items.includes(item.trim())) {
        setItems((prev) => [...prev, item.trim()]);
      } else {
        alert("Item already added!");
      }
    }
  };

  const handleDelete = (item) => {
    setItems((prev) => prev.filter((i) => i !== item));
    setCheckedItems((prev) => prev.filter((i) => i !== item));
    setIsEditEnabled(null);
  };

  const handleEdit = (item, editInputValue) => {
    if (!isEditEnabled) {
      setIsEditEnabled(item);
    } else {
      setIsEditEnabled(null);
      if (
        editInputValue &&
        editInputValue.trim() !== "" &&
        editInputValue.trim() !== " "
      ) {
        setItems((prev) =>
          prev.map((i) => (i === item ? editInputValue.trim() : i))
        );
        if (checkedItems.includes(item)) {
          setCheckedItems((prev) => prev.filter((i) => i !== item));
        }
      }
    }
  };

  const handleCheckItem = (e) => {
    if (!checkedItems.includes(e.target.id)) {
      setCheckedItems((prev) => [...prev, e.target.id]);
    } else {
      setCheckedItems((prev) => prev.filter((i) => i !== e.target.id));
    }
  };

  const getTodoItems = () => {
    const todoItems = JSON.parse(localStorage.getItem("items"));
    const todoCheckedItems = JSON.parse(localStorage.getItem("checkedItems"));
    if (todoItems !== null && todoCheckedItems !== null) {
      setItems([...todoItems]);
      setCheckedItems([...todoCheckedItems]);
    }
  };

  useEffect(() => {
    getTodoItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [items, checkedItems]);

  return (
    <main className="relative flex justify-center items-center w-screen h-screen">
      <ToDoContext.Provider
        value={{
          items,
          checkedItems,
          isEditEnabled,
          handleAddItems,
          handleDelete,
          handleEdit,
          handleCheckItem,
        }}
      >
        <TodoContainer />
      </ToDoContext.Provider>
    </main>
  );
}

export default App;
