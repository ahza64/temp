import React, { Component } from 'react';
import logo from './PRSC110.png';
import './App.css';

class App extends Component {
  constructor() {
    super();


    this.state = {
      deferredPrompt: { type: "nothing" }
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      console.log("window listener triggered");
      event.preventDefault();
      console.log("event!!!", event);
      this.state = {
        deferredPrompt: event
      };
    });
  }


  componentDidMount() {

    console.log("component dddddid Mount window listener");
    window.addEventListener('beforeinstallprompt', (event) => {
      console.log("window listener triggered");
      event.preventDefault();
      console.log("event!!!", event);
      this.setState({
        deferredPrompt: event
      });
    });
  }

  handleScroll() {
    console.log("function triggered after component ddddid mount window listener");
  }

  clickHandler() {
    console.log("clickHandler");
    console.log(this.state.deferredPrompt.type);
    this.state.deferredPrompt.prompt();
  }

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
          <button
            onClick={this.clickHandler.bind(this)}
          >
            Install on Android and add to homescreen
          </button>
        </header>
      </div>
    );
  }
}

export default App;
