import React, { useContext } from "react";
import { DarkContext } from "../context/Ex03DarkContext";
const Ex03Header = () => {
  const { style } = useContext(DarkContext);
  return (
    <div className="ex03header" style={style}>
      Ex03Header
    </div>
  );
};

export default Ex03Header;
