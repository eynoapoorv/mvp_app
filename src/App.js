import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import Compititation from './containers/Compititation';
import ConnectWithInstagram from './containers/ConnectWithInstagram';
import Winnerage from './containers/Winnerage';
import InstagramPosts from './containers/InstagramPost'
import Profile from './containers/Profile'
import LikesCommentsDisplay from './containers/LikesComment';

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
        <Route path='/likeComment' element={<LikesCommentsDisplay />} />


      </Routes>

    </>
  );
}

export default App;
