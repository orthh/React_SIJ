import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = ({ list, setList }) => {
  let { num } = useParams();
  return (
    <div>
      <div>
        {list.length !== 0 ? (
          <div>
            <img width="100px" alt="" src={list[num - 1].src} />
            <p>{list[num - 1].title}</p>
            <p>{list[num - 1].price}원</p>
          </div>
        ) : (
          <div>정상적인 경로로 접속해주세요.</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
