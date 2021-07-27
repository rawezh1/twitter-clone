import React, { useState, useEffect } from 'react';
import ShowTweet from '../aux-components/show-tweet';
import firebase from 'firebase';
import 'firebase/auth';
import './profile-feed.css';
import { findUid } from '../helpers/helper-funcs';
function ProfileFeed(props) {
  const [tweets, updateTweets] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const uid = await findUid('One');
      console.log(uid)
      await firebase
        .database()
        .ref('users/'+uid+'/tweets/')
        .once('value', (snapshot) => {
          var data = [];
          snapshot.forEach((element) => {
            data.push(element.val());
          });
          updateTweets(data);
        });
    };
    initialize();
  }, [props.name]);

  const makeFeed = () => {
    const feed = tweets.map((tweet, index) => {
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
