import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import useToken  from './useToken';

function App() {

  const { token , setToken } = useToken();
  
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
       
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
