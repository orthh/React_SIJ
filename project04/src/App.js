import "./App.css";

function App() {
  let students = [
    { name: "김대혁", age: 21, gender: "남성" },
    { name: "김다영", age: 19, gender: "여성" },
    { name: "정다운", age: 20, gender: "여성" },
  ];

  /*
    Map 함수
    - 주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다.
      ex) students라는 배열의 이름만 뽑아서 새로운 함수를 만들고싶어!
    - 기존 배열은 영향을 받지 않는다.
    - key 값을 꼭 작성해야한다.
      이 때, key값은 서로 중복되면 안된다 고유한 값!
  */
  let newStudents = students.map((item) => (
    <button key={item.name}> {item.name} </button>
  ));

  /*
    안녕하세요 저는 장원영입니다. 제 나이는 20살이에요.
    안녕하세요 저는 장원영입니다. 제 나이는 20살이에요.
    안녕하세요 저는 장원영입니다. 제 나이는 20살이에요.
    => p태그로 화면에 출력
  */

  const mentStudents = students.map((stu) => (
    <p key={stu.name}>
      안녕하세요 저는 {stu.name}입니다. 제 나이는 {stu.age}이에요.
    </p>
  ));

  // ====================Filter=======================
  let womanList = students.filter((item) => item.gender === "여성");
  console.log("woman List : ", womanList);

  return (
    <div>
      <h2>Map 함수</h2>

      {mentStudents}

      {students.map((stu) => (
        <p>
          하이 난 {stu.name}이야. 나이는{stu.age}임.
        </p>
      ))}

      <hr />
      <h1>필터함수</h1>
      {/* 
        filter함수는 배열의 각 요소에 대해서 주어진 함수의 결과 값이
        true인 요소들만 모아서 새로운 배열로 반환하는 함수를 의미한다.
      */}
      {womanList.map((item) => (
        <p key={item.name}>
          {item.name}이구요, {item.age}살 입니다.
        </p>
      ))}
    </div>
  );
}

export default App;
