import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

const styles = stylex.create({
  form: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  input: {
    width: "70%",
    padding: ".9rem 1.5rem",
    background: "#3C3D37",
    border: "none",
    borderRadius: ".375rem 0 0 .375rem",
    fontSize: "1rem",
    color: "#ECDFCC",
    ":focus": {
      outline: "none",
    },
  },
  button: {
    padding: ".2rem 0",
    width: "35%",
    backgroundColor: "#3b82f6",
    border: "none",
    fontSize: "1rem",
    borderRadius: "0 .375rem .375rem 0",
    color: "#EEEEEE",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#0B60B0",
      color: "black",
    },
  },
});

export default function Form({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodos = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    const newItem = { newTodo, packed: false, id: Date.now() };
    addTodo(newItem);

    setNewTodo("");
  };

  return (
    <form {...stylex.props(styles.form)} onSubmit={handleAddTodos}>
      <input
        {...stylex.props(styles.input)}
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button {...stylex.props(styles.button)}>+ Add Todo</button>
    </form>
  );
}
