import { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import './App.styl';

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    return !this.props.isLoading && 'Hello There!';
  }
}

export default connect(
  state => state.AppState
)(App);
