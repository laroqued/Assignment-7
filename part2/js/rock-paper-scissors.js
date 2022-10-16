function game() {
  //window.alert("Welcome to the Rock, Paper, Scissors Game!!");
  const playerOptions = window.prompt(
    "Player 1, type in: rock, paper, or scissors"
  );

  const computerPicks = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = computerPicks[randomIndex];

  let player = playerOptions;
  let computer = computerChoice;
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  console.log(`Player Choice: ${player}`);
  console.log(`Computer Choice: ${computer}`);
  if (player === computer) {
    alert("Tie");
  }

  if (player === "rock" && computer === "scissors") {
    alert("Player Won, Rock destroys scissors.");
  }

  if (player === "scissors" && computer === "paper") {
    alert("Player Won, Scissors cut paper.");
  }

  if (player === "paper" && computer === "rock") {
    alert("Player Won, Paper covers rock.");
  }

  if (player === "scissors" && computer === "rock") {
    alert("Computer Won, Rock destroys scissors.");
  }

  if (player === "paper" && computer === "scissors") {
    alert("Computer Won, Scissors cut paper.");
  }

  if (player === "rock" && computer === "paper") {
    alert("Computer Won, Paper covers rock.");
  }
}

game();
