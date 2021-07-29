import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import './right-panel.css';
import {changePath, signOut} from '../helpers/helper-funcs'
function RightBar() {
  const [userR, setUserR] = useState(null);
  firebase.auth().onAuthStateChanged((userState) => {
    if (userState) {
      setUserR(userState);
    }
  });
  const userNotLogged = () => {
    return (
      <div className='right-bar'>
        <section className='right-items'>
          <h2>New to Twitter Clone?</h2>
          <p>Sign up now to get your own personalized timeline!</p>
          <button id='signup' onClick={changePath}>Sign up</button>
          <p>Or sign in to an exsiting account</p>
          <button id='signin' onClick={changePath}>Sign in</button>
        </section>
      </div>
    );
  };
  const userLogged = () => {
    return (
      <div className='right-bar'>
         <section className='right-items'>
             <h2>Want to sign out?</h2>
             <p>Click the button bellow to sign out!</p>
             <button onClick={signOut}>Sign out</button>
         </section>
      </div>
    );
  }
  const render = () => {
    if(userR) {
      return userLogged();
    }
    else {
      return userNotLogged();
    }
  }
  return render();
}
export default RightBar;
