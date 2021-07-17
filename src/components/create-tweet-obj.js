class TweetObj  {
    constructor (usr,txt,pics,date) {
        this.user = usr;
        this.textContent = txt;
        this.images = pics;
        this.date = date;
        this.retweets = [];
        this.replies = [];
        this.likes = [];
        this.following = [];
    }
}
export default TweetObj;