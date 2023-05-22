import React from "react";
import menu from "./menu.json";
import MenuItem from "./components/Ex02MenuItem";
import "./style/Ex02.css";
const Ex02 = () => {
  const { list } = menu;
  console.log(list);

  return (
    <div className="ex02">
      <h1>전체메뉴</h1>
      <div className="menu-container">
        {list.map((food) => (
          <MenuItem
            name={food.name}
            price={food.price}
            content={food.content}
            imgSrc={food.imgSrc}
            key={food.name}
          />
        ))}
      </div>

      <h1>4200원보다 비싼 메뉴들</h1>
      <div className="menu-container">
        {list
          .filter((food) => food.price >= 4200)
          .map((food) => (
            <MenuItem
              name={food.name}
              price={food.price}
              content={food.content}
              imgSrc={food.imgSrc}
              key={food.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Ex02;
