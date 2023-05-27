import React, { useEffect, useState } from "react";

const Ex03 = () => {
  /*
    참참참 게임을 만들어보자!
    - 게임규칙
      1. 나는 공격, 컴퓨터는 수비를 담당
      2. 내가 버튼을 클릭했을 떄, 나와 컴퓨터의 선택이 같다면 나(공격)의 승리
      3. 나와 컴퓨터의 선택이 다르다면 컴퓨터(수비)의 승리
    
    - 문제 풀이
      1. 필요한 state들을 관리 (내선택, 컴퓨터선택, 게임결과)
        => useState
      2. 내 선택 => 내가 누른 버튼의 내용을 선택으로 삼는다.
        => 이벤트 객체
      3. 컴퓨터의 선택 => 랜덤하게 받아올 것(POS라는 배열에서)
        => 난수 뽑기
      4. 만약 나의 선택에 해당하는 state값이 변한다면, 승패를 판별해 줄것
        => useEffect
      5. 게임이 시작하기 전에는 "게임결과 : 패배~" 부분이 나오지 않도록 할 것!
        => 조건부 렌더링
  */
  const [mySelect, setMySelect] = useState("");
  const [comSelect, setComSelect] = useState("");
  const [result, setResult] = useState("");

  let pos = ["좌", "정면", "우"];
  const setSel = (select) => {
    setMySelect(select);
    setComRandom();
  };
  const setComRandom = () => {
    setComSelect(Math.floor(Math.random() * 3));
  };
  /* useEffect를 이용해서 정확한 시점을 파악 => 게임 판별 */
  useEffect(() => {
    // if (mySelect !== "")
    mySelect === comSelect ? setResult("승리") : setResult("패배");
  }, [mySelect, comSelect]);

  return (
    <div>
      <h1>참참참 게임!</h1>
      {mySelect !== "" && <h3>나의 선택 : {pos[mySelect]}</h3>}
      {comSelect !== "" && <h3>나의 선택 : {pos[comSelect]}</h3>}
      {mySelect !== "" && <h3>게임 결과 : {result}</h3>}
      <div>
        {pos.map((item, index) => (
          <button key={item} onClick={() => setSel(index)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ex03;
