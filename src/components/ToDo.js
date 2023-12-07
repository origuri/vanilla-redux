import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

//                         5
const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text}
      {/* 6 */}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

//2
// dispatch 할 수 있는 connect의 두번째 아규먼트
function mapDispatchToProps(dispatch, ownProps) {
  console.log("dispatch-> ", dispatch);
  // text와 id 출력됨.
  console.log("ownProps-> ", ownProps);
  // store와 마찬가지로 props로 넘어감.
  // 3, 6
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

// 1
export default connect(null, mapDispatchToProps)(ToDo);
