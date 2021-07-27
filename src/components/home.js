
import firebase from 'firebase';
import 'firebase/auth';
import MainFeed from './aux-components/main-feed';
import LeftBar from './panels/left-panel';
import RightBar from './panels/right-panel';
import './home.css'

function Home() {
  return (
    <div className='main-div'>
        <LeftBar/>
        <MainFeed/>
        <RightBar/>
    </div>
  );
}

export default Home;
