import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';

import { Store } from '~/Store';
import App from '~/modules/App';
import GlobalStyles from '~/styling/GlobalStyles';

ReactDOM.render(
  <Provider store={Store}>
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root')
);
