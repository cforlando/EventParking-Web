import React, { Component } from 'react';
import Logo from './components/Logo';
import Body from './components/Body';
import TitleBar from './components/TitleBar';
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
