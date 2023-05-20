import React from 'react';

import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import Compititation from './components/Compititation';
import ConnectWithInstagram from './components/ConnectWithInstagram';
import Winnerage from './components/Winnerage';
import InstagramPosts from './components/InstagramPost'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Router>
				<Switch>
          <PublicRoute path="/" restricted={false} component={HomePage} exact />
          <PublicRoute path="/compitation" restricted={false} component={Compititation} exact />
          <PublicRoute path="/connectWitInstagram" restricted={false} component={ConnectWithInstagram} exact />
          <PublicRoute path="/winnerage" restricted={false} component={Winnerage} exact />
          <PublicRoute path="/instagramFeed" restricted={false} component={InstagramPosts} exact />
          <PublicRoute path="/profile" restricted={false} component={Profile} exact />
        </Switch>
			</Router>

    </>
  );
}

export default App;
