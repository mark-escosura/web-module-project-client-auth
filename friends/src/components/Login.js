import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const InitialState = {
    credentials: {
        username: '',
        password: ''
    }
}

export default function Login () {

    const [credentials, setCredentials] = useState(InitialState)
    const { push } = useHistory();

    const handleChange = e => {
        setCredentials({
          credentials: {
            ...credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    const login = e => {
        e.preventDefault();
        //1. axios call http://localhost:5000/api/login pass in username and password through the body
    
        axios.post('http://localhost:5000/api/login', credentials)
          .then(resp=> {
            //2. if the call is successful: save token in localStorage
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('role', resp.data.role);
            localStorage.setItem('username', resp.data.username);
            push('/protected');
          })
          .catch(err=> {
            //3. if the call is unsuccessful: console.log error
            console.log(err);
          })
      };

    return (
        <div className="login-page">
            <div className="login-form">
            <form onSubmit={login}>
                <label className="username">Username:
                <input
                type="text"
                name="username"
                value={credentials.credentials.username}
                onChange={handleChange}
                />
                </label>
                <label className="password">Password:
                <input
                type="password"
                name="password"
                value={credentials.credentials.password}
                onChange={handleChange}
                />
                </label>
                <button className="login-button">Log in</button>
            </form>
            </div>
        </div>
      );
}