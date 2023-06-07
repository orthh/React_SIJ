import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  /* 
    Mission
    1) 누군가가 item을 선택했을 때, 해당 아이템에 대한 productDetail로 이동
      => 상품별로 고유번호 '/detail/1', 'detail/2'
  */
  const nav = useNavigate();
  const goDetail = () => nav(`/detail/${item.no}`);
  return (
    <div className="product-container" onClick={goDetail}>
      <img width="100px" alt="" src={item.src} />
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </div>
  );
};

export default ProductItem;
