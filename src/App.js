import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handlAdd = (todo) => setTodos((todos) => [...todos, todo]);

  const handlUpddate = (id) =>
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, packed: !todo.packed } : todo
      )
    );

  const handldelete = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <Header />
      <Form addTodo={handlAdd} />
      <List todos={todos} onToggleItem={handlUpddate} onDelete={handldelete} />
      <Stats todos={todos} />
    </div>
  );
}
