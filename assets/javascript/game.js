//////////////////////////
var wins = 0;
var losses = 0;
var rockOne;
var rockTwo;
var rockThree;
var compScore = Math.floor(Math.random() * 120 + 19);
var userScore = [];
alert("Dfgdfg")
function newGame() {
  compScore = Math.floor(Math.random() * 120 + 19);
  rockOne = Math.floor(Math.random() * 12 + 1);
  rockTwo = Math.floor(Math.random() * 12 + 1);
  rockThree = Math.floor(Math.random() * 12 + 1);
 console.log(compScore);
}

function reset() {}
if (userScore == compScore) {
  console.log("win");
  wins++;
  //reset()
}
if (userScore > compScore) {
  losses++;
  //reset()
}

$("h1").on("click",function() {
  alert("h1 clicked");
});
// $("div").click(function() {
//   alert("h1 clicked");
// });

//getting userScore
document.getElementById("rockOne").textContent = rockOne;
document.getElementById("wins").textContent = wins;

//onclick
//restart function
//new game function
//* The random number shown at the start of the game should be between 19 - 120.
//function myFunction() {
//document.getElementById("demo").innerHTML = Math.floor((Math.random() * 12) + 1);
//function myFunction() {
//document.getElementById("demo").innerHTML = Math.floor((Math.random() * 120) + 19);
//* Each crystal should have a random hidden value between 1 - 12.
//if userScore === compScore -win  if userScore > compScore -loss
