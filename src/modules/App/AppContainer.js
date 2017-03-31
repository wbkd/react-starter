import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

class AppContainer extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={matchProps => <App {...this.props} {...matchProps} />} />
      </BrowserRouter>
    );
  }
}

export default connect(
  state => state.AppState
)(AppContainer);
