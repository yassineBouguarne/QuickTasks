import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  listItem: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".75rem",
    marginRight: ".2rem",
    marginBottom: ".9rem",
    borderRadius: ".3rem",
    borderLeft: ".4rem solid #9333ea",
    backgroundColor: "rgba(255, 255, 255, .1)",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, .2)",
    },
  },
  listItemText: {
    flex: 1,
    marginLeft: ".5rem",
    marginRight: ".5rem",
    wordBreak: "break-word",
  },
  listItemCheckbox: {
    width: "1.25rem",
    height: "1.25rem",
    cursor: "pointer",
  },
  packedItem: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  listItemDelete: {
    backgroundColor: "#e91f1f",
    border: "none",
    borderRadius: ".3rem",
    padding: ".5rem .7rem",
    color: "white",
    cursor: "pointer",
    fontSize: ".9rem",
    ":hover": {
      backgroundColor: "#fc2121",
    },
  },
});

export default function TodoItem({ todo, onToggleItem, onDelete }) {
  return (
    <li {...stylex.props(styles.listItem)}>
      <input
        type="checkbox"
        checked={todo.packed}
        onChange={() => onToggleItem(todo.id)}
        {...stylex.props(styles.listItemCheckbox)}
      />
      <span
        {...stylex.props(styles.listItemText, todo.packed && styles.packedItem)}
      >
        {todo.newTodo}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        {...stylex.props(styles.listItemDelete)}
      >
        Delete
      </button>
    </li>
  );
}
