import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import Store from './redux/store';
import App from './modules/App';

import './styles/main.styl';

if (module.hot) module.hot.accept();

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
