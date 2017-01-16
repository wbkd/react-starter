import React from 'react';

import './Counter.styl';

const Counter = props => {
  return (
    <div className="counter">
      <div>{ props.counter }</div>
      <button onClick={ props.incrementHandler }>Increment!</button>
    </div>
  )
};

export default Counter;
