import React from "react";

const MenuItem = ({ name, price, favor_drink }) => {
  // console.log("App.js 에서 넘어온 값", props, props.name);

  /*
    상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
    함수의 형태이기 때문에, 값은 매개변수를 통해서 받는다.
    Case 1. props => props.name
    Case 2. {name} => name
            객체 비구조화 할당
            - 객체 안의 속성만 꺼내서 마치 변수인 것 처럼 사용
              ex) let props = {name: '선영표', gender: 'W'}
                  -> let {name, gender} = {name: '선영표',gender: 'W'}
  */
  MenuItem.defaultProps = {
    favor_drink: "아이스 아메리카노",
    price: 1500,
  };
  console.log(name, price);
  return (
    <div className="item-border">
      <p>{name}</p>
      <p>{price}원</p>
      <h3>{favor_drink}</h3>
    </div>
  );
};

export default MenuItem;
