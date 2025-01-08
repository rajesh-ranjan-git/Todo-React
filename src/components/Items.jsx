import React, { useContext, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { ToDoContext } from "../store/ToDoContext";

const Items = ({ item }) => {
  const {
    isEditEnabled,
    handleDelete,
    handleEdit,
    checkedItems,
    handleCheckItem,
  } = useContext(ToDoContext);

  const editInputVal = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleEdit(item, editInputVal.current.value);
      editInputVal.current.value = "";
    }
  };

  return (
    <li className="flex justify-between items-center gap-2 bg-slate-800 bg-opacity-30 hover:shadow-xl p-3 rounded-full min-w-96 text-xl transition-all ease-in-out hover:scale-105">
      {isEditEnabled === item ? (
        <input
          type="text"
          className="bg-transparent bg-opacity-30 mx-4 pl-5 w-48 text-white transition-all caret-color-200 ease-in-out outline-none placeholder-slate-300"
          ref={editInputVal}
          placeholder={item}
          onKeyUp={(e) => handleEnter(e)}
        />
      ) : (
        <>
          <input
            type="checkbox"
            name="todo"
            checked={checkedItems.includes(item) ? true : false}
            id={item}
            className="checked:before:flex checked:before:justify-center checked:before:items-center checked:before:content-['\2713'] bg-transparent checked:bg-orange-500 border rounded-full w-4 h-4 checked:before:text-xs placeholder:text-neutral-300 transition-all cursor-pointer appearance-none checked:scale-105 ease-in-out"
            onChange={(e) => handleCheckItem(e)}
          />
          <p
            className={
              checkedItems.includes(item)
                ? "line-through decoration-orange-500 break-words text-wrap max-w-[50vw]"
                : "break-words text-wrap max-w-[50vw]"
            }
          >
            {item}
          </p>
        </>
      )}

      <div>
        {!isEditEnabled && (
          <button
            className="bg-yellow-500 mx-1 p-2 rounded-full transition ease-in-out hover:scale-110 active:scale-95"
            onClick={() => handleEdit(item, null)}
          >
            <MdEdit />
          </button>
        )}

        <button
          className="bg-red-500 m-1 p-2 rounded-full transition ease-in-out hover:scale-110 active:scale-95"
          onClick={() => handleDelete(item)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default Items;
