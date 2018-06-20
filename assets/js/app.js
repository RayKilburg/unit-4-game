//////////////////////////
var wins = 0;
var losses = 0;
var rockOne;
var rockTwo;
var rockThree;
var compScore;
var userScore = 0;
function newGame() {
  //gets random number from 120-19
  compScore = Math.floor(Math.random() * 120 + 19);
  rockOne = Math.floor(Math.random() * 12 + 1);
  rockTwo = Math.floor(Math.random() * 12 + 1);
  rockThree = Math.floor(Math.random() * 12 + 1);
  rockFour = Math.floor(Math.random() * 12 + 1);
  console.log(compScore, rockOne, rockTwo, rockThree, rockFour);
  $("#comp-score").html(compScore);
}
//reset function
function reset() {
  newGame();
  refresh();
  userScore = 0;
}
//checks the score logs winner and loser
function checkWin() {
  if (userScore == compScore) {
    console.log("win");
    wins++;
    reset();
  } else if (userScore > compScore) {
    losses++;
    reset();
  }
  refresh();
}

newGame();
// on click for rockOne btn
$("#rockOne").on("click", function() {
  userScore += rockOne;
  checkWin();
});
$("#rockTwo").on("click", function() {
  userScore += rockTwo;
  checkWin();
});
$("#rockThree").on("click", function() {
  userScore += rockThree;
  checkWin();
});
$("#rockFour").on("click", function() {
  userScore += rockFour;
  checkWin();
});
$("h1").on("click", function() {
  alert("cheats activated");
  wins++;
});
//refreshes the game to keep the scores updated
function refresh() {
  $("#comp-score").html(compScore);
  $("#user-score").html(userScore);
  $("#losses").html(losses);
  $("#wins").html(wins);
}
