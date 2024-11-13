
import React from "react";
import { Filter } from "../types";

interface FooterProps {
  count: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ count, filter, setFilter, clearCompleted }) => (
  <footer className="footer">
    <span className="todo-count">{count} items left</span>
    <div className="filters">
      <button className={`filter ${filter === "all" ? "selected" : ""}`} onClick={() => setFilter("all")}>All</button>
      <button className={`filter ${filter === "active" ? "selected" : ""}`} onClick={() => setFilter("active")}>Active</button>
      <button className={`filter ${filter === "completed" ? "selected" : ""}`} onClick={() => setFilter("completed")}>Completed</button>
    </div>
    <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
  </footer>
);

export default Footer;
