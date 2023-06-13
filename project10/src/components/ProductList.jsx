import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductList = ({ list }) => {
  console.log("props", list);

  /* 만약, '원피스' 페이지를 클릭하면 type이 dress인것만
            '전체' 페이지를 클릭하면 전체
  */

  const [typeParams, setTypeParams] = useSearchParams();
  let type = typeParams.get("type");

  let newList =
    type !== null && list.filter((item) => item.product.ptype === "dress");

  const nav = useNavigate();

  return (
    <div>
      {/* 미션
      상품명 - 가격을 10개 상품 모두 띄워줄 것
      */}

      {type == null
        ? list.map(({ product }) => (
            <div
              key={product.pcode}
              onClick={() => nav(`/product/${product.pcode}`)}
            >
              <img
                width="100px"
                src={"data:image/;base64," + product.img}
                alt=""
              />
              <p>
                <strong>{product.pname}</strong> - {product.price}원
              </p>
            </div>
          ))
        : newList.map(({ product }) => (
            <div
              key={product.pcode}
              onClick={() => nav(`/product/${product.pcode}`)}
            >
              <img
                width="100px"
                src={"data:image/;base64," + product.img}
                alt=""
              />
              <p>
                <strong>{product.pname}</strong> - {product.price}원
              </p>
            </div>
          ))}
    </div>
  );
};

export default ProductList;
