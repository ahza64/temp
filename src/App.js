import React, { Component } from 'react';
import logo from './PRSC110.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Mom. Hi Dad. Just spinnin' in ma boat.
          </p>
          <a
            className="App-link"
            href="http://www.justin.gent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justin's Portfolio
          </a>
        </header>
      </div>
    );
  }
}

export default App;
