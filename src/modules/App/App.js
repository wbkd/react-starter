import React, { PureComponent } from 'react';

import * as AppActions from './AppState';

import './App.styl';

class App extends PureComponent {

  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    return !this.props.isLoading && (<div className="app" />);
  }
}

export default App;
