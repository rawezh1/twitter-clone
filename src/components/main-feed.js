import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowTweet from './aux-components/show-tweet';
import './account.css';
import LeftBar from './panels/left-panel';
import RightBar from './panels/right-panel';

function MainFeed(props) {
  const makeFeed = (accounts) => {
    const feed = accounts.map ((account => {
        return account.listoftweets.map((tweet) => {
            return <ShowTweet content={tweet} />;
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