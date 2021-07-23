import AccountObj from './components/object-create-functions/create-account-obj';
import Account from './components/account';
import TweetObj from './components/object-create-functions/create-tweet-obj';
import MainFeed from './components/main-feed';
import  firebase from 'firebase';
import './App.css';
import SignUp from './components/signup-in/sign-up';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTweet from './components/create-tweet';

function App() {
  const [users,setUsers] = useState([])
  function getUsers() {
  }
  if (!firebase.apps.length) {
    firebase.initializeApp({apiKey: 'AIzaSyA2-BK4-nNDpYMgViHswmWdjV9MBt_HgUI',
    authDomain: 'twitter-clone-63169.firebaseapp.com',
    projectId: 'twitter-clone-63169',
    storageBucket: 'twitter-clone-63169.appspot.com',
    messagingSenderId: '1021297037048',
    appId: '1:1021297037048:web:4654a0700c3ea8ccccb50d',});
 }else {
    firebase.app();
 }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/signup'> <SignUp/> </Route>
          <Route path='/explore'><MainFeed/></Route>
          <Route path='/createtweet'><CreateTweet pic={new AccountObj('a','b','c','d').profilePic}/></Route>
        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
