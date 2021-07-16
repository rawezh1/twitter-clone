import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Account(props) {
  const renderAccount = (info) => {
    return makeHeader(info);
    //makeFeed(info);
  };
  const makeHeader = (info) => {
    return (
      <div className='account-header'>
        <img className='banner' alt='banner-img' src={info.banner}></img>
        <div className='profile'>
          <div className='img-follow-cont'>
            <img className='profile-pic' alt='profile-pic' src={info.pic}></img>
            <button className='follow-btn'>follow</button>
          </div>
          <div className='name-id-cont'>
            <h1 className='name-h'>{info.name}</h1>
            <h2 className='id-h'>{info.id}</h2>
          </div>
          <div className='bio-links-cont'>
            <p className='bio-p'>{info.bio}</p>
            <div className='basic-info'></div>
            <div className='followers-cont'>
              <a className='following-a' href='http'>
                following
              </a>
              <a className='followers-a' href='http'>
                followers
              </a>
            </div>
          </div>
          <nav className='feed-select'>
            <div className='tweets'>
              <a href='http'>Tweets</a>
            </div>
            <div className='tweets-replies'>
              <a href='http'>Tweets &#38; Replies</a>
            </div>
            <div className='media'>
              <a href='http'>Media</a>
            </div>

            <div className='likes'>
              <a href='http'>Likes</a>
            </div>
          </nav>
        </div>
      </div>
    );
  };
  return <div className='account'>{renderAccount(props.info)}</div>;
}
export default Account;
