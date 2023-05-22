import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import Compititation from './containers/Compititation';
import ConnectWithInstagram from './containers/ConnectWithInstagram';
import Winnerage from './components/Winnerage';
import InstagramPosts from './components/InstagramPost'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/compitation' element={<Compititation />} />
        <Route path='/connectWitInstagram' element={<ConnectWithInstagram />} />
        <Route path='/winnerage' element={<Winnerage />} />
        <Route path='/instagramFeed' element={<InstagramPosts />} />
        <Route path='/profile' element={<Profile />} />


      </Routes>

    </>
  );
}

export default App;
