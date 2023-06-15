import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
type CounterProps = {
  title: string;
  initValue: number;
};
function Counter({ title, initValue }: CounterProps) {
  const [count, setCount] = useState(initValue);
  function up() {
    console.log("up");
    // count = count + 1;
    setCount(count + 1);
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
