import React, { Component } from 'react';
import Logo from './components/Logo';
import Body from './components/Body';
import './App.css';

const styles = {
  appStyles: {

  }
}

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
