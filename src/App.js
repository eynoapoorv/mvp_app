import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import Compititation from './components/Compititation';
import ConnectWithInstagram from './components/ConnectWithInstagram';
import Winnerage from './components/Winnerage';
import InstagramPosts from './components/InstagramPost'
import Profile from './components/Profile'
import Feed from './Auth/Feed';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/compitation' element={<Compititation />} />
        <Route path='/connectWithInstagram' element={<ConnectWithInstagram />} />
        <Route path='/winnerage' element={<Winnerage />} />
        <Route path='/instagramPost' element={<InstagramPosts />} />
        <Route path='/profile' element={<Profile />} />


      </Routes>

    </>
  );
}

export default App;
