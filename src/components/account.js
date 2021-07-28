import React, { useState, useEffect } from 'react';
import './account.css';
import LeftBar from './panels/left-panel';
import RightBar from './panels/right-panel';
import ProfileFeed from './aux-components/profile-feed';
import AccountHeader from './aux-components/account-header';
function Account(props) {
  const getPathName = () => { 
    const pathName = window.location.pathname.split( '/' )
    return pathName.pop()
  }
  return (
    <div className='account-main-div'>
      <LeftBar />
      <div className='account'>
          <AccountHeader name={getPathName()}/>
          <ProfileFeed name={getPathName()}/>
      </div>
      <RightBar />
    </div>
  );
}
export default Account;
