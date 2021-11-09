import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';


export default function App(props) {
   
  return (
    <Router>
      <div className='App'>
        <nav>
          <h1 className='homepage-header'>WeAreFobs </h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            
            <Link to="/login">Login</Link>
          </div>
        </nav>

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        
      </div>
    </Router>

  )
}
