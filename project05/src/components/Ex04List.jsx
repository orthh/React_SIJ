import React, { useContext } from "react";
import Ex04ListItem from "./Ex04ListItem";
import { TodoContext } from "../context/Ex04TodoContext";

const Ex04List = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo, idx) => (
        <Ex04ListItem key={todo.text + idx} todos={todo} index={idx} />
      ))}
    </div>
  );
};

export default Ex04List;
