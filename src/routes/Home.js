import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("작동", text);
    setText("");
  };

  return (
    <>
      <h1>todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul></ul>
    </>
  );
}
