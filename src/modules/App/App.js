import React from 'react';

import Counter from '../../components/Counter';

import { isOldBrowser } from '../../helper/utils';

import 'normalize.css';
import './App.styl';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Counter
          dispatch={this.props.dispatch}
          counter={this.props.counter}
        />

        {isOldBrowser ? 'Shame!!! Update your Browser!!!' : 'Everything UpToDate'}
      </div>
    );
  }
}

 export default App;
