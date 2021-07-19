import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tweet from './tweet';
import './account.css';
import LeftBar from './left-panel';
import RightBar from './right-panel';

function MainFeed(props) {
  const makeFeed = (accounts) => {
    const feed = accounts.map ((account => {
        return account.listoftweets.map((tweet) => {
            return <Tweet content={tweet} />;
          });
    }))
    console.log(feed);
    return feed;
  };
  return (
    <div className='account'>
      <LeftBar />
      <div>
        <div>{makeFeed(props.accounts)}</div>
      </div>
      <RightBar />
    </div>
  );
}
export default MainFeed;