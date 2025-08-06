import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localstorage";

const preloadedTodos = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: {
    todo: {
      todos: preloadedTodos,
    },
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state.todo.todos);
});
