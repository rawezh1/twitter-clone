import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Tweet(props) {
  const renderTweet = (contents) => {
    return <div className='tweet'>
        <div className='tweet-side'>
            <img className='tweet-profile-pic' alt='tweet-profile-pic' src={contents.user.pic}></img>
        </div>
        <div className='tweet-content'>
          <div className='tweet-date'>{contents.date.toString}</div>
            <div className='name-id-cont'>
            <h1 className='name-h'>{contents.user.name}</h1>
            <h2 className='id-h'>{contents.user.id}</h2>
            </div>
            <p className='tweet-text'></p>
            <img className='twee-img' alt='tweet-img' src={contents.images[0]}></img>
            <div className='tweet-interaction'>
                <div className='retweet'>Retweets {contents.retweets.length}</div>
                <div className='like'> Likes {contents.likes.length}</div>
                <div className='reply'> Replies {contents.replies.length}</div>
                <div className='share'>Share</div>
            </div>
        </div>
    </div>
  };
  
  return <div className='tweet'>{renderTweet(props.content)}</div>;
}
export default Tweet;