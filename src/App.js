import AccountObj from './components/create-account-obj';
import Account from './components/account';
import TweetObj from './components/create-tweet-obj';
import DefaultPic from './components/images/default-pic.png'
import DefualtBanner from './components/images/default-header.jpg'
import MainFeed from './components/main-feed';
import './App.css';

function App() {
  const testAccount = new AccountObj('Test',DefaultPic,DefualtBanner);
  const testTweet = new TweetObj(testAccount,'Hello World!',[], new Date());
  testAccount.listoftweets.push(testTweet);
  const listOfAccount = [testAccount, testAccount, testAccount, testAccount, testAccount, testAccount, testAccount, testAccount, testAccount, testAccount];

  return (
    <div className="App">
      <MainFeed accounts = {listOfAccount}/>
    </div>
  );
}

export default App;
