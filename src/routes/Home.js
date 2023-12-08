import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("작동", text);
    setText("");
    addToDo(text);
  };

  return (
    <>
      <h1>todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {toDos?.map((todo) => (
          <ToDo key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </ul>
    </>
  );
}

// state를 가져올 수 있는 connect의 첫번째 아규먼트
function mapStateToProps(state) {
  // store에 있는 state 값이 출력 됨(현재 state)
  console.log("state -> ", state);
  return { toDos: state };
}

// dispatch 할 수 있는 connect의 두번째 아규먼트
function mapDispatchToProps(dispatch) {
  console.log("dispatch-> ", dispatch);
  // store와 마찬가지로 props로 넘어감.
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

// dispatch만 사용하고 싶으면 (null, mapDispatchToProps) 사용
export default connect(mapStateToProps, mapDispatchToProps)(Home);
