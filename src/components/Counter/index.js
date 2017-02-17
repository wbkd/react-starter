import React from 'react';

import './Counter.scss';

const Counter = props => {
  return (
    <div className="counter">
      <div>{ props.counter }</div>
      <button onClick={ props.incrementHandler }>Increment!</button>
    </div>
  )
};

export default Counter;
