import React, { useState } from "react";
import Board from "./components/Ex04Board";
import "./style/ex04.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Ex04 = () => {
  /*
    주사위 게임을 만들어보자!
      1) user가 '던지기!' 버튼을 클릭한다.
      2) user의 주사위 숫자가 랜덤으로 표시된다.
      3) 컴퓨터의 주사위 숫자 또한 랜덤으료 표시된다.
      4) 유저의 주사위 숫자 - 컴퓨터의 주사위 숫자 비교
        4-1) 내가 이겼을 경우는 나의 점수 +1
        4-2) 내가 졌을 경우는 컴퓨터의 점수 +1
      5) 먼저 5점에 도달한 사람이 최종 승리
        => alert 당신의 승리입니다! 당신의 패배입니다!
      6) RESET버튼 클릭 시, 모든 내용이 초기화
        => 점수, 이미지 경로, 이미지 파일 번호

      HINT!! 필요한 정보들
        - 주사위 숫자 (나, 컴퓨터)
        - 이미지 경로 (나, 컴퓨터)
        - 점수(나, 컴퓨터)
        => Board의 props 데이터로 
  */
  // 이미지 경로 가져오기! (public)
  const [myNum, setMyNum] = useState(1);
  const [comNum, setComNum] = useState(1);
  const [myScore, setMyScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  const getRandomNum = () => Math.floor(Math.random() * 6 + 1);
  const getPath = (num) => "img/dice" + num + ".png";
  const isWinFunc = (num1, num2) => num1 > num2 && 1;

  const run = () => {
    const ran1 = getRandomNum();
    const ran2 = getRandomNum();
    setMyNum(ran1);
    setComNum(ran2);
    setMyScore(myScore + isWinFunc(ran1, ran2));
    setComScore(comScore + isWinFunc(ran2, ran1));
  };
  const reset = () => {
    setMyNum(1);
    setComNum(1);
    setMyScore(0);
    setComScore(0);
  };
  const uWin = () => alert("당신이 이겼습니다.");
  const cWin = () => alert("당신이 졌습니다.");
  return (
    <div className="container">
      <h1>주사위게임</h1>
      <div className="btn-container">
        <Button variant="secondary" onClick={run}>
          던지기!
        </Button>{" "}
        <Button variant="danger" onClick={reset}>
          RESET
        </Button>
      </div>
      <div className="board-container">
        <Board user="나" path={getPath(myNum)} score={myScore} />
        <Board user="컴퓨터" path={getPath(comNum)} score={comScore} />
      </div>
      <span className="temp">{myScore >= 5 && (uWin(), reset())}</span>
      <span className="temp">{comScore >= 5 && (cWin(), reset())}</span>
    </div>
  );
};

export default Ex04;
