import React from "react";

const Ex02MenuItem = ({ name, price, content, imgSrc }) => {
  return (
    <div className="menuitem">
      <img src={imgSrc} width="200px" alt="" />
      <p>
        <span>{name}</span>
        <span>{price}</span>
      </p>
      <p>{content}</p>
    </div>
  );
};

export default Ex02MenuItem;
