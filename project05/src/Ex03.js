import React from "react";
import Ex03Header from "./components/Ex03Header";
import { Ex03Main } from "./components/Ex03Main";
import { useState } from "react";
import { DarkContext } from "./context/Ex03DarkContext";
import "./style/Ex03.css";

const Ex03 = () => {
  /*
    1.유저가다크모드 클릭시 배경 검정색. 글자색 흰색
    2. 유저가 한번 더 클릭시 배경 흰색, 글자색 검정색 돌아오기
    3. context를 사용할 것
    4. const[isDark, setIsDark] = useState(false); 사용할것
  
  */
  const [isDark, setIsDark] = useState(false);
  const style = {
    color: isDark ? "white" : "black",
    backgroundColor: isDark ? "black" : "white",
    borderBottom: isDark ? "1px solid white" : "1px solid black",
  };

  return (
    <DarkContext.Provider value={{ isDark, setIsDark, style }}>
      <div className="ex03">
        <Ex03Header />
        <Ex03Main />
      </div>
    </DarkContext.Provider>
  );
};

export default Ex03;
