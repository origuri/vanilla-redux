import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "add";
const MINUS = "minus";

// reducer는 내 데이터를 수정하는 함수
// count = 0은 count의 초기값이 0이라는 의미
const countModifyReducer = (count = 0, aciton) => {
  switch (aciton.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store를 사용하기 위해서는 reducer라는 함수가 필요함.
const countStore = legacy_createStore(countModifyReducer);

const onChange = () => {
  number.innerText = countStore.getState();
};
// action을 감지하고 action이 될 때 마다 안에 함수가 실행됨.
countStore.subscribe(onChange);

const handleAdd = () => {
  // dispatch 안에는 오브젝트 타입이 들어가야 함, 반드시 key는 type, value는 string 타입
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
