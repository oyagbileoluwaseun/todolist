import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: 0 };
    }
    default: {
      return state;
    }
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <section className="container">
      <h2>Using useReducer</h2>
      <button onClick={() => dispatch("increment")}>+</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <br />
      <button onClick={() => dispatch("reset")}>Reset</button>
    </section>
  );
};

export default CounterUseReducer;
