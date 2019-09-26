import React, { useEffect } from 'react';
import { connect } from 'unistore/react';
import styled from 'styled-components';

import { media } from '~/styles/Utils';
import Actions from '~/state/Actions';

const AppWrapper = styled.div`
  position: relative;

  ${media.m`
    background: red;
  `}

  ${media.l`
    background: blue;
  `}
`;

const App = ({ loadData, isLoading }) => {
  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <AppWrapper>
      <h1>react-starter</h1>
      <p>Lightweight React/Redux Starterkit - Webpack 4, Babel, Linting, Styled Components</p>
    </AppWrapper>
  );
};

export default connect(
  state => state,
  Actions
)(App);
