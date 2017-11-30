function addMessage() {
  var userInput = document.getElementById("messages");

  console.log(userInput.value);

  var newPara = document.createElement("P");
  var postToNewsFeed = document.createTextNode(userInput.value);

  newPara.appendChild(postToNewsFeed);

  var newsfeed = document.getElementById("post");

  newsfeed.appendChild(newPara);


/*  newText.appendChild(postToNewsFeed);
  document.body.appendChild(newText);
*/

  var firebaseRef = firebase.database().ref();

  var messageText = document.getElementById("messages").value;

  //firebaseRef.child("Text").set("Some Value");
  firebaseRef.push().set(messageText);

  // Form clear
  document.getElementById("form_messages").reset();
}

var mainText = document.getElementById("messages");
var submitBtn = document.getElementById("submitButton");
var fireHeading = document.getElementById("Heading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot) {

  Heading.innerText = datasnapshot;

});
