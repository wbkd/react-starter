import { connect } from 'react-redux';
import MainView from './MainView';

export default connect(
  state => state.MainViewState
)(MainView);
