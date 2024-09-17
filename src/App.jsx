import * as stylex from "@stylexjs/stylex";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";
import { useState } from "react";

const styles = stylex.create({
  container: {
    minHeight: "100dvh",
    background: "linear-gradient(to bottom right, #9333ea, #3b82f6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    position: "relative",
    maxWidth: "36rem",
    margin: ".5rem auto",
    padding: "2.5rem",
    backgroundColor: "black",
    borderRadius: ".625rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, .1)",
  },
  content: {
    maxWidth: "28rem",
    margin: "0 auto",
  },
});

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => setTodos((todos) => [...todos, todo]);

  const handleUpdate = (id) =>
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, packed: !todo.packed } : todo
      )
    );

  const handleDelete = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const handlClearList = () => {
    const confirmed = window.confirm("Are you sure to delete list");
    if (confirmed) setTodos([]);
  };

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.card)}>
        <div {...stylex.props(styles.content)}>
          <Header />
          <Form addTodo={handleAdd} />
        </div>
        <div>
          <List
            todos={todos}
            onToggleItem={handleUpdate}
            onDelete={handleDelete}
            clearList={handlClearList}
          />
        </div>
        <div>
          <Stats todos={todos} />
        </div>
      </div>
    </div>
  );
}
