import React from 'react';

import Counter from '../../components/Counter';

import './App.styl';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Counter
          dispatch={this.props.dispatch}
          counter={this.props.counter}
        />
      </div>
    );
  }
}

 export default App;
