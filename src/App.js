import AccountObj from './components/create-account-obj';
import Account from './components/account';
import TweetObj from './components/create-tweet-obj';
import DefaultPic from './components/images/default-pic.png'
import DefualtBanner from './components/images/default-header.jpg'
import './App.css';

function App() {
  const testAccount = new AccountObj('Test',DefaultPic,DefualtBanner);
  const testTweet = new TweetObj(testAccount,'Hello World!',[], new Date());
  testAccount.listoftweets.push(testTweet);
  return (
    <div className="App">
      <Account info = {testAccount}/>
    </div>
  );
}

export default App;
