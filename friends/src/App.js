import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';


export default function App() {
  
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <Router>
      <div className='App'>
        <nav>
          <h1 className='homepage-header'>WeAreFobs </h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            
            <Link to="/login">Login</Link>

            {(role === 'admin' && isLoggedIn) && <Link to="/logout">Logout</Link> }
            {(isLoggedIn === true) && <Link to="/friends">Friends</Link> }
          </div>
        </nav>

        <Switch>
          <Route path='/login' component={Login} />
          <Route  path="/" component={Homepage} />
        </Switch>

      </div>
    </Router>

  )
}
