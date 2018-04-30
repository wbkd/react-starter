import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as AppActions from './AppState';
import initStyle from './AppStyle';

initStyle();

const AppWrapper = styled.div`
  height: 100%;
  position: relative;
`;

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    return !this.props.isLoading && (
      <AppWrapper>Hello There!</AppWrapper>
    );
  }
}

export default connect(
  state => state.AppState
)(App);
