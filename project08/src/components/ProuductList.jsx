import React from "react";
import axios from "axios";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

const ProuductList = ({ list, setList }) => {
  /*
    Mission!
    1) public안에 두었던 bestList.json 값을 가지고 올 것
      => axios 이용, useEffect 이용, useState 배열 이용
    2) 가지고 온 데이터를 state값 관리
      => map 함수, props 처리 (index 값도 )
  
  */
  const getData = () => {
    axios.get("/bestList.json").then((res) => setList(res.data.list));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="list-container">
      {list.map((elem) => (
        <ProductItem item={elem} key={elem.no} />
      ))}
    </div>
  );
};

export default ProuductList;
