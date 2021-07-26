import firebase from 'firebase';
import 'firebase/auth';
import { useState } from 'react';
import { useEffect,useRef } from 'react/cjs/react.development';
import './profile.css';

function Profile() {
  const initialFormData = {
    name: '',
    id: '',
    birthday: '',
    bio: '',
    pic: '',
    banner: '',
  };
  const [user, updateUser] = useState(null);
  const [formData, updateFormData] = useState(initialFormData);
  const [userData, updateUserData] = useState(null);
  firebase.auth().onAuthStateChanged((userState) => {
    if (userState) {
      updateUser(userState);
    }
  });
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      firebase
      .database()
      .ref('users/' + user.uid)
      .once('value', (snapshot) => {
        updateUserData(snapshot.val());
      });
    }
  });
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  // TODO: redirect to home page after submit, also do this for sign up.
  const handleSubmit = (e) => {
    e.preventDefault();

    var data = { ...formData };
    if (data.id[0] !== '@') {
      data.id = '@' + data.id;
    }
    firebase
      .database()
      .ref('users/' + user.uid)
      .update(data);
  };
  const component = () => {
    return (
      <div className='profile'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={userData.name}
            onChange={handleChange}
          ></input>
          <label htmlFor='id'>At (@):</label>
          <input
            type='text'
            id='id'
            value={userData.id}
            onChange={handleChange}
          ></input>
          <label htmlFor='birthday'>Birthday:</label>
          <input
            type='date'
            id='birthday'
            value={userData.birthday}
            onChange={handleChange}
          ></input>
          <label htmlFor='bio'>Biography:</label>
          <input
            type='text'
            id='bio'
            value={userData.bio}
            onChange={handleChange}
          ></input>
          <label htmlFor='pic'>Profile picture:</label>
          <input type='file' id='pic' onChange={handleChange}></input>
          <label htmlFor='banner'>Cover image:</label>
          <input type='file' id='banner' onChange={handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  };

  const render = () => {
    if (user && userData) {
      return component();
    } else {
      return <h1>Loading...</h1>;
    }
  };
  return render();
}

export default Profile;
