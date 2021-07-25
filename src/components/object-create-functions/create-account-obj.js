import DefaultPic from '../images/default-pic.jpg';
import DefualtBanner from '../images/default-header.jpg';
class AccountObj {
  constructor(name, birthday) {
    this.name = name;
    this.id = '@' + name;
    this.birthday = birthday;
    this.profilePic = DefaultPic;
    this.banner = DefualtBanner;
    this.bio = 'The quick brown fox dolor sit amet';
    this.joinedDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    this.followers = 0;
    this.following = 0;
    this.listoftweets = [];
  }
}
export default AccountObj;
