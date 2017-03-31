import React, { PureComponent } from 'react';

import './counter.styl';

class Counter extends PureComponent {

  render() {
    return (
      <div className="counter">
        <div>{this.props.counter}</div>
        <button onClick={this.props.incrementHandler}>Increment!</button>
      </div>
    );
  }
}

export default Counter;
