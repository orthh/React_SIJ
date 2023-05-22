import React, { useContext } from "react";
import { DarkContext } from "../context/Ex03DarkContext";

export const Ex03Main = () => {
  const { isDark, setIsDark, style } = useContext(DarkContext);
  return (
    <div className="ex03main" style={style}>
      Ex03Main
      <br />
      <button onClick={() => setIsDark(!isDark)}>다크모드</button>
    </div>
  );
};
