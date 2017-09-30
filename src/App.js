import React, { Component } from 'react';
import 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar>
          <Logo></Logo>
          <Title></Title>
          <Body>
            <CalendarContainer></CalendarContainer>
          </Body>
        </TitleBar>
      </div>
    );
  }
}

export default App;
