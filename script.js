"use strict";

// Generating Random Secret number btwn 1 - 20
let secretNum = generateSecretNum();

// Maintaining The User score that decrements upon wrong guesses
let score = 20;
// Maintaining the highscore which is initially zero
let highScore = 0;

// Utility functions
function setMessageContent(str) {
  document.querySelector(".message").textContent = str;
}

const generateSecretNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// Event Listener for checking Button Click
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  console.log(userGuess);

  //   Check If User Inputted Number
  if (!userGuess) {
    // Invalid Input
    setMessageContent("Invalid Input");
  } else if (userGuess === secretNum) {
    // User Guesses Correctly
    setMessageContent("You Guessed It!!");
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Check for a highscore
    if (score > highScore)
      document.querySelector(".highscore").textContent = score;
  } else if (userGuess !== secretNum) {
    // User Guessed Wrong
    if (score > 1) {
      // Checking if User Guess Is Higher or Lower
      setMessageContent(userGuess < secretNum ? "Too Low" : "Too High");

      // Updating Score
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // User Lost Game
      setMessageContent("Sorry, You Lose 😔");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Event Listener for Button Click to Reset Game.
document.querySelector(".again").addEventListener("click", function () {
  // Updating Score and Secret Number
  score = 20;
  secretNum = generateSecretNum();

  // Updating textContent on Elements
  document.querySelector(".number").textContent = "?";
  setMessageContent("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  // Reverting Styles Applied
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
