import { combineReducers } from 'redux';

import AppState from '../modules/App/AppState';
import MainViewState from '../modules/MainView/MainViewState';

export default combineReducers({
  AppState,
  MainViewState
});
