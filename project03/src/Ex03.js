import React, { useState } from "react";
import "./style/ex03.css";
const Ex03 = () => {
  /*
    랜덤 게임을 해보자!

    1) 랜덤한 수를 뽑아주자 1~3
    2) 내가 누른 버튼의 숫자를 구해보자
    3) 1 숫자와 2숫자를 비교
      - 만약 두 숫자가 같다면 <p>정답입니다!</p>
      - 만약 두 숫자가 다르다면 <p>땡!</p>

    단, 각각 변화하는 수들은 바로 화면에 보여지게 한다.
  */

  // const [inputNum, setInputNum] = useState("");
  // const [ranNum, setRanNum] = useState("");
  // const btnCk = (e) => {
  //   setRanNum("" + Math.floor(Math.random() * 3 + 1));
  //   setInputNum(e.target.textContent);
  // };

  // 강사님
  const [ranNum, setRanNum] = useState(0);
  const [num, setNum] = useState(0);

  const btnCk = (e) => {
    // 랜덤 한 수 세팅
    setRanNum("" + parseInt(Math.random() * 3 + 1));

    // 내가 선택한 수 세팅
    setNum(e.target.innerText);
  };

  return (
    <div className="ex03">
      {/* <button onClick={btnCk}>1</button>
      <button onClick={btnCk}>2</button>
      <button onClick={btnCk}>3</button>

      <div>
        <p>내가 입력한 숫자 : {inputNum}</p>
        <p>랜덤 숫자 : {ranNum}</p>
        <p>{inputNum === ranNum ? <b>정답입니다🤷‍♀️</b> : <b>땡🤦‍♂️</b>}</p>
      </div> */}
      {/* 강사님 */}
      <button onClick={btnCk}>1</button>
      <button onClick={btnCk}>2</button>
      <button onClick={btnCk}>3</button>

      <div>
        <p>내가 입력한 숫자 : {num}</p>
        <p>랜덤 숫자 : {ranNum}</p>
        {/* 숫자 비교 */}
        {num === ranNum ? <p>정답입니다</p> : <p>떙</p>}
      </div>
    </div>
  );
};

export default Ex03;
