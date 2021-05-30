let game = () => {

  let computerTotal = 0;
  let userTotal = 0;

  // Five rounds of the game
  for (let i = 1; i < 6; i++) {
    console.log(`🚩Round No.${i} 🚩`);

    // COMPUTER TURN - RETURN randomly "paper", "rock", "scissors"
    let computerPlay = () => {

      let randomNumber = Math.floor(Math.random() * 3);

      if (randomNumber === 0) {
        return "rock";
      } else if (randomNumber === 1) {
        return "paper";
      } else if (randomNumber === 2) {
        return "scissors";
      }
    }

    // USER TURN - User enters "paper", "rock" or "scissors" as an input
    const playerSelection = prompt("Rock, paper or scissors?");
    console.log(`USER: ${playerSelection}`);

    const computerSelection = computerPlay();
    console.log(`COMPUTER: ${computerSelection}`);

    // COMPARE RESULTS
    let playRound = (playerSelection, computerSelection) => {
      if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") {
        console.log("You win!");
        userTotal++;
      } else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
        console.log("You lose! Rock beats Scissors");
        computerTotal++;
      } else if (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors") {
        console.log("You win!");
        userTotal++;
      } else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
        console.log("You lose! Paper beats Rock!");
        computerTotal++;
      } else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
        console.log("You lose! Scissors beats Rock!");
        computerTotal++;
      } else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "rock") {
        console.log("You win!");
        userTotal++;
      } else {
        console.log("It's a tie!");
      }
    }
    playRound(playerSelection, computerSelection);
    console.log(`Computer: ${computerTotal}, User: ${userTotal}`);
  }

  // Log the result of the game
  if (computerTotal > userTotal) {
    console.log("🏆 GAME OVER: Computer won the game! 🏆");
  } else if (computerTotal < userTotal) {
    console.log("🏆 GAME OVER: You won! 🏆");
  } else if (computerTotal === userTotal) {
    console.log("🏆 GAME OVER: It's a tie! 🏆");
  }

}

game();
