import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './redux/store';
import App from './modules/App/AppContainer';

ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
