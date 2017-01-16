import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';
import App from './App';

const AppContainer = props => (
  <BrowserRouter>
    <Match exactly pattern="/" render={(matchProps) => <App {...props} {...matchProps} />} />
  </BrowserRouter>
);

export default connect(
  state => state.AppState
)(AppContainer);
