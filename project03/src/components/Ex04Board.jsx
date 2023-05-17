import React, { useState } from "react";

const Ex04Board = ({ user, path, score }) => {
  return (
    <div className="board-item">
      <h3>{user}</h3>
      <img src={path} alt="" />
      <h4>현재 점수는?</h4>
      <h3>{score}</h3>
    </div>
  );
};
export default Ex04Board;
