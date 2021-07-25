import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import './create-tweet.css';
import TweetObj from './object-create-functions/create-tweet-obj';

function CreateTweet(props) {
  const [tweetData, updateTweetData] = useState({ txt: '', img: '' });
  const [user, updateUser] = useState(null);
  const handleChange = (e) => {
    updateTweetData({
      ...tweetData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uId = await firebase.auth().currentUser.uid;
    await firebase
      .database()
      .ref('users/' + uId)
      .once('value', async (snapshot) => {
        const user = snapshot.val();
        const tweet = await new TweetObj(
          user.id,
          user.name,
          user.profilePic,
          tweetData.txt,
          tweetData.img
        );
        const tweetRefKey = await firebase.database().ref('tweets/').push().key;
        await firebase.database().ref('tweets/' + tweetRefKey).update(tweet);
        await firebase.database().ref('users/'+uId+'/tweets/'+tweetRefKey).update(tweet)
      });
  };
  const tweetForm = (pic) => {
    if (user) {
      return (
        <div className='tweet-form'>
          <div className='left-side'>
            <img
              className='tweet-profile-pic'
              alt='tweet-profile-pic'
              src={pic}
            ></img>
          </div>
          <div className='right-side'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                id='txt'
                placeholder='Type tweet...'
                onChange={handleChange}
              ></input>
              <input
                type='file'
                id='img'
                placeholder='Click to upload images'
                onChange={handleChange}
              ></input>
              <input
                type='submit'
                value='Tweet'
                onChange={handleChange}
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
  return tweetForm(props.pic);
}
export default CreateTweet;
