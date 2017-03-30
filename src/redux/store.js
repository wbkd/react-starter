import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './reducer';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(
  Reducer,
  enhancers
);
