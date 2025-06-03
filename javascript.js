

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
    let numberOfRounds = 0;
    // for (let i = 0; i < 5; i++) {
    //     console.log(`\nRound ${i}:`)
    //     const human = getHumanChoice()
    //     const computer = getComputerChoice()
    //     playRound(human, computer)
    // }
    const buttons = document.querySelectorAll(".container button")
    const result = document.querySelector(".result")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (numberOfRounds >= 5) return;
            console.log(button.id)
            const humanChoice = button.id
            const computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
            numberOfRounds++

            if (numberOfRounds === 5) {
                if (humanScore > computerScore) {
                    result.textContent = "You won the game!"
                } else if (humanScore < computerScore) {
                    result.textContent = "You lost the game!"
                } else {
                    result.textContent = "It is a tie!"
                }
            }
        })
    })



    function playRound(humanChoice, computerChoice) {
        const humanChoiceLowerCase = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) {
            console.log("It is a tie")
        } else if (
            (humanChoiceLowerCase === "rock" && computerChoice === "scissors") ||
            (humanChoiceLowerCase === "scissors" && computerChoice === "paper") ||
            (humanChoiceLowerCase === "paper" && computerChoice === "rock")
        ) {
            console.log("Round :" + numberOfRounds + " .You win!");
            humanScore++
        } else {
            console.log("Round :" + numberOfRounds + " .You lose!");
            computerScore++
        }
    }
}
playGame()
