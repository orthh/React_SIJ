import React, { useContext } from "react";
import { TodoContext } from "../context/Ex04TodoContext";

const Ex04ListItem = ({ todos, index }) => {
  const { handleTodoToggle, handleTodoDelete } = useContext(TodoContext);

  return (
    <div>
      <input
        type="checkbox"
        id="todo-item"
        onChange={() => handleTodoToggle(index)}
      />
      <label
        htmlFor="todo-item"
        style={{
          textDecoration: todos.completed ? "line-through" : "none",
        }}
      >
        {todos.text}
      </label>
      <button onClick={() => handleTodoDelete(index)}>삭제</button>
    </div>
  );
};

export default Ex04ListItem;
