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
      return [...state, { text: action.text }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
const store = legacy_createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // text에 input.value의 값을 넣는다.
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
