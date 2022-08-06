import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from './counterSlice';
const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);
  return (
    <main>
      <h2>Counter</h2>
      <div className="counter">
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => dispatch(increment())}
        >
          Increment{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
        <p className="value">{count}</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          Decrement{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </button>
      </div>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
      <h3>Increment by amount</h3>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        type="button"
        class="btn btn-success"
      >
        Add Amount
      </button>
      <h3>Decrement by amount</h3>
      <input
        value={decrementAmount}
        onChange={(e) => setDecrementAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch(decrementByAmount(Number(decrementAmount)))}
        type="button"
        class="btn btn-danger"
      >
        Subtract Amount
      </button>
      <hr />
    </main>
  );
};

export default Counter;
