import React, { PureComponent } from 'react';

import Header from '~/components/Header/';
import MainView from '~/modules/MainView/MainViewContainer';

import * as AppActions from './AppState';


import './App.styl';

class App extends PureComponent {

  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MainView {...this.props} />
      </div>
    );
  }
}

export default App;
