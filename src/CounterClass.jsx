import React, { Component } from "react";
import "./App.css";

class CounterClass extends Component {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div className="card">
        <h2>Counter (Class Component)</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default CounterClass;
