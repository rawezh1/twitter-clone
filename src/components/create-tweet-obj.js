class TweetObj  {
    constructor (usr,txt,pics) {
        this.userId = usr.id;
        this.userName = usr.name
        this.textContent = txt;
        this.images = pics;
        this.date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        this.retweets = [];
        this.replies = [];
        this.likes = [];
    }
}
export default TweetObj;