import React, { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";

type Props = {};
function App(props: Props) {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
