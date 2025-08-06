import "./App.css";
import AddTodo from "./componets/AddTodo";
import Todo from "./componets/Todo";

function App() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Add your work!</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
