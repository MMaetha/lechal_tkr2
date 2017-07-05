import React, { Component } from 'react';
import '../assets/css/App.css';
import Navbar from './Navbar.js';
import Home from '../Home/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />

      </div>
    );
  }
}

export default App;