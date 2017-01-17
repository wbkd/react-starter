import React, { Component } from 'react';

import * as AppActions from './AppState';

import Header from '../../components/Header/';
import MainView from '../MainView/MainViewContainer';

import './App.scss';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MainView {...this.props}/>
      </div>
    );
  }
}

 export default App;
