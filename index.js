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
    } else if (computerTotal < userTotal && userTotal == 5) {
      div.innerHTML = "🏆 GAME OVER: You won! 🏆";
    } else if (computerTotal === userTotal && computerTotal == 5) {
      div.innerHTML = "🏆 GAME OVER: It's a tie! 🏆";
    }

  }

  // This function compares choices of the computer and user and displays the result of each round
  let playRound = (playerSelection, computerSelection) => {

    let currentPoints = `POINTS: Computer: ${computerTotal}, User: ${userTotal}`;

    if (computerSelection === "Rock" && playerSelection === "Paper") {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 You win this round! 🏁`;
      userTotal++;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 You lose this round! Rock beats Scissors. 🏁`;
      computerTotal++;
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 You win this round! 🏁`;
      userTotal++;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 You lose this round! Paper beats Rock! 🏁`;
      computerTotal++;
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 You lose this round! Scissors beats Rock! 🏁`;
      computerTotal++;
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 You win this round! 🏁`;
      userTotal++;
    } else {
      div.innerHTML = `<b>User Choice:</b> ${playerSelection} VS <b>Computer Choice:</b> ${computerSelection} 🏁 It's a tie! 🏁`;
    }

    gameResult();

  }

  let div = document.createElement('div');
  document.body.appendChild(div);

  // Add Event listener to individual buttons to listen for a 'click' and run the function that nominates the  user's choice
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.addEventListener('click', playerClick));

}

game();
