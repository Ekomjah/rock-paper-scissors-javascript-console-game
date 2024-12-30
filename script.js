function getHumanChoice(){
    let thechoice = prompt('What are You? Rock? Paper?? Scissors???').toLowerCase()
    if (thechoice === 'rock' || thechoice === 'paper' || thechoice === 'scissors') {
        console.log( 'You are '+ thechoice + '' );
        return thechoice.toUpperCase();
    }
    else if (thechoice === '') {
        alert('You don\'t know you? Ha!');
        return getHumanChoice();
    }
    else if (! ((thechoice === 'rock' ) || (thechoice === 'paper' ) ||(thechoice === 'scissors' ))) {
        alert('Invalid choice! Please choose either \'rock\', \'paper\', or \'scissors\'.');
        return getHumanChoice();
    }
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
    console.log( 'Computer is '+ theChoice +'')
    alert( 'Computer is '+ theChoice +'')
    return theChoice
}


let humanScore = 0;
let computerScore = 0;


// const humanSelection = getHumanChoice();
// // console.log( `You are ${humanSelection}`);

// const computerSelection = getComputerChoice();
// // console.log( `Computer is ${computerSelection}`)

function playRound(humanChoice , computerChoice) {
 humanChoice = humanChoice.toUpperCase();
computerChoice = computerChoice.toUpperCase();

    if (humanChoice == computerChoice){
        computerScore++ ;
        humanScore++ ;
        alert('Its a tie!');
        console.log('Its a tie!');
    }

    else if( (humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'scissors' && computerChoice === 'paper') || 
             (humanChoice === 'paper' && computerChoice === 'rock') ){
                humanScore++;
        alert('You win!!  '+ humanChoice +' defeats '+ computerChoice +' ' );
        console.log('You win!! '+ humanChoice +' defeats '+ computerChoice +' ') ;
    }

    else if (!( (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') || 
    (humanChoice === 'paper' && computerChoice === 'rock') )) {
        computerScore++;      
         alert('You lost!! '+ computerChoice +' beats you, '+ humanChoice +' ' );         
        console.log('You lost!!  '+ computerChoice +' beats you, '+ humanChoice +' ') ;
    }

        // Display scores after each round
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        alert(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

let result;
 function playGame(){
    alert('Round 1')
    console.log('Round 1')
    result = playRound(getHumanChoice(), getComputerChoice())
    alert('Round 2')
   console.log('Round 2')
   result = playRound(getHumanChoice(), getComputerChoice())

   alert('Round 3')
   console.log('Round 3')
   result = playRound(getHumanChoice(), getComputerChoice())

   alert('Round 4')
   console.log('Round 4')
   result = playRound(getHumanChoice(), getComputerChoice())

   alert('Round 5')
   console.log('Round 5')    
   result = playRound(getHumanChoice(), getComputerChoice())

   if (humanScore > computerScore) {
       alert(`Game over! You win with a score of ${humanScore} to ${computerScore}`);
       console.log(`Game over! You win with a score of ${humanScore} to ${computerScore}`);
   } else if (humanScore < computerScore) {
    alert(`Game over! Computer wins with a score of ${computerScore} to ${humanScore}`);
    console.log(`Game over! Computer wins with a score of ${computerScore} to ${humanScore}`);
   } else {
    console.log(`Game over! It's a tie with a score of ${humanScore} to ${computerScore}`);
       alert(`Game over! It's a tie with a score of ${humanScore} to ${computerScore}`);
   }
 }

playGame()

