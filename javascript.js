console.log("Hello World! This is Max");

var rockPaperScissor = [
    'rock',
    'paper',
    'scissors'
];

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()*rockPaperScissor.length)
    return rockPaperScissor[randomNumber]
}

//console.log(getComputerChoice());
let myScore = 0
let computerScore = 0

// console.log(myScore)
// console.log(computerScore)

function playGame() {
    function playRound(playerSelection, computerSelection) {
        // console.log(computerSelection)
        if (playerSelection === computerSelection) {
            //console.log("this is draw")
            myScore = myScore
            computerScore = computerScore
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            //console.log("Computer won!")
            computerScore = computerScore + 1
        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            //console.log("Computer won!")
            myScore = myScore + 1
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            //console.log("Computer won!")
            computerScore = computerScore + 1
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            //console.log("Computer won!")
            myScore = myScore + 1
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            //console.log("Computer won!")
            computerScore = computerScore + 1
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            //console.log("Computer won!")
            myScore = myScore + 1
        } 
    }
    
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
    playGame()
}

console.log(myScore)
console.log(computerScore)

if (myScore > computerScore) {
    console.log("You won!")
} else if (myScore < computerScore) {
    console.log("Computer won!")
} else {
    console.log("Draw")
}
