import React, { useRef } from "react";

const Ex07 = () => {
  /*
    1) 사용자가 input 태그 안에 입력한 값을 가져오기
    2) 그 값에 따라서 사진의 src 속성을 변경하기
  */
  const inputRef = useRef();
  const imgRef = useRef();
  const chImg = () => {
    inputRef.current.value === "고구마"
      ? (imgRef.current.src =
          "https://img.lovepik.com/free-png/20211231/lovepik-fresh-sweet-potatoes-png-image_401100378_wh860.png")
      : (imgRef.current.src =
          "https://img.lovepik.com/element/40051/5850.png_860.png");
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <p>희망하는 사진이 있으신가요?</p>
      {/* input에 onChange가 효율더 좋음 근데 공부중이니까 사용 */}
      <input type="text" ref={inputRef} />
      <button onClick={chImg}>변경!</button>

      <div>
        <img
          src="https://img.lovepik.com/free-png/20211231/lovepik-fresh-sweet-potatoes-png-image_401100378_wh860.png"
          width="200px"
          alt="no"
          ref={imgRef}
        />
      </div>
    </div>
  );
};

export default Ex07;
