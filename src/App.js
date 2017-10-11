import React, { Component } from 'react';
import logo from './media/icons/logo-pd.svg';
import './App.css';

class App extends Component {
  state = {
    teste: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
