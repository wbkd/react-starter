import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';

import Store from '~/state/Store';
import GlobalStyle from '~/style/GlobalStyle';
import defaultTheme from '~/style/themes/default';
import App from '~/containers/App';

ReactDOM.render(
  <StoreProvider store={Store}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
);
