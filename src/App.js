// @flow
import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Home from './page/Home';
import Contact from './page/Contact';
import Book from './page/Book';
import Gallery from './page/Gallery';
import Services from './page/Services';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
      

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/*Navigation Bar*/}
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/'>Cooper Hair Salon</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem>
                  <Link to='/'>Home</Link>
                </NavItem>
                <NavItem>
                  <Link to='/contact'>Contact</Link>
                </NavItem>
                <NavItem>
                  <Link to='/book'>Book</Link>
                </NavItem>
                <NavItem>
                  <Link to='/gallery'>Gallery</Link>
                </NavItem>
                <NavItem>
                  <Link to='/services'>Services</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          {/*Routers*/}
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/book' component={Book} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/services' component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
