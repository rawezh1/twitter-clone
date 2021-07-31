import React, { useState, useEffect } from 'react';
import ShowTweet from '../aux-components/show-tweet';
import firebase from 'firebase';
import 'firebase/auth';
import './profile-feed.css';
import { firestore } from 'firebase';
import { findUid } from '../helpers/helper-funcs';
function ProfileFeed(props) {
  const [tweets, updateTweets] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const uid = props.uid;
      await firebase
        .database()
        .ref('users/' + uid + '/tweets/')
        .on('value', (snapshot) => {
          var data = [];
          snapshot.forEach((element) => {
            const datum = element.val();
            datum.date = new Date(datum.date).toLocaleString().split(',')[0];
            console.log(datum.date);
            data.push(datum);
          });
          updateTweets(data);
        });
    };
    initialize();
  }, [props.uid]);

  const makeFeed = () => {
    const feed = tweets.reverse().map((tweet, index) => {
      return <ShowTweet key={index} content={tweet} />;
    });
    return feed;
  };
  const render = () => {
    if (tweets) {
      return makeFeed();
    } else {
      return <h1>Loading...</h1>;
    }
  };
  return <div className='feed'>{render()}</div>;
}
export default ProfileFeed;
