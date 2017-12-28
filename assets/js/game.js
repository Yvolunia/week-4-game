  $(document).ready(function() {

// Variables

var x;
var yellow;
var green;
var white;
var blue;
var result;
var wins = 0;
var losses = 0;

// Initialize function to generate random numbers

function initialize() {
 x = "";
 yellow = "";
 green = "";
 white = "";
 blue = "";
 result = "";

  $("originalRandom").empty();
} // End initialize

// Click Play to set Random Numbers

$("#playButton").on("click", function() {
  x = Math.floor((Math.random() * 101) +19);
  document.getElementById("originalRandom").innerHTML = x;
  result = 0;
  document.getElementById("finalNumber").innerHTML = result;
  console.log(result)
  yellow =  Math.floor((Math.random() * 11) + 1);
  console.log(yellow);
  green =  Math.floor((Math.random() * 11) + 1);
  console.log(green);
  white =  Math.floor((Math.random() * 11) + 1);
  console.log(white);
  blue =  Math.floor((Math.random() * 11) + 1);
  console.log(blue);
  $(".play-buttons").show();
 })

// Add numbers

  $("#yellow").on('click', function(){
      if (yellow){
        result = result + yellow;
        document.getElementById("finalNumber").innerHTML = result;
        score ();

      }
   });


  $("#green").on('click', function(){
      if (green){
        result = result + green;
        document.getElementById("finalNumber").innerHTML = result;
        score ();

      }
});

  $("#white").on('click', function(){
      if (white){
        result = result + white;
        document.getElementById("finalNumber").innerHTML = result;
        score ();
}

});

  $("#blue").on('click', function(){
      if (blue){
        result = result + blue;
        document.getElementById("finalNumber").innerHTML = result;
        score ();
      }

    });

// Wins and Losses

function score () {
   if (result > x){
    losses++;
    $("#L").html('Losses:' + "" + losses)
    $(".play-buttons").hide();
   }

   if (result === x) {
    wins++;
    $("#W").html('Wins:' + "" + wins)
    $(".play-buttons").hide();
   };

};

});
 