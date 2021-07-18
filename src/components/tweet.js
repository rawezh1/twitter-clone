import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './tweet.css';

function Tweet(props) {
  const renderTweet = (contents) => {
    return (
      <div className='tweet'>
        <div className='left-side'>
          <img
            className='tweet-profile-pic'
            alt='tweet-profile-pic'
            src={contents.user.pic}
          ></img>
        </div>
        <div className='right-side'>
          <div className='tweet-content'>
            <div className='name-id-date-cont'>
              <span className='name-h'>{contents.user.name}</span>
              <span className='id-h'>{contents.user.id}</span>
              <span className='tweet-date'> {contents.date.getFullYear()}</span>
            </div>
            <p className='tweet-text'>{contents.textContent}</p>
            <img
              className='tweet-img'
              alt='tweet-img'
              src={contents.images[0]}
            ></img>
            <div className='tweet-interaction'>
              <div className='retweet'>Retweets {contents.retweets.length}</div>
              <div className='like'> Likes {contents.likes.length}</div>
              <div className='reply'> Replies {contents.replies.length}</div>
              <div className='share'>Share</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className='tweet-cont'>{renderTweet(props.content)}</div>;
}
export default Tweet;
