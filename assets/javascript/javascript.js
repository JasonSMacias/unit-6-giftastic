$(document).ready(function() {
  // my giphyApi including prefix and limit
  var giphyApi = "&api_key=BPXIt32b6aJqQBh3JzsEp3oaGeTjKYtW&limit=10"

  // setting up giphy queryURL variable with beginning of url
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";

  // setting up array with strings for buttons
  var topics = ["Darth Vader", "Princess Leia", "Luke Skywalker", "Obi-Wan Kenobi", "Han Solo", "R2-D2", "C-3PO", "Chewbacca", "Grand Moff Tarkin", "Emperor Palpatine", "Lando Calrissian", "Yoda", "Boba Fett", "Jabba the Hutt", "Admiral Ackbar", "Wicket (ewok)"];

  for (i=0; i < topics.length; i++){
    $("#gifbuttons").append(`<button class="btn btn-outline-dark btn-sm" type="button" name="" value="">${topics[i]}</button>`);
  };






  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   // console.log(response);
  // });

});