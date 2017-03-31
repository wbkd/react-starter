import React, { PureComponent } from 'react';

import Counter from '../../components/Counter';
import { increment } from './MainViewState';

class MainView extends PureComponent {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.props.dispatch(increment());
  }

  render() {
    return (
      <div className="main-view">
        <Counter counter={this.props.counter} incrementHandler={this.handleIncrement} />
      </div>
    );
  }
}

export default MainView;
