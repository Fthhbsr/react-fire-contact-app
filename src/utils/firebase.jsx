// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {
//     toastErrorNotify,
//     toastSuccessNotify,
//     toastWarnNotify,
//   } from '../helpers/ToastNotify';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, onValue, child, get } from "firebase/database";

const database = getDatabase(app);

//!Basic write operations

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

//! Read data

//Listen for value events

const db = getDatabase();
const starCountRef = ref(db, "posts/" + postId + "/starCount");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

//!Read data once

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

// import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

// const db = getDatabase();
// const commentsRef = ref(db, 'post-comments/' + postId);
// onChildAdded(commentsRef, (data) => {
//   addCommentElement(postElement, data.key, data.val().text, data.val().author);
// });

// onChildChanged(commentsRef, (data) => {
//   setCommentValues(postElement, data.key, data.val().text, data.val().author);
// });

// onChildRemoved(commentsRef, (data) => {
//   deleteComment(postElement, data.key);
// });
