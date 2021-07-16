import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Tweet(props) {
  const renderTweet = (contents) => {
    return <div className='tweet'>
        <div className='tweet-side'>
            <img className='tweet-profile-pic' alt='tweet-profile-pic'></img>
        </div>
        <div className='tweet-content'>
            <div className='name-id-cont'>
            <h1 className='name-h'>Placeholder</h1>
            <h2 className='id-h'>Place-holder</h2>
            </div>
            <p className='tweet-text'></p>
            <img className='twee-img' alt='tweet-img'></img>
            <div className='tweet-interaction'>
                <div className='retweet'></div>
                <div className='like'></div>
                <div className='reply'> </div>
                <div className='share'></div>
            </div>
        </div>
    </div>
  };
  
  return <div className='tweet'>{renderTweet(props.content)}</div>;
}
export default Tweet;