// src/components/TodoList.js

import React from "react";
import "./TodoList.css";

const todos = [
  { id: 1, task: "Submit assignment", due: "July 27, 2025" },
  { id: 2, task: "Read React Docs", due: "July 28, 2025" },
  { id: 3, task: "Practice JavaScript", due: "July 29, 2025" },
];

const TodoList = () => {
  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input type="checkbox" id={`todo-${item.id}`} />
            <label htmlFor={`todo-${item.id}`}>
              {item.task} – <span>{item.due}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;