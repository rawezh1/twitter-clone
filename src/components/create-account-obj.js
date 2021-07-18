class AccountObj  {
    constructor (name,pic,banner) {
        this.name = name;
        this.id = '@'+name;
        this.pic = pic;
        this.banner = banner;
        this.bio = 'The quick brown fox dolor sit amet';
        this.joinedDate = new Date();
        this.followers = [];
        this.following = [];
        this.listoftweets = [];
    }
}
export default AccountObj;