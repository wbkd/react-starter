import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled from 'styled-components';

import { actions } from '~/Store';

const AppWrapper = styled.div`
  height: 100%;
  position: relative;
`;

class App extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return 'Loading...';
    }

    return (
      <AppWrapper>
        <h1>react-starter</h1>
        <p>Lightweight React/Redux Starterkit - Webpack 4, Babel, Linting, Styled Components</p>
      </AppWrapper>
    );
  }
}

export default connect(
  state => state,
  actions
)(App);
