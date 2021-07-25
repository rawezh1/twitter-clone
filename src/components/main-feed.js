import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowTweet from './aux-components/show-tweet';
import firebase from 'firebase';
import 'firebase/auth';
import './account.css';
import TweetObj from './object-create-functions/create-tweet-obj';
function MainFeed(props) {
  const [tweets, updateTweets] = useState([]);

  useEffect(() => {
    console.log('effect');
    const initialize = async () => {
      await firebase
        .database()
        .ref('tweets/')
        .once('value', (snapshot) => {
          var data = [];
          snapshot.forEach((element) => {
            data.push(element.val());
          });
          updateTweets(data);
        });
    };
    initialize();
  }, []);

  const makeFeed = () => {
    if (tweets.length === 0) {
      return null;
    }
    const feed = tweets.map((tweet,index) => {
      return <ShowTweet key={index} content={tweet} />;
    })
    return feed;
  };

  return (
    <div className='feed'>
      <div>
        <div>{makeFeed()}</div>
      </div>
    </div>
  );
}
export default MainFeed;
