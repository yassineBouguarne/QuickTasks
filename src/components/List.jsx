import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import TodoItem from "./TodoItem";

const styles = stylex.create({
  list: {
    color: "white",
    maxWidth: "35rem",
    maxHeight: "13rem",
    overflow: "auto",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    scrollbarWidth: "thin",
    scrollbarColor: "#9333ea rgba(255, 255, 255, 0.1)",
  },
  action: {
    display: "flex",
    justifyContent: "center",
    marginBottom: ".9rem",
  },
  select: {
    backgroundColor: "#2a2a2b",
    color: "white",
    fontFamily: "inherit",
    border: "none",
    borderRadius: ".375rem",
    padding: ".5rem .5rem",
    fontSize: ".93rem",
    cursor: "pointer",
  },
  delete: {
    display: "flex",
    justifyContent: "center",
    marginTop: ".5rem",
  },
  buttonDelete: {
    backgroundColor: "#f53a3a",
    color: "white",
    fontSize: "1rem",
    fontFamily: "inherit",
    border: "none",
    borderRadius: ".375rem",
    padding: ".3rem 3rem",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#df0f0f",
    },
  },
});

export default function List({ todos, onToggleItem, onDelete, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = todos;

  if (sortBy === "packed")
    sortedItems = todos
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      {todos.length !== 0 && (
        <div {...stylex.props(styles.action)}>
          <select
            {...stylex.props(styles.select)}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
      )}
      <ul {...stylex.props(styles.list)}>
        {sortedItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggleItem={onToggleItem}
            onDelete={onDelete}
          />
        ))}
      </ul>
      {todos.length !== 0 && (
        <div {...stylex.props(styles.delete)}>
          <button {...stylex.props(styles.buttonDelete)} onClick={clearList}>
            Clear list
          </button>
        </div>
      )}
    </>
  );
}
