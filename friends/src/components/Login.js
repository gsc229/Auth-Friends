import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: 'steve',
    password: '123'
  });

  console.log(
    'Login.js credentials: ',
    credentials.username,
    credentials.password,
    credentials
  );

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
        console.log('Login.js aWA .post res', res);
      })
      .catch(err => {
        alert(err.response.data.error);
        console.log('Login.js post err: ', err.response);
      });
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input type='text' name='username' onChange={handleChange} />
        <input type='password' name='password' onChange={handleChange} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default Login;
