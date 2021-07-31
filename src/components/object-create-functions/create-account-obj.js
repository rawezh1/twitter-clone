import DefaultPic from '../images/default-pic.jpg';
import DefualtBanner from '../images/default-header.jpg';
class AccountObj {
  constructor(name, birthday, date) {
    this.name = name;
    this.id = '@' + name.trim().toLowerCase();
    this.birthday = birthday;
    this.pic = DefaultPic;
    this.banner = DefualtBanner;
    this.bio = 'The quick brown fox dolor sit amet';
    this.joinedDate = date;
    this.followers = 0;
    this.following = 0;
    this.listoftweets = [];
  }
}
export default AccountObj;
