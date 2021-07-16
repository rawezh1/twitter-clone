import AccountInfo from './components/create-account';
import Account from './components/account';
import DefaultPic from './components/images/default-pic.png'
import DefualtBanner from './components/images/default-header.jpg'
import './App.css';

function App() {
  const testAccount = new AccountInfo('test',DefaultPic,DefualtBanner);
  return (
    <div className="App">
      <Account info = {testAccount}/>
    </div>
  );
}

export default App;
