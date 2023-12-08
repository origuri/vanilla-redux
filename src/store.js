import { configureStore, createSlice } from "@reduxjs/toolkit";

/* const ADD = "add";
const DELETE = "delete";

const addToDo = (text) => {
  return { type: ADD, text: text, id: Date.now() };
};

const deleteToDo = (id) => {
  return { type: DELETE, id: id };
}; */

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type: // add
    return [{ text: action.payload, id: action.id }, ...state];
    case deleteToDo.type: // delete
    return state.filter((todo) => action.payload !== todo.id);
    default:
      return state;
    }
  };
  */

/* // createAction안에 있는 것 타입
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// 함수를 호출하면 type: add와 payload가 들어있음
console.log(addToDo());

// createReducer의 첫번째 인자는 state의 초기값
// 두번째 인자는 switch 코드를 대체 하는 코드
// 리턴을 할 때에는 새로운 state여야 함
const reducer = createReducer([], (bulider) => {
  bulider
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      // filter는 새로운 state이므로
      return state.filter((todo) => action.payload !== todo.id);
    });
}); 

export const actionCreators = {
  addToDo,
  deleteToDo,
};


*/

const toDo = createSlice({
  name: "toDosReducer",
  initialState: [], // state
  reducers: {
    add: (state, action) => {
      // redux toolkit에서는 추가할 때 얕은 복사 안해도 됨
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      // filter는 새로운 state이므로
      return state.filter((todo) => action.payload !== todo.id);
    },
  },
});

const store = configureStore({ reducer: toDo.reducer });

export const { add, remove } = toDo.actions;

export default store;
