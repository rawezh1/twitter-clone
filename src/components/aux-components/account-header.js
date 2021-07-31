import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './account-header.css';
import { findUid } from '../helpers/helper-funcs';
function AccountHeader(props) {
  const [user, updateUser] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const uid = await findUid(props.atId);
      await firebase
        .database()
        .ref('users/' + uid)
        .once('value', (snapshot) => {
          console.log(snapshot.val())
          updateUser(snapshot.val());
        });
    };
    initialize();
  }, [props.atId]);

  const makeHeader = (info) => {
    return (
      <div className='account-header'>
        <img className='banner' alt='banner-img' src={info.banner}></img>
        <div className='header-profile'>
          <div className='img-follow-cont'>
            <img className='profile-pic' alt='profile-pic' src={info.pic}></img>
            <button className='follow-btn'>Follow</button>
          </div>
          <div className='name-id-cont'>
            <span className='name-h'>{info.name}</span>
            <span className='id-h'>{info.id}</span>
          </div>
          <div className='bio-links-cont'>
            <p className='bio-p'>{info.bio}</p>
            <div className='basic-info'>
              <span>Joined {info.joinedDate}</span>
            </div>
            <div className='follower-cont'>
              <a className='following-a' href='http'>
                {info.following} Following
              </a>
              <a className='followers-a' href='http'>
                {info.following} Followers
              </a>
            </div>
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
    );
  };
  const render = () => {
    if (user) {
      return makeHeader(user);
    } else {
      return <div className='loader'></div>;
    }
  };

  return render();
}
export default AccountHeader;
