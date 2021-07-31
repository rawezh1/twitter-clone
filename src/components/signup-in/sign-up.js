import React from 'react';
import './sign-up.css';
import firebase from 'firebase';
import 'firebase/auth';
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = await new AccountObj(userData.name, userData.birthday, new Date());
    await firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((resp) => {
        firebase.database().ref('users/').child(resp.user.uid).set(account);
      });
    await firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password);
      window.location.pathname = 'home'
  };
  return (
    <div className='reg-form'>
      <div className='form-cont'>
        <svg className='icon' viewBox='-0.998 22.284 485 306'>
          <g>
            <path d='M 379.828 76.1 c -4.941 -1.836 -21.371 -8.558 -25.326 -17.974 l -0.064 -0.155 c -4.359 -10.379 -14.567 -34.687 -43.029 -34.687 c -36.405 0 -46.89 33.69 -48.622 40.444 c -2.951 11.509 -9.09 35.45 -63.013 73.094 c -15.581 10.877 -45.151 36.775 -71.912 62.996 c -17.988 17.625 -47.82 48.266 -45.513 55.599 c 0.227 0.721 0.943 1.884 3.196 1.884 c 0 0 0.001 0 0.002 0 c 2.175 0 5.568 -1.054 10.301 -3.298 c -2.293 2.083 -5.346 4.843 -8.622 7.755 c -27.496 24.443 -56.861 51.259 -57.224 60.084 c -0.04 0.966 0.231 1.761 0.805 2.362 c 1.998 2.093 4.158 3.11 6.604 3.11 c 2.691 0 5.39 -1.224 8.247 -2.52 c 3.379 -1.532 6.873 -3.116 10.961 -3.116 c 0.935 0 1.877 0.086 2.802 0.256 l 0.273 0.024 c 2.225 -0.003 12.738 -6.288 38.008 -21.72 c 23.959 -14.631 56.773 -34.669 62.11 -34.669 c 0.105 0 0.154 0.011 0.157 0.011 v 0 c 3.635 1.474 31.906 8.347 64.065 8.347 c 1.638 0 3.252 -0.021 4.849 -0.057 c 7.167 6.51 16.305 14.621 19.952 17.052 c 1.738 1.159 3.231 2.385 4.674 3.571 c 1.219 1.001 2.467 2.027 3.85 2.997 c -1.636 0.563 -3.403 1.215 -5.277 1.949 c -2.045 0.801 -3.058 3.117 -2.257 5.164 c 0.603 1.537 2.06 2.531 3.71 2.532 h 0 c 0.286 0 0.354 0 8.291 -2.725 c 2.853 -0.979 6.057 -2.08 6.854 -2.322 c 1.727 0.3 3.55 0.452 5.424 0.452 c 7.145 0 13.108 -2.154 14.578 -2.731 c 1.453 0.431 7.418 2.27 11.152 4.415 c 0.811 0.466 1.518 0.305 1.872 -0.26 c 0.281 -0.449 0.241 -1.053 -0.12 -1.795 l -2.62 -3.673 c 0.659 0.039 1.322 0.066 1.996 0.066 c 7.145 0 13.108 -2.154 14.578 -2.731 c 1.453 0.431 7.419 2.27 11.152 4.414 c 0.329 0.189 0.611 0.277 0.888 0.277 c 0.406 0 0.774 -0.201 0.984 -0.536 c 0.281 -0.449 0.241 -1.054 -0.12 -1.796 l -2.854 -4.002 c -0.086 -0.116 -2.169 -2.858 -6.46 -4.242 c -1.5 -0.484 -3.299 -0.74 -5.203 -0.74 c -2.845 0 -4.646 0.404 -6.235 0.76 c -1.25 0.28 -2.33 0.522 -3.727 0.522 h 0 c -1.714 0 -3.758 -0.374 -6.433 -1.176 c -5.782 -1.734 -18.794 -13.616 -27.29 -21.817 c 6.93 -2.314 13.09 -5.235 18.419 -8.786 c 38.847 -25.887 40.663 -62.75 41.749 -84.775 c 0.212 -4.31 0.396 -8.033 0.841 -10.836 c 1.131 -7.126 2.219 -16.045 3.272 -24.669 c 1.447 -11.856 2.813 -23.054 4.1 -28.078 c 3.865 -15.094 17.11 -25.756 39.366 -31.691 c 2.127 -0.567 2.569 -0.685 2.609 -1.508 C 380.621 76.702 380.345 76.292 379.828 76.1 z M 256.975 270.993 c 6.95 6.294 15.279 13.648 18.72 15.942 c 1.727 1.151 3.212 2.387 4.647 3.583 c 1.183 0.984 2.345 1.952 3.611 2.859 c -1.213 0.151 -2.205 0.37 -3.119 0.575 c -1.251 0.281 -2.332 0.524 -3.731 0.524 c -1.712 0 -3.754 -0.374 -6.426 -1.175 c -5.471 -1.641 -17.416 -12.364 -25.882 -20.459 C 249.036 272.374 253.105 271.764 256.975 270.993 z'></path>
          </g>
        </svg>
        <h1>Create your account</h1>
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
          <label htmlFor='birthday'>Birthday:</label>
          <input type='date' id='birthday' onChange={handleChange}></input>
          <input
            id='submit'
            type='submit'
            value='Submit'
            onChange={handleChange}
          ></input>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
