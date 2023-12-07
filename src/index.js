import { createElement } from "react";
import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // 스프레드 연산자로 복사해서 리턴해줘야 함.
      // 기존의 state에 action.text의 값을 추가하겠다는 의미
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  // 배열을 가져옴
  const toDos = store.getState();
  // ul 안에 있는 html을 매번 비워줌으로써 배열이 중복되어 paint되는 것을 막음
  // 이해 안가면 주석해보길
  ul.innerHTML = "";
  // 배열을 풀어줌
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text: text, id: Date.now() });
};

const onSubmit = (e) => {
  e.preventDefault();
  if (input.value === "") return;
  const toDo = input.value;
  input.value = "";
  // text에 input.value의 값을 넣는다.
  addTodo(toDo);
};

form.addEventListener("submit", onSubmit);
