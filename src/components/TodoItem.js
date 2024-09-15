export default function ToDoItem({ todo, onToggleItem, onDelete }) {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          value={todo.packed}
          onChange={() => onToggleItem(todo.id)}
        />
        <span style={todo.packed ? { textDecorationLine: "line-through" } : {}}>
          {todo.newTodo}
        </span>
        <button onClick={() => onDelete(todo.id)}>❌</button>
      </div>
    </div>
  );
}
