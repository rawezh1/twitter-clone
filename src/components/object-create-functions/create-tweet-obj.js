class TweetObj  {
    constructor (usr = {id:'',name:'',pic:''},txt,pics) {
        this.userId = usr.id;
        this.userName = usr.name;
        this.userPic = usr.pic;
        this.textContent = txt;
        this.images = pics;
        this.date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        this.retweets = 0;
        this.likes = 0;
        this.replies = [];
    }
}
export default TweetObj;