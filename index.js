let game = () => {

  // ## Starting points
  let computerTotal = 0;
  let userTotal = 0;

  // ## User's turn - User clicks on a button representing "paper", "rock", "scissors"
  let playerSelection;
  let playerClick = (e) => {

    let computerSelection = computerPlay();

    playerSelection = e.target.innerHTML;
    playRound(playerSelection, computerSelection);
  }

  // ## Computer's turn - This function returns randomly "paper"/ "rock"/ "scissors"
  let computerPlay = () => {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      return "Rock";
    } else if (randomNumber === 1) {
      return "Paper";
    } else if (randomNumber === 2) {
      return "Scissors";
    }

  }

  // ## This function displays final result of the game (after reaching 5 points)
  let gameResult = () => {

    if (computerTotal > userTotal && computerTotal == 5) {
      div.innerHTML = "🏆 GAME OVER: Computer won the game! 🏆";
      buttons.forEach(button => button.removeEventListener('click', playerClick));
      secondDiv.innerHTML =  "Press F4 to play again";

    } else if (computerTotal < userTotal && userTotal == 5) {
      div.innerHTML = "🏆 GAME OVER: You won! 🏆";
      buttons.forEach(button => button.removeEventListener('click', playerClick));
      secondDiv.innerHTML =  "Press F4 to play again";

    } else if (computerTotal === userTotal && computerTotal == 5) {
      div.innerHTML = "🏆 GAME OVER: It's a tie! 🏆";
      buttons.forEach(button => button.removeEventListener('click', playerClick));
      secondDiv.innerHTML =  "Press F4 to play again";
    }
  }

  // This function compares choices of the computer and user and displays the result of each round
  let playRound = (playerSelection, computerSelection) => {

    let currentPoints = `${computerTotal}:${userTotal}`;

    if (computerSelection === "Rock" && playerSelection === "Paper") {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      userTotal++;
      secondDiv.innerHTML =  `${currentPoints} 🏁 You win this round! 🏁`;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      computerTotal++;
      secondDiv.innerHTML = `${currentPoints} 🏁 You lose this round! Rock beats Scissors. 🏁`
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      userTotal++;
      secondDiv.innerHTML = `${currentPoints} 🏁 You win this round! 🏁`;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      computerTotal++;
      secondDiv.innerHTML = `${currentPoints} 🏁 You lose this round! Paper beats Rock! 🏁`;
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      computerTotal++;
      secondDiv.innerHTML =  `${currentPoints} 🏁 You lose this round! Scissors beats Rock! 🏁`;
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      userTotal++;
      secondDiv.innerHTML =  `${currentPoints} 🏁 You win this round! 🏁`;
    } else {
      div.innerHTML = `${playerSelection} VS ${computerSelection}`;
      secondDiv.innerHTML = `${currentPoints} 🏁 It's a tie! 🏁`;
    }

    gameResult();

  }

  let div = document.createElement('div');
  document.body.appendChild(div);
  div.classList.add("firstDiv");

  let secondDiv = document.createElement('div');
  document.body.appendChild(secondDiv);
  secondDiv.classList.add("secondDiv");

  // Add Event listener to individual buttons to listen for a 'click' and run the function that nominates the  user's choice
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.addEventListener('click', playerClick));

}

game();
