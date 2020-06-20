import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAyL_1TGPwejT4tqX3kyTY6nTe-9SpDy2M",
    authDomain: "new-hope-youth.firebaseapp.com",
    databaseURL: "https://new-hope-youth.firebaseio.com",
    projectId: "new-hope-youth",
    storageBucket: "new-hope-youth.appspot.com",
    messagingSenderId: "437796778270",
    appId: "1:437796778270:web:2e19db7328e8373ef0990f",
    measurementId: "G-KX377832BV"
};

firebase.initializeApp(config);
export default firebase;