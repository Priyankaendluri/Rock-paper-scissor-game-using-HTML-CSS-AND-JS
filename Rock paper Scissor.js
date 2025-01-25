// Get references to the DOM elements
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("game-result");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Choices array for the computer
const choices = ["Rock", "Paper", "Scissors"];

// Add event listeners to the buttons
rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));

function playGame(userChoice) {
  // Get computer's random choice
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Display the choices
  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;

  // Determine the result
  const result = determineWinner(userChoice, computerChoice);

  // Display the result
  resultDisplay.textContent = result.message;
  resultDisplay.classList.remove("win", "lose", "draw");
  resultDisplay.classList.add(result.class);
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return {
      message: "It's a Draw!",
      class: "draw"
    };
  }

  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return {
      message: "You Win!",
      class: "win"
    };
  } else {
    return {
      message: "You Lose!",
      class: "lose"
    };
  }
}

