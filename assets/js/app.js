//////////////////////////
var wins = 0;
var losses = 0;
var rockOne;
var rockTwo;
var rockThree;
var compScore ;
var userScore = 0;
function newGame() {
  compScore = Math.floor(Math.random() * 120 + 19);
  rockOne = Math.floor(Math.random() * 12 + 1);
  rockTwo = Math.floor(Math.random() * 12 + 1);
  rockThree = Math.floor(Math.random() * 12 + 1);
  rockFour = Math.floor(Math.random() * 500 + 19);
 console.log(compScore, rockOne, rockTwo, rockThree, rockFour);
 $("#comp-score").html(compScore);
}

function reset() {
    newGame();
    refresh();
    userScore = 0;
}

function checkWin(){
    if (userScore == compScore) {
        console.log("win");
        wins++;
        reset();
    }
    else if (userScore > compScore){
        losses++;
        reset();
    }
    refresh();
};

newGame();
$("h1").on("click",function() {
    userScore += rockOne;
  alert("h1 clicked");
});
$("#rockOne").on("click",function() {
    //alert("r1 clicked");
    userScore += rockOne;
    checkWin();
    
  });
  $("#rockTwo").on("click",function() {
    userScore += rockTwo;
    checkWin();
    
   // alert("r2 clicked");
  });
  $("#rockThree").on("click",function() {
    userScore += rockThree;
    checkWin();
    //alert("r3 clicked");
  });
  $("#rockFour").on("click",function() {
    userScore += rockFour;
    checkWin();
   
    
   
  });
function refresh(){
    $("#comp-score").html(compScore);
  $("#user-score").html(userScore);
  $("#losses").html(losses);
  $("#wins").html(wins); 
};

// $("div").click(function() {
//   alert("h1 clicked");
// });

//getting userScore
//document.getElementById("rockOne").textContent = rockOne;
//document.getElementById("wins").textContent = wins;

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
