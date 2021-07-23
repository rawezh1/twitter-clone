import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowTweet from './aux-components/show-tweet';
import './account.css';
function Account(props) {
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
          <span className='name-h'>{info.name}</span>
            <span className='id-h'>{info.id}</span>
          </div>
          <div className='bio-links-cont'>
            <p className='bio-p'>{info.bio}</p>
            <div className='basic-info'>
              <span>Joined {info.joinedDate.getFullYear()}</span>
            </div>
            <div className='followers-cont'>
              <a className='following-a' href='http'>
                {info.following.length} Following
              </a>
              <a className='followers-a' href='http'>
                 {info.following.length} Followers
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
  const makeFeed = (info) => {
    console.log(info.listoftweets[0]);
    const feed = info.listoftweets.map((tweet) => {
      console.log(<ShowTweet content={tweet} />);
      return <ShowTweet content={tweet} />;
    });
    console.log(feed);
    return feed;
  };
  return (
    <div className='account'>
      <div></div>
      <div>
        <div>{makeHeader(props.info)}</div>
        <div>{makeFeed(props.info)}</div>
      </div>
      <div ></div>
    </div>
  );
}
export default Account;
