import React from "react";

const ProductItem = ({ item }) => {
  /* 
    Mission
    1) 누군가가 item을 선택했을 때, 해당 아이템에 대한 productDetail로 이동
      => 상품별로 고유번호 '/detail/1', 'detail/2'
  */
  return (
    <div className="product-container">
      <img width="100px" alt="" src={item.src} />
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default ProductItem;
