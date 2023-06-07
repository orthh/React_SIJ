import React from "react";
import { Link, useParams } from "react-router-dom";
const ProductDetail = ({ list }) => {
  let { num } = useParams();
  return (
    <div className="list-container">
      <div className="detail-item">
        {list.length !== 0 ? (
          <div>
            <img width="200px" alt="" src={list[num - 1].src} />
            <h3>제품의 이름 : {list[num - 1].title}</h3>
            <p>가격 : {list[num - 1].price}원</p>
            {/* 만약에 배송비가 무료라면 '배송비 무료!' 라고 띄워주고 */}
            {/* 배송비가 유료라면 '배송비 3000원'으로 띄워주기 */}
            {list[num - 1].delivery === "free" ? (
              <span>배송비 : 무료</span>
            ) : (
              <span>배송비 : {list[num - 1].delivery}원</span>
            )}
            <br />
            <Link to="/list">목록으로 돌아가기</Link>
          </div>
        ) : (
          <div>정상적인 경로로 접속해주세요.</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
