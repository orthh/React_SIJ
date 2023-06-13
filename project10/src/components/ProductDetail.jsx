import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { num } = useParams();
  console.log("num", num);
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://172.30.1.22:8090/shop/${num}`).then((res) => {
      console.log("한개결과", res.data.product);
      setProduct(res.data.product);
    });
  }, []);
  return (
    <div>
      {product.img && (
        <div key={product.pcode}>
          <img width="100px" src={"data:image/;base64," + product.img} alt="" />
          <p>
            <strong>{product.pname}</strong> - {product.price}원
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
