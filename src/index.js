import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';

import { Store } from './Store';
import App from './modules/App';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
