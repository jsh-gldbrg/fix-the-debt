import React, { Component } from 'react';
import { Menu } from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Is this government spending worth it?</h1>
        <h2>Decide for yourself by choosing the number of taxpayers in your household below to see the share of spending for each category.</h2>
        </header>
        <Menu/>
        <hr></hr>
      </div>
    );
  }
}

export default App;
