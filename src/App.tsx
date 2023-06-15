import React from "react";
import logo from "./logo.svg";
import "./App.css";
function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <button>+</button> 0
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App;
