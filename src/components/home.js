
import firebase from 'firebase';
import 'firebase/auth';
import MainFeed from './aux-components/main-feed';
import LeftBar from './panels/left-panel';
import RightBar from './panels/right-panel';
import './home.css'
import ProfileFeed from './aux-components/profile-feed';
import {useAuthState} from "react-firebase-hooks/auth";
import CreateTweet from './aux-components/create-tweet';

function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const render = () => {
    if (loading) {
      return <div className='loader'></div>
    }
    else if (user) {
      return <div>
        <CreateTweet uid={firebase.auth().currentUser.uid} />
        <ProfileFeed uid={firebase.auth().currentUser.uid}></ProfileFeed>
      </div>
      
    }
  }
  
   return (
    <div className='home-main-div'>
        <LeftBar/>
        {render()}
        <RightBar/>
    </div>
  );
}

export default Home;
