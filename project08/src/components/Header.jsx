import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  /* 
    Mission!
    로고를 클릭 => 메인창으로
    메인창을 클릭 => 메인창으로
    목록을 클릭 => ProductList
  */
  return (
    <div className="header-container">
      <div className="link-container">
        <Link to="/">HYEOK</Link>
      </div>
      <div className="link-container">
        <Link to="/list">목록</Link>
        {"   "}
        <Link to="/storage">저장소</Link>
      </div>
      <div className="link-container">로그인</div>
    </div>
  );
};

export default Header;
