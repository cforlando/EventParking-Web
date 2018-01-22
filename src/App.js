import React, { Component } from 'react';
import Body from './components/Body';
import TitleBar from './components/TitleBar';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Downtown Orlando Event Parking</title>
            <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
        </Helmet>
        <TitleBar />
        <Body />
      </div>
    );
  }
}

export default App;
