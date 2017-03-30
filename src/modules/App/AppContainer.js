import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const AppContainer = props => (
  <BrowserRouter>
    <Route exact path="/" render={matchProps => <App {...props} {...matchProps} />} />
  </BrowserRouter>
);

export default connect(
  state => state.AppState
)(AppContainer);
