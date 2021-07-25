import React from 'react';
import './sign-up.css';
import  firebase from 'firebase';
import 'firebase/auth'
import AccountObj from '../object-create-functions/create-account-obj';

function SignUp() {
  const initialUserData = {
    name: '',
    email: '',
    password: '',
    birthday: '',
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
    const account = new AccountObj(userData.name,userData.birthday)
    firebase.auth().createUserWithEmailAndPassword(
      userData.email,userData.password
    ).then((resp) => {
      firebase.database().ref('users/').child(resp.user.uid).set(account)
    }).then(() => {firebase.auth().signInWithEmailAndPassword(userData.email,userData.password).then(()=> {
        console.log('loggin done')
      }).catch((err) => console.log(err))})
  };
  return (
    <div className='reg-form'>
      <div className='form-cont'>
        <img alt='twitterIcon'></img>
        <h1>Create your Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            onChange={handleChange}
          ></input>
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
          <label for='birthday'>Birthday:</label>
          <input type='date' id='birthday' onChange={handleChange}></input>
          <input type='submit' value='Submit' onChange={handleChange}></input>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
