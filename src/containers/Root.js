import React from 'react';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import DefaultTheme from '~/themes/Default';

import App from '~/components/App';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.body}px;
  }
`;

const Root = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <>
        <App />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default Root;
