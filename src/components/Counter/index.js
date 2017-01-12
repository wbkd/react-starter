import React from 'react';

import * as AppActions from '../../modules/App/AppState';

const Counter = props => {
  return (
    <div className="counter">
      <div>{ props.counter }</div>
      <button onClick={evt => props.dispatch(AppActions.increment())}>Increment!</button>
    </div>
  )
};

export default Counter;
