import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import './create-tweet.css';
import TweetObj from './object-create-functions/create-tweet-obj';

function CreateTweet(props) {
  const [tweetData, updateTweetData] = useState({ txt: '', img: '' });
  const handleChange = (e) => {
    updateTweetData({
      ...tweetData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tweetData);
    //TODO: add tweet to logged in user;
    // TDOD: associate tweet with logged in user;
    const tweetsRef = firebase.database().ref('tweets/').push();
    const tweet = new TweetObj({id:'',name:'',pic:''}, tweetData.txt, tweetData.img);
    tweetsRef.set(tweet);
  };
  const tweetForm = (pic) => {
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
            <input type='submit' value='Tweet' onChange={handleChange}></input>
          </form>
        </div>
      </div>
    );
  };

  return tweetForm(props.pic);
}
export default CreateTweet;
