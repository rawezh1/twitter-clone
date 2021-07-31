class TweetObj  {
    constructor (usrId,usrName,usrPic,txt,pics,date) {
        this.userId = usrId;
        this.userName = usrName;
        this.userPic = usrPic;
        this.textContent = txt;
        this.images = pics;
        this.date = date;
        this.retweets = 0;
        this.likes = 0;
        this.replies = [];
    }
}
export default TweetObj;