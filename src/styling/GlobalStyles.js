import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${styledNormalize}

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    width: 100%;
    line-height: 1.4;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
