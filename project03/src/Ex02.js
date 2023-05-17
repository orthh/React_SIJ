import React from "react";
import picSrc from "./img/likepic.gif";
import LikeList from "./components/Ex02LikeList";
import "./style/ex02.css";
const Ex02 = () => {
  /* React에서 내부 이미지 경로 지정하는 방법
    1) src폴더에서 이미지를 import하기
      - import 이미지변수 from 경로
      - <img src={이미지변수} />

    2) public 폴더 내에 이미지를 저장하고 접근하기
      - public > img 폴더를 만든후 파일 보관
      - 이 때, 별도의 import는 필요하지 않다.
        why? public 폴더는 서버와 계속해서 통신 중
  */

  /*
    실습 문제!
    STEP 1) 하트를 클릭 시,하트가 하트모양 변경
    STEP 2) 하트를 클릭 시, 좋아요 1개로 변경
    STEP 3) 좋아요 상태에서 하트를 클릭 시, 다시 원래대로
  */
  return (
    <div className="ex02">
      <img src={picSrc} width="150px" alt="noimg" />
      <LikeList />
    </div>
  );
};

export default Ex02;
