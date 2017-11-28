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
