import React, { Component } from 'react';

import NavBar from './components/Navbar'
import MainContentDisplay from './components/MainContent/MainContentDisplay'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContentDisplay />
        <header className="App-header">
          <h1>notepad</h1>
        </header>
      </div>
    );
  }
}

export default App;
