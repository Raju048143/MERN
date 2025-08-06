import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    input.trim() !== ""
      ? dispatch(addTodo(input))
      : alert("Plese add your task");
    console.log(input);
    setInput("");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Todo Input Form */}
      <form onSubmit={addTodoHandler} className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
