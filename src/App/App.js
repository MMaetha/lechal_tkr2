import React, { Component } from 'react';
import '../assets/css/App.css';
import Navbar from './Navbar.js';
import { Route } from 'react-router';

import Home from '../Home/home'
import about from '../About/about'
import contact from '../Contact/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
      </div>
    );
  }
}

export default App;
