$(document).ready(function() {
  // my giphyApi
  var giphyApi = "BPXIt32b6aJqQBh3JzsEp3oaGeTjKYtW"

  // setting up giphy queryURL variable with beginning of url
  var queryURL = "https://api.giphy.com/v1/gifs/";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);
  });









});