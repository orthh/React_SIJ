import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProuductList from "./components/ProuductList";
import ProductDetail from "./components/ProductDetail.jsx";
import { useState } from "react";

function App() {
  /* 
    미션 수행 순서!
    1) Route 처리
      - BrowserRouter, Routes, Route, ... etc
    
    2) App.js 에 list state 관리해주기
      - tip! 함수 또한 props로 보낼 수 있다는 것을 명심!
      ex)const [list,setList] = useState([])
        ...
        <Main list={list} setList={setList} />
    
    3) Header Mission
    4) Product List Mission
    5) Product Item Mission
    6) Product Detail Mission
  
  */
  const [list, setList] = useState([]);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/productlist"
          element={<ProuductList list={list} setList={setList} />}
        ></Route>
        <Route
          path="/productDetail/:num"
          element={<ProductDetail list={list} setList={setList} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
