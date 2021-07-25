class TweetObj  {
    constructor (usrId,usrName,usrPic,txt,pics) {
        this.userId = usrId;
        this.userName = usrName;
        this.userPic = usrPic;
        this.textContent = txt;
        this.images = pics;
        this.date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        this.retweets = 0;
        this.likes = 0;
        this.replies = [];
    }
}
export default TweetObj;