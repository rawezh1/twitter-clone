import firebase from 'firebase';
import 'firebase/auth';
import { useState } from 'react';
import { useEffect, useRef } from 'react/cjs/react.development';
import './profile-edit.css';
import { convertImgto64, removeEmpty } from './helpers/helper-funcs';

function Edit() {
  const [user, updateUser] = useState(null);
  const [formData, updateFormData] = useState(null);
  firebase.auth().onAuthStateChanged((userState) => {
    if (userState) {
      updateUser(userState);
    }
  });
  const isInitialMount = useRef(true);
  const userLoad = useRef(false);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (userLoad.current) {
        return null;
      }
      userLoad.current = true;
      firebase
        .database()
        .ref('users/' + user.uid)
        .once('value', (snapshot) => {
          const data = {
            name: snapshot.val().name,
            id: snapshot.val().id,
            birthday: snapshot.val().birthday,
            bio: snapshot.val().bio,
            pic: '',
            banner: '',
          };
          updateFormData(data);
        });
    }
  });

  const handleChange = (e) => {
    const newValue = {
      ...formData,
      [e.target.id]: e.target.value,
    };
    updateFormData(newValue);
  };
  // TODO: redirect to home page after submit, also do this for sign up.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    var data = { ...formData };
    data.id = data.id.trim().toLowerCase();
    removeEmpty(data);
    if (data.id) {
      if (data.id[0] !== '@') {
        data.id = '@' + data.id;
      }
    }
    if (data.pic) {
      data.pic = convertImgto64(data.pic);
    }
    if (data.banner) {
      data.banner = convertImgto64(data.banner);
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
            value={formData.name}
            onChange={handleChange}
          ></input>
          <label htmlFor='id'>At (@):</label>
          <input
            type='text'
            id='id'
            value={formData.id}
            onChange={handleChange}
          ></input>
          <label htmlFor='birthday'>Birthday:</label>
          <input
            type='date'
            id='birthday'
            value={formData.birthday}
            onChange={handleChange}
          ></input>
          <label htmlFor='bio'>Biography:</label>
          <input
            type='text'
            id='bio'
            value={formData.bio}
            onChange={handleChange}
          ></input>
          <label htmlFor='pic'>Profile picture (only jpg):</label>
          <input type='file' id='pic' onChange={handleChange}></input>
          <label htmlFor='banner'>Cover image (only jpg):</label>
          <input type='file' id='banner' onChange={handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  };

  const render = () => {
    if (user && formData) {
      return component();
    } else {
      return <h1>Loading...</h1>;
    }
  };
  return render();
}

export default Edit;
