import firebase from 'firebase';
const convertImgto64 = (file) => {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      resolve(filereader.result);
    };
  });
};
const removeEmpty = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] === '' && delete obj[key]);
};
const findUid = async (atId) => {
  var uid = '';
  await firebase
    .database()
    .ref('users/')
    .orderByChild('id')
    .equalTo(atId)
    .once('value', (snapshot) => {
      uid = Object.keys(snapshot.val());
    });
  return uid[0];
};
const changePath = (e) => {
  if (!e.target.id) {
    return (window.location.pathname = e.target.parentNode.id);
  }
  window.location.pathname = e.target.id;
};
const signOut = () => {
  firebase.auth().signOut();
  window.location.pathname = '';
};
export { convertImgto64, removeEmpty, findUid, changePath, signOut };
