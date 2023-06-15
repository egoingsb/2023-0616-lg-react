import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import style from "./App.module.css";

type CounterProps = {
  title: string;
  initValue: number;
};
function Counter({ title, initValue }: CounterProps) {
  const [count, setCount] = useState(initValue);
  function up() {
    // setCount(count + 1);
    setCount((oldCount) => oldCount + 1);
  }
  const css = {
    fontSize: 50,
    color: "red",
  };
  return (
    <div className="layout">
      <h1 style={css}>{title}</h1>
      <button className={style.btn} onClick={up}>
        +
      </button>{" "}
      {count}
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter title="손님 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
