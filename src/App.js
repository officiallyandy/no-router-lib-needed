import React, { Component } from 'react';
import logo from './logo.svg';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

import './App.css';

class App extends Component {
  render() {
    const route = window.location.hash.substr(1);
    let ComponentScreen;

    console.log('route: ', route);

    switch(route.toString()) {
      case '1': ComponentScreen = ScreenOne; break;
      case '2': ComponentScreen = ScreenTwo; break;
      default:  ComponentScreen = ScreenThree; break;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React rendering w/o React Routing library... back to basics.</h2>
        </div>
        <ul className="App-intro">
          <li> <a href="#1"> Screen One </a> </li>
          <li> <a href="#2"> Screen Two </a></li>
          <li> <a href="#3"> Screen Three </a></li>
        </ul>

        <ComponentScreen />
      </div>
    );
  }
}

export default App;
