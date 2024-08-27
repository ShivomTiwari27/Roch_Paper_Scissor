const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultToDisplay = document.getElementById("resultToDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() *3)];
  let result =";";

  if(playerChoice === computerChoice){
    result = "IT'S A TIE!";
  }
  else{
    switch(playerChoice){
      case "rock":
      result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE!";
      break;

      case "paper":
      result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE!";
      break;

      case "scissors":
      result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE!";
      break;
    }
  }


  playerDisplay.textContent = `PLAYER:${playerChoice}`;
  computerDisplay.textContent = `COMPUTER:${computerChoice}`;
  resultToDisplay.textContent = result;
   

  resultToDisplay.classList.remove("greenText","redText");

  switch(result){
    case "YOU WIN":
      resultToDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultToDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
  
}