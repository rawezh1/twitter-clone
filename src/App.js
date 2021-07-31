import MainFeed from './components/aux-components/main-feed';
import firebase from 'firebase';
import 'firebase/auth';
import './App.css';
import SignUp from './components/signup-in/sign-up';
import SignIn from './components/signup-in/sign-in';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Edit from './components/profile-edit';
import Welcome from './components/welcome';
import Profile from './profile';
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
  
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Welcome />
          </Route>
          <Route path='/edit' exact>
            <Edit />
          </Route>
          <Route path='/home' exact>
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
          <Route path='/profile/:atId' exact>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
