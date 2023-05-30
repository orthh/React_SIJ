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
        <Link to="/">로고</Link>
      </div>
      <div className="link-container">
        <Link to="/">메인창</Link>
        <Link to="/productlist">목록</Link>
      </div>
      <div className="link-container">로그인</div>
    </div>
  );
};

export default Header;
