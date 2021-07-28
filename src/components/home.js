
import firebase from 'firebase';
import 'firebase/auth';
import MainFeed from './aux-components/main-feed';
import LeftBar from './panels/left-panel';
import RightBar from './panels/right-panel';
import './home.css'
import ProfileFeed from './aux-components/profile-feed';

function Home() {
  return (
    <div className='home-main-div'>
        <LeftBar/>
        <ProfileFeed />
        <RightBar/>
    </div>
  );
}

export default Home;
