import React, { useContext } from "react";
import { TodoContext } from "../context/Ex04TodoContext";

const Ex04AddTodo = () => {
  const { newTodo, handleNewTodo, handleTodoAddition } =
    useContext(TodoContext);
  // setTodos([...todos, { text: `${newTodo}`, completed: false }])
  return (
    <div>
      <input type="text" onChange={handleNewTodo} value={newTodo} />
      <button onClick={handleTodoAddition}>추가</button>
    </div>
  );
};

export default Ex04AddTodo;
