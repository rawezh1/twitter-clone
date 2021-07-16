class AccountInfo  {
    constructor (name,pic,banner) {
        this.name = name;
        this.id = '@'+name;
        this.pic = pic;
        this.banner = banner;
        this.bio = '';
        this.joinedDate = new Date();
        this.followers = [];
        this.following = [];
    }
}
export default AccountInfo;