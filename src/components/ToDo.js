import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

// dispatch 할 수 있는 connect의 두번째 아규먼트
function mapDispatchToProps(dispatch, ownProps) {
  console.log("dispatch-> ", dispatch);
  // text와 id 출력됨.
  console.log("ownProps-> ", ownProps);
  // store와 마찬가지로 props로 넘어감.
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
