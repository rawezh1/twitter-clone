import DefaultPic from './images/default-pic.png';
import DefualtBanner from './images/default-header.jpg';
class AccountObj {
  constructor(name, email, password, birthday) {
    this.name = name;
    this.id = '@' + name;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.profilePic = DefaultPic;
    this.banner = DefualtBanner;
    this.bio = 'The quick brown fox dolor sit amet';
    this.joinedDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    this.followers = [];
    this.following = [];
    this.listoftweets = [];
  }
}
export default AccountObj;
