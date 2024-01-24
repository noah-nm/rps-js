let playerScore = 0;
let computerScore = 0;
let draws = 0;
let rounds = 5;

function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid choice. Must choose rock, paper, or scissors. ");
        rounds++;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win the round!");
        playerScore++;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win the round!");
        playerScore++;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win the round!");
        playerScore++;
    }
    else if(playerSelection === computerSelection) {
        console.log("Draw")
        draws++;
    }
    else {
        console.log("You lost the round.")
        computerScore++;
    }

}

function game() {

    console.log(" ***** ROCK PAPER SCISSORS ***** ")
    console.log("5 rounds of rock paper scissor will now begin!")

    for(let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Type rock, paper, or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Your Score: ${playerScore}`);
        console.log(`Bot Score: ${computerScore}`);
        console.log(`Draws: ${draws}`)
    }

    if(playerScore > computerScore) {
        console.log("You won the game!")
    }
    else if(computerScore > playerScore) {
        console.log("You lost the game");
    }
    else {
        console.log("The game was a tie")
    }

}

game();
