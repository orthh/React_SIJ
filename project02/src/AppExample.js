import React from "react";
import MemberBox from "./components/MemberBox";
import "./AppExample.css";

const AppExample = () => {
  /* 여러분의 팀원을 소개해주세요! 
    이름 : 홍길동
    성별 : 여성 / 남성
    좋아하는 노래 : 아이브 - I AM

    단, Component와 props 의 개념을 이용할 것
      - MemberBox 라는 컴포넌트를 생성하기

    혹시 너무 빨리 끝내버린 사람은 디자인 하고 있기!
  */
  const members = [
    {
      id: 1,
      name: "김다영",
      gender: "여성",
      fav_music: "큐피드 - 피프티피프티",
    },
    { id: 2, name: "김대혁", gender: "남성", fav_music: "sg워너비 - 살다가" },
    { id: 3, name: "김혁", gender: "남성", fav_music: "버즈 - 가시" },
    { id: 4, name: "정다운", gender: "여성", fav_music: "빈지노 - 부기온앤온" },
  ];
  return (
    <div className="container">
      {members.map((compo) => (
        <MemberBox key={compo.id} info={compo} />
      ))}
      {/* <MemberBox info={members[0]} />
      <MemberBox info={members[1]} />
      <MemberBox info={members[2]} />
      <MemberBox info={members[3]} /> */}
    </div>
  );
};

export default AppExample;
