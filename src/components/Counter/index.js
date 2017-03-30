import React from 'react';

import './counter.styl';

const Counter = props =>
  <div className="counter">
    <div>{ props.counter }</div>
    <button onClick={props.incrementHandler}>Increment!</button>
  </div>;

export default Counter;
