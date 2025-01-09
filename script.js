const section = document.querySelector("section");
const aside = document.querySelector("aside");
const inputs = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
    inputs.forEach((input) => {
        input.addEventListener("click", () => {
            // Clear previous game results
            section.textContent = "";
            aside.textContent = "";

            let humanChoice = input.value;
            const humanPara = document.createElement("p");
            humanPara.textContent = `You are ${humanChoice}`;
            section.appendChild(humanPara);

           
            const computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
        });
    });
}

function getComputerChoice(){
    let choices = Math.floor(Math.random()*3)
    let theChoice;
    if (choices === 0){
        theChoice = 'Rock'
    }
    else if (choices === 1){
        theChoice = 'Paper'
    }
    else if (choices === 2){
        theChoice = 'Scissors'
    }

    let status = 'Computer is '+ theChoice +'';
    const para = document.createElement("p");
    section.appendChild(para);
    para.textContent = status; 
    return theChoice;
}


function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        result = `You win! ${humanChoice} defeats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    const resultPara = document.createElement("p");
    resultPara.textContent = result;
    section.appendChild(resultPara);


    const scoreDiv = document.createElement("div");
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    aside.appendChild(scoreDiv);

    checkWinner();
}

// Function to check for the game winner
function checkWinner() {
    if (humanScore === 5 && computerScore < 5) {
        alert("You win the game!");
        resetGame("Winner!");
    } else if (computerScore === 5 && humanScore < 5) {
        alert("You lose the game!");
        resetGame("Loser!");
    } else if (humanScore === 5 && computerScore === 5) {
        alert("It's a tie!");
        resetGame("A tie!");
    }
}

// Function to reset the game
function resetGame(message) {
    const finalDiv = document.createElement("div");
    finalDiv.textContent = message;
    document.body.appendChild(finalDiv);

    humanScore = 0;
    computerScore = 0;
    section.innerHTML = "";
    aside.innerHTML = "";
}

// Start the game
getHumanChoice();


