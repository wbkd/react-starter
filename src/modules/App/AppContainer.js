
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';
import App from './App';


class AppContainer extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => ({  ...state.AppState })
)(AppContainer);
