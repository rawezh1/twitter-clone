import AccountObj from './components/create-account-obj';
import Account from './components/account';
import TweetObj from './components/create-tweet-obj';
import MainFeed from './components/main-feed';
import  firebase from 'firebase';
import './App.css';
import SignUp from './components/sign-up';
import { useState } from 'react';

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

  //<MainFeed accounts = {listOfAccount}/>
  return (
    
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
