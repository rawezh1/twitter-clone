import React from 'react';
import './sign-in.css';
import  firebase from 'firebase';
import 'firebase/auth';
import AccountObj from '../object-create-functions/create-account-obj';

function SignIn() {
  const initialUserData = {
    email: '',
    password: '',
  };
  const [userData, updateUserData] = React.useState(initialUserData);

  const handleChange = (e) => {
    updateUserData({
      ...userData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(userData.email,userData.password).then(()=> {
      console.log('loggin done')
    }).catch((err) => console.log(err))
  };
  return (
    <div className='reg-form'>
      <div className='form-cont'>
        <img alt='twitterIcon'></img>
        <h1>Sign  in</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            id='email'
            placeholder='Email'
            onChange={handleChange}
          ></input>
          <input
            type='password'
            id='password'
            placeholder='Password'
            onChange={handleChange}
          ></input>
          <input type='submit' value='Log In' onChange={handleChange}></input>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
