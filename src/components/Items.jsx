import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Items = ({ item, handleDelete, handleEdit, handleCheckItem }) => {
  return (
    <li className="flex justify-between items-center bg-slate-800 bg-opacity-30 hover:shadow-xl p-3 rounded-full min-w-80 transition-all ease-in-out hover:scale-105">
      <input
        type="checkbox"
        name="todo"
        id={item}
        className="checked:before:flex checked:before:justify-center checked:before:items-center checked:before:content-['\2713'] bg-transparent border rounded-full w-4 h-4 checked:before:text-xs transition-all cursor-pointer appearance-none checked:scale-105 ease-in-out"
        onChange={(e) => handleCheckItem(e)}
      />
      <span>{item}</span>
      <div>
        <button
          className="bg-yellow-500 mx-1 p-2 rounded-full transition ease-in-out hover:scale-110 active:scale-95"
          onClick={() => handleEdit(item)}
        >
          <MdEdit />
        </button>
        <button
          className="bg-red-500 mx-1 p-2 rounded-full transition ease-in-out hover:scale-110 active:scale-95"
          onClick={() => handleDelete(item)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default Items;
