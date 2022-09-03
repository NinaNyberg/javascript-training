let gameOptions = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let result = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[result];
}

let capitalize = (str) => {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
};

function playRound(playerSelection, computerSelection) {
  let text;
  if (playerSelection === computerSelection) {
    text = 'We have a tie!';
    console.log(text);
    result = 0;
  } else if (
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    text = `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
    console.log(text);
    result = -1;
  } else {
    text = `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
    console.log(text);
    result = 1;
  }

  return [result, text];
}

function game() {
  let round = 0;
  let score = 0;
  let message = 'Write rock, paper, or scissors';

  for (round = 0; round < 5; round++) {
    let computerSelection = computerPlay();
    let playerSelection;
    // playerSelection = computerPlay(); // use for testing
    do {
      playerSelection = prompt(message);
      if (playerSelection == null) return 'You quit means you lose';
      else if (gameOptions.indexOf(playerSelection) > -1) {
        playerSelection = playerSelection.toLowerCase();
        break;
      }
      message = 'Incorrect input!\nWrite rock, paper, or scissors';
    } while (true);
    console.log(computerSelection + ' > ' + playerSelection);
    let gameOutcome = playRound(playerSelection, computerSelection);
    // console.log(gameOutcome);
    score += gameOutcome[0];
    console.log(score);
    message = gameOutcome[1] + '\nWrite rock, paper, or scissors';
  }

  //   let gameOutcome = playRound(playerSelection, computerSelection);
  //   while (round < 5) {
  // let gameOutcome = playRound(playerSelection, computerSelection);
  //     score += gameOutcome;
  //   round++
  //   }

  return score > 0 ? 'You won' : score < 0 ? 'Computer won' : 'It´s a tie';
}

window.addEventListener('load', async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 20);
  });
  console.log(game());
});
// console.log(game());
