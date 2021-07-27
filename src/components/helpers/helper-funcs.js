import firebase from "firebase";
const convertImgto64 = (urlImg) => {
  var img = new Image();
  img.src = urlImg;
  img.crossOrigin = 'Anonymous';

  var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

  canvas.height = img.naturalHeight;
  canvas.width = img.naturalWidth;
  ctx.drawImage(img, 0, 0);

  var b64 = canvas.toDataURL('image/png').replace(/^data:image.+;base64,/, '');
  return b64;
};
const removeEmpty = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] === '' && delete obj[key]);
};
const findUid = async (name) => {
  var uid = ''
   await firebase.database().ref('users/').orderByChild('name').equalTo(name).once('value', (snapshot)=>{
     uid = Object.keys(snapshot.val())
  })
  return uid[0]
}
export {convertImgto64 , removeEmpty, findUid}