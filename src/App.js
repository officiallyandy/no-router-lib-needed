import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
