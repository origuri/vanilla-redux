import { legacy_createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

const addToDo = (text) => {
  return { type: ADD, text: text, id: Date.now() };
};

const deleteToDo = (id) => {
  return { type: DELETE, id: id };
};

const reducer = (state = ["현재 state"], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((todo) => action.id !== todo.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
