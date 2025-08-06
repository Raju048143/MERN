import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
    }
  };

  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Todos</h3>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-white rounded shadow"
          >
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-3"
              />

              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 flex-1 mr-3"
                />
              ) : (
                <span
                  className={`text-lg flex-1 ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            {editId === todo.id ? (
              <button
                onClick={() => handleUpdate(todo.id)}
                className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(todo)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
