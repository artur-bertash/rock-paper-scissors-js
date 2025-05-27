

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    switch (randomNumber) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
        default:
            return "Error"
    }
}
function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors: ")
    return choice;
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i}:`)
        const human = getHumanChoice()
        const computer = getComputerChoice()
        playRound(human, computer)
    }

    console.log("\nFinal Result:");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game.");
    } else {
        console.log("It's a draw!");
    }


    function playRound(humanChoice, computerChoice) {
        const humanChoiceLowerCase = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) {
            console.log("It is a tie")
        } else if (
            (humanChoiceLowerCase === "rock" && computerChoice === "scissors") ||
            (humanChoiceLowerCase === "scissors" && computerChoice === "paper") ||
            (humanChoiceLowerCase === "paper" && computerChoice === "rock")
        ) {
            console.log("You win!");
            humanScore++
        } else {
            console.log("You lose!");
            computerScore++
        }
    }
}
playGame()
