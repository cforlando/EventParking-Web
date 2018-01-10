import React, { Component } from 'react';
import Body from './components/Body';
import TitleBar from './components/TitleBar';

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Body />
      </div>
    );
  }
}

export default App;
