import React from "react";
import "./App.css";

function CounterFunction({ count, increment, decrement }) {
  return (
    <div className="card">
      <h2>Counter (Function Component)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterFunction;
