import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Nav from '../NavBar/Nav';
import Nav2 from '../NavBar/Nav2';
import useToken  from './useToken';
import Landing from '../LandingPage/Landing';
import Login from '../Login/Login';

function App() {

  const { token , setToken } = useToken();
  
  if(!token){
    return (
      <div className='wrapper'> 
      <Nav />
        <div>
          <Routes>    
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>
        </div>
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <Nav2 />
      <div className="containerMain">
        <div className='containerTop'>   
          <h1>Authorized Zone</h1>
        </div>
        <div className='containerMid'>
          <Routes>
            <Route path="/landing" element={<Landing />} />  
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </div>
        <div className='containerLow'>
          <h4>Some Stuff</h4>
        </div>
      </div>
    </div>
  );
}

export default App;

//<Login setToken={setToken} />