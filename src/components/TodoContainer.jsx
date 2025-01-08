import React, { useContext, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import Items from "./Items";
import { ToDoContext } from "../store/ToDoContext";

const TodoContainer = () => {
  const { items, handleAddItems } = useContext(ToDoContext);
  const inputVal = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddItems(inputVal.current.value);
      inputVal.current.value = "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 shadow-2xl backdrop-blur-2xl p-4 border border-opacity-50 rounded-2xl min-w-96 max-w-[80vw] min-h-96 text-center">
      <h1 className="font-bold text-3xl text-white">To Do - React App</h1>
      <div className="flex justify-between items-center w-full">
        <input
          type="text"
          placeholder="Enter To Do item..."
          className="bg-slate-800 bg-opacity-30 hover:shadow-xl ml-4 p-3 pl-5 rounded-full w-full text-white transition-all caret-color-200 ease-in-out outline-none placeholder-neutral-200"
          ref={inputVal}
          onKeyUp={(e) => handleEnter(e)}
        />
        <button
          className="bg-slate-800 bg-opacity-30 hover:shadow-xl m-2 p-3 rounded-full text-white text-xl transition-all cursor-pointer ease-in-out hover:scale-105 active:scale-95"
          onClick={() => handleAddItems(inputVal.current.value)}
        >
          <FaPlus />
        </button>
      </div>
      <ul className="flex flex-col justify-center items-center gap-3 font-semibold text-white">
        {items.length === 0 ? (
          <img src="/assets/no-items.png" alt="no-items" className="w-40" />
        ) : (
          items.map((item, index) => {
            return <Items key={item + index} item={item} />;
          })
        )}
      </ul>
    </div>
  );
};

export default TodoContainer;
