import React, { useState } from "react";
import CounterFunction from "./CounterFunction";
import CounterClass from "./CounterClass";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <CounterFunction
        count={count}
        increment={increment}
        decrement={decrement}
      />
      <CounterClass count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
