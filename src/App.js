import AccountObj from './components/object-create-functions/create-account-obj';
import Account from './components/account';
import MainFeed from './components/aux-components/main-feed';
import firebase from 'firebase';
import 'firebase/auth';
import './App.css';
import SignUp from './components/signup-in/sign-up';
import SignIn from './components/signup-in/sign-in';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTweet from './components/aux-components/create-tweet';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyA2-BK4-nNDpYMgViHswmWdjV9MBt_HgUI',
      authDomain: 'twitter-clone-63169.firebaseapp.com',
      projectId: 'twitter-clone-63169',
      storageBucket: 'twitter-clone-63169.appspot.com',
      messagingSenderId: '1021297037048',
      appId: '1:1021297037048:web:4654a0700c3ea8ccccb50d',
    });
  } else {
    firebase.app();
  }
  const done = () => {
    firebase.database().ref('tweets/').remove();
    firebase
      .database()
      .ref('users/n9oGpkmpztT0MI1k8xodt6XHFeB2/tweets/')
      .remove();
    console.log('delete done');
  };
  //done();
  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => console.log('logged out'))
      .catch((err) => console.log(err));
  };
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/home'>
            {' '}
            <Home />{' '}
          </Route>
          <Route path='/signin' exact>
            {' '}
            <SignIn />{' '}
          </Route>
          <Route path='/signup' exact>
            {' '}
            <SignUp />{' '}
          </Route>
          <Route path='/explore' exact>
            <MainFeed />
          </Route>
          <Route path='/createtweet' exact>
            <CreateTweet pic={new AccountObj('a', 'b', 'c', 'd').pic} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
