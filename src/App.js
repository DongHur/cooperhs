// @flow
import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import Home from './page/Home'
import Contact from './page/Contact'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';
      

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <hr/>

          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}



{/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cooper Hair Salo Test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/}

export default App;
