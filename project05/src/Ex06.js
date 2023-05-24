import React, { useRef } from "react";

const Ex06 = () => {
  const pdfStyle = {
    width: "100%",
    height: "90%",
  };
  const frameRef = useRef();
  const pdfName = [1, 2];
  const getPath = (num) => {
    let currentPath = pdfName[num];
    let prevPath = "http://localhost:3000/pdf/pdf";
    let afterPath = ".pdf";
    let fullPath = prevPath + currentPath + afterPath;
    return fullPath;
  };
  let cnt = 1;
  const handleFrame = (file) => {
    const path = getPath(cnt++ % file.length);
    frameRef.current.src = path;

    /* 강사님 코드 */
    // frameRef.current.src == "http://localhost:3000/pdf/pdf1.pdf"
    //   ? (frameRef.current.src = "/pdf/pdf2.pdf")
    //   : (frameRef.current.src = "/pdf/pdf1.pdf");
  };
  return (
    <div style={{ height: "100vh" }}>
      <h3>
        오늘의 학습자료
        <button onClick={() => handleFrame(pdfName)}>변경</button>
      </h3>
      <iframe
        ref={frameRef}
        title="pdf"
        style={pdfStyle}
        src="/pdf/pdf1.pdf"
      ></iframe>
    </div>
  );
};

export default Ex06;
