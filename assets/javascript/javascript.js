$(document).ready(function() {
  // my giphyApi including prefix and limit
  var giphyApi = "&api_key=BPXIt32b6aJqQBh3JzsEp3oaGeTjKYtW&limit=10"

  // setting up giphy queryURL variable with beginning of url
  var beginningURL = "https://api.giphy.com/v1/gifs/search?q=";

  // setting up array with strings for buttons
  var topics = ["Darth Vader", "Princess Leia", "Luke Skywalker", "Obi-Wan Kenobi", "Han Solo", "R2-D2", "C-3PO", "Chewbacca", "Moff Tarkin", "Emperor Palpatine", "Lando Calrissian", "Yoda", "Boba Fett", "Jabba the Hutt", "Admiral Ackbar", "Wicket (ewok)"];

  for (i=0; i < topics.length; i++){
    $("#gifbuttons").append(`<button class="btn btn-outline-dark btn-sm gifbutton" type="button" data-character="${topics[i]}">${topics[i]}</button>`);
  };

  // listen to form, add button
  $("#submitbutton").on("click", function(event) {
    event.preventDefault();
    alert("submitted");
    


    // Start working here =======================================================   See activity 07
    // topics.push(

    // );

  });

  // function for button clicks
  $(".gifbutton").click(function(){
    var character = $(this).attr("data-character");
    queryURL = beginningURL+character+giphyApi;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.data);

      for (i=0; i< response.data.length; i++){
        console.log(response.data[i].images.fixed_width_still.url);
        var characterImage = $("<img>").attr("class", "rounded m-1 gif").attr("data-state", "still");
        var rating = response.data[i].rating;
        var gifDiv = $("<div>").attr("class", "d-inline");
        console.log(rating);
        var p = $("<p>").text("Rating: "+rating).attr("class", "text-white d-inline");
        characterImage.attr("src", response.data[i].images.fixed_width_still.url).attr("data-still", response.data[i].images.fixed_width_still.url).attr("data-animate", response.data[i].images.fixed_width.url);
        gifDiv.append(characterImage);
        gifDiv.append(p);
        $("#gifs").prepend(gifDiv);
      }

      // pause and play gifs
      $(".gif").on("click", function() {
        // variable to keep track of whether gif is still or animated
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    });

    
  });

  
});