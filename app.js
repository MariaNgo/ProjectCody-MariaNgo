function addMessage() {
  var userInput = document.getElementById("messages");

  console.log(userInput.value);

  var newPara = document.createElement("P");
  var postToNewsFeed = document.createTextNode(userInput.value);

  newPara.appendChild(postToNewsFeed);

  var newsfeed = document.getElementById("post");

  newsfeed.appendChild(newPara);

  // Form clear
  document.getElementById("form_messages").reset();

/*  newText.appendChild(postToNewsFeed);
  document.body.appendChild(newText);
*/
}


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvRk801MNuTBSOxeXrWB-B4GBjN9_6Llo",
  authDomain: "projectcodymariango.firebaseapp.com",
  databaseURL: "https://projectcodymariango.firebaseio.com",
  projectId: "projectcodymariango",
  storageBucket: "",
  messagingSenderId: "975071454761"
};
firebase.initializeApp(config);

/*
// Create a new reference to a location (folder) named messages
let messagesRef = firebase.database().ref("stored_messages");

// Create a new messgae in my firebase
messagesRef.push().set(saveData)
*/

function writeUserData(postToNewsFeed) {
  firebase.database().ref("stored_messages").set({
    data: postToNewsFeed
  });
}
