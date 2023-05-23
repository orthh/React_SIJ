import React, { useState } from "react";
import Ex04List from "./components/Ex04List";
import Ex04AddTodo from "./components/Ex04AddTodo";
import { TodoContext } from "./context/Ex04TodoContext";

const Ex04 = () => {
  // todolist
  /* 1-1) Context 세팅
        - Ex04TodoContext 파일 => import, export
        - 전역적으로 관리해줘야 할 데이터 생성
          -> todo리스트 : todos, setTodos
              => text라는 속성, completed라는 속성
                const [todos, setTodos] = useState([{text:'React 복습하기', completed:false}])
          -> 새로 추가할 todo : newTodo, setNewTodo
        - TodoList 화면에 우리가 배열로 가지고 있는 'React복습하기'를 띄워줄것

      Mission2. 할일 추가해보기
        - AddTodo에 할일을 입력하고 버튼 클릭 시 배열안에 새로운 값이 
          들어가게 된다.
        - handleNewTodo 라는 함수를 생성 -> 전역적으로 관리 필요
          => newTodo 에 새로운 값을 세팅
        - handleTodoAddition 이라는 함수를 생성 
          => 기존에 있떤 todos에 newTodos 값을 추가
          => **state를 누적시키는 방법!
          => const [txt, setTxt] = useState("하이");
              Q. 하이 => 바이 ==> setTxt("바이")
              Q. 하이 => 하이하이 ==> ([...txt, "하이"])
          => 기존에 있던 todos 에 newTodo를 더해보면?
          setTodos([...todos,{text: newTodo, completed: false}])
  */
  const [todos, setTodos] = useState([
    { text: "React 복습하기", completed: false },
    { text: "Spring 복습하기", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  /* newTodo에 값을 추가하는 함수 */
  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  /* 기존 todos 배열에 새로운 할일을 추가하는 함수*/
  const handleTodoAddition = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  /* 마친 일을 체크해주는 함수 */
  const handleTodoToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  /* 일을 삭제하는 함수 */
  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // 배열이름.splice(index, 1);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        newTodo,
        setNewTodo,
        handleNewTodo,
        handleTodoAddition,
        handleTodoToggle,
        handleTodoDelete,
      }}
    >
      <div>
        <h1>Todo List</h1>
        <Ex04List />
        <Ex04AddTodo />
      </div>
    </TodoContext.Provider>
  );
};

export default Ex04;
