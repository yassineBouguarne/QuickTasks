import { useState } from "react";

export default function Form({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handlAddTodos = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    const newItem = { newTodo, packed: false, id: Date.now() };
    addTodo(newItem);

    setNewTodo("");
  };

  return (
    <form onSubmit={handlAddTodos}>
      <input
        type="text"
        placeholder="Add..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>+</button>
    </form>
  );
}
