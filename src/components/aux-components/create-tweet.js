import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import './create-tweet.css';
import TweetObj from '../object-create-functions/create-tweet-obj';
import { convertImgto64 } from '../helpers/helper-funcs';
function CreateTweet(props) {
  const [tweetData, updateTweetData] = useState({ txt: '', img: '' });
  const [user, updateUser] = useState(null);
  const [picture,setPicture] =useState(null)
  firebase.database().ref('users/'+props.uid).once('value',(snapshot) => {
    setPicture(snapshot.val().profilePic);
  })
  const handleChange = async (e) => {
    if (e.target.id === 'img') {
      updateTweetData({
        ...tweetData,
        [e.target.id]: await convertImgto64(e.target.files[0]),
      });
    } else {
      updateTweetData({
        ...tweetData,
        [e.target.id]: e.target.value.trim(),
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase
      .database()
      .ref('users/' + props.uid)
      .once('value', async (snapshot) => {
        const user = snapshot.val();
        const tweet = await new TweetObj(
          user.id,
          user.name,
          user.pic,
          tweetData.txt,
          tweetData.img,
          new Date()
        );
        const tweetRefKey = await firebase.database().ref('tweets/').push().key;
        await firebase
          .database()
          .ref('tweets/' + tweetRefKey)
          .update(tweet);
        await firebase
          .database()
          .ref('users/' + props.uid + '/tweets/' + tweetRefKey)
          .update(tweet);
      });
  };
  const tweetForm = () => {
    if (user && picture) {
      return (
        <div className='tweet-form'>
          <div className='left-side'>
            <img
              className='tweet-profile-pic'
              alt='profile'
              src={picture}
            ></img>
          </div>
          <div className='right-side'>
            <form onSubmit={handleSubmit}>
              <textarea
                type='text'
                id='txt'
                placeholder='Type tweet...'
                onChange={handleChange}
              ></textarea>
              <input
                type='file'
                id='img'
                accept='.jpg, .jpeg, .png'
                placeholder='Click to upload images'
                onChange={handleChange}
              ></input>
              <input
                className='submit-tweet'
                type='submit'
                value='Tweet'
              ></input>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    }
  };
  firebase.auth().onAuthStateChanged((user) => {
    return user ? updateUser(user) : null;
  });
  return tweetForm();
}
export default CreateTweet;
