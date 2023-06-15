import React from "react";
import logo from "./logo.svg";
import "./App.css";
type CounterProps = {
  title: string;
  initValue: number;
};
function Counter(props: CounterProps) {
  console.log("props", props);
  return (
    <div>
      <h1>{props.title}</h1>
      <button>+</button>
      <button>-</button> {props.initValue}
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
