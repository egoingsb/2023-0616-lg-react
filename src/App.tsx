import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
type CounterProps = {
  title: string;
  initValue: number;
};
function Counter({ title, initValue }: CounterProps) {
  const [count, setCount] = useState(initValue);
  console.log("Counter start", count);
  function up() {
    // setCount(count + 1);
    setCount((oldCount) => oldCount + 1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <button>-</button> {count}
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter title="손님 카운터" initValue={10}></Counter>
      <Counter title="불면증 카운터" initValue={20}></Counter>
    </div>
  );
}

export default App;
