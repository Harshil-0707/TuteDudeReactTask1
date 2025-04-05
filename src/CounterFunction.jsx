import { useState } from "react";
import "./App.css";

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h2>Counter (Function Component)</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default CounterFunction;
