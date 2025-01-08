import { createContext } from "react";

export const ToDoContext = createContext({
  items: [],
  checkedItems: [],
  isEditEnabled: null,
  handleAddItems: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  handleCheckItem: () => {},
});
