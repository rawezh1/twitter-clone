import React, { useState, useEffect } from 'react';
import ShowTweet from '../aux-components/show-tweet';
import firebase from 'firebase';
import 'firebase/auth';
import './main-feed.css';
import LeftBar from '../panels/left-panel';
import RightBar from '../panels/right-panel';
function MainFeed() {
  const [tweets, updateTweets] = useState([]);

  useEffect(() => {
    console.log('effect');
    const initialize = async () => {
      await firebase
        .database()
        .ref('tweets/')
        .on('value', (snapshot) => {
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
      return <div className='loader'></div>
    }
    const feed = tweets.reverse().map((tweet, index) => {
      return <ShowTweet key={index} content={tweet} />;
    });
    return feed;
  };

  return (
    <div className='main-div'>
      <LeftBar />
      <div>{makeFeed()}</div>
      <RightBar/>
    </div>
  );
}
export default MainFeed;
