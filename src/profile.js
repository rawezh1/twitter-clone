import firebase from 'firebase';
import 'firebase/auth';
import LeftBar from './components/panels/left-panel';
import RightBar from './components/panels/right-panel';
import './profile.css';
import User from './components/aux-components/user';

function Profile() {
  const atId = window.location.pathname.split('/').pop();
  return (
    <div className='home-main-div'>
      <LeftBar />
      <User atId={atId} />
      <RightBar />
    </div>
  );
}

export default Profile;
