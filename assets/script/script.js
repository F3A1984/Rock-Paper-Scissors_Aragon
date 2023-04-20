const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

/*
const addElementBtn = document.getElementById("add-element-btn");
const gameContainer = document.getElementById("game-container");

// Add event listener to the button
addElementBtn.addEventListener("click", addElement);

// Define the addElement function
function addElement() {
  // Create a new game element
  const gameElement = document.createElement("div");
  gameElement.classList.add("game-element");

  // Generate a random choice for the game element
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const choice = choices[randomIndex];

  // Set the game element's text content based on the choice
  gameElement.textContent = choice;

  // Append the game element to the game container
  gameContainer.appendChild(gameElement);
}*/
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');


function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
  
  if (playerScore === 5) {
    return 'You win the game!';
  } else if (computerScore === 5) {
    return 'Computer wins the game!';
   }  
}


function game(playerSelection) {
  const computerSelection = computerPlay();
  const roundResult = playRound(playerSelection, computerSelection);
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  resultDisplay.textContent = roundResult;
  
  if (playerScore === 5 || computerScore === 5) {
    choiceButtons.forEach(button => {
      button.disabled = true;
    });
  }
}

const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});