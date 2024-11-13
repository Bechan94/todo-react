// src/App.tsx
import React, { useState } from "react";
import { Todo, Filter } from "./types";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1 className="title">todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={e => {
          if (e.key === "Enter" && e.currentTarget.value.trim()) {
            addTodo(e.currentTarget.value.trim());
            e.currentTarget.value = "";
          }
        }}
      />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <Footer
        count={todos.filter(todo => !todo.completed).length}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
