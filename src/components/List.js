import ToDoItem from "./TodoItem";

export default function List({ todos, onToggleItem, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          todo={todo}
          key={todo.id}
          onToggleItem={onToggleItem}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
