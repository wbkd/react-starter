import { createStore, compose } from 'redux';
import Reducer from './reducer';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default createStore(
  Reducer,
  enhancers
);
