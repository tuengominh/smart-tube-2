import React, { Component } from 'react';
import logo from './Neopac_Logo.png';
import './App.css';
import Counter from "./Counter";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <div className="App">
                <p>It's time!</p>
            <div>
                <Counter/>
            </div>
            </div>

        </header>
      </div>
    );
  }
}

export default App;
