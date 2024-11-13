
import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => (
  <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
    <input
      type="checkbox"
      className="toggle"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    <label className="todo-text">{todo.text}</label>
  </li>
);

export default TodoItem;
