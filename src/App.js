import React, { Component } from 'react';
import logo from './Neopac_Logo.png';
import './App.css';
import Counter from "./Counter";
import RealTime from "./RealTime";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <div className="App">
                <h4>It's time to take your medicine!</h4>
            <div>
                <h3 class="important"><Counter/></h3>
            </div>
            </div>

            <div><button className="button">Next</button></div>

        </header>
      </div>
    );
  }
}

export default App;
