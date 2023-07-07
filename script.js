let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor((Math.random() * 3))];
}

let computerScore = 0;
let playerScore = 0;

let playerChoice = prompt("Choose rock, paper or scissors:");

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("It's a tie!")
    }

    if (
    playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log(`Computer wins the round with the score: ${computerScore}`)
    } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        console.log(`Player wins the round with the score: ${playerScore}`)
    }
}

playRound(playerChoice, getComputerChoice())