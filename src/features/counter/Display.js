//Display.js
import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h3>Display</h3>
      <h1>{count}</h1>
    </div>
  );
};

export default Display;
