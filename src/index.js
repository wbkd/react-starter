import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';

import Store from '~/state/Store';
import Root from '~/containers/Root';

ReactDOM.render(
  <StoreProvider store={Store}>
    <Root />
  </StoreProvider>,
  document.getElementById('root')
);
