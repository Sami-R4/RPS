// function to get a random choice for the computer
function getComputerChoice(choice){
    choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            var result = "rock";
            return result.toLowerCase();
        case 1: 
            var result = "paper"; 
            return result.toLowerCase();
        case 2: 
            var result = "scissors";
            return result.toLowerCase();
        default:
            return "null";
    }
}

// console.log(getComputerChoice());

// function to get user input
function getUserChoice(choice){
    choice = prompt("Enter rock, paper or scissors: ");
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.toLowerCase();
    }
}

// console.log(getUserChoice());

// Declaring players scores
let humanScore = 0; 
let computerScore = 0;


console.log(playRound(humanSelection, computerSelection));

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();
// function to play the game
function playGame(humanScore, computerScore){
    for(let i=0;i<5;i++){
    
    // function for rounds to play
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    } else if ((humanSelection === "rock" && computerSelection === "scissors") ||
               (humanSelection === "paper" && computerSelection === "rock") ||
               (humanSelection === "scissors" && computerSelection === "paper")) {    
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
    }
}
    }
}

console.log(playGame());
