import React, { useState } from "react";

const Ex02LikeList = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="likelist">
      <span onClick={() => setIsLike(!isLike)}>{isLike ? "💔" : "💜"}</span>{" "}
      <span>
        좋아요 <b>{isLike ? 1 : 0}</b>개
      </span>
    </div>
  );
};

export default Ex02LikeList;
