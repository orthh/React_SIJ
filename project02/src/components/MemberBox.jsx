import React from "react";

const MemberBox = ({ info }) => {
  const { name, gender, fav_music } = info;
  return (
    <div className="memberBox">
      <p>이름 : {name}</p>
      <p>성별 : {gender}</p>
      <p>좋아하는 노래 : {fav_music}</p>
    </div>
  );
};

export default MemberBox;
