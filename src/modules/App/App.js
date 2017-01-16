import React, { Component } from 'react';

import * as AppActions from './AppState';

import MainView from '../MainView/MainViewContainer';

import 'normalize.css';
import './App.styl';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    return (
      <div className="app">
        <MainView {...this.props}/>
      </div>
    );
  }
}

 export default App;
