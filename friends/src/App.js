import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='top-container'>
        <h1>Here's APP</h1>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
