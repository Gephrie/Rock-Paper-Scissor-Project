// Win Loss Vars

let w = ""
let l = ""

// Prompt for player to make choice and convert to upperCase
    let playerChoice = prompt("Type Rock, Paper, or Scissors");

    let playerSelection = playerChoice.toUpperCase(); 


// Select choice for Computer ( getComputerChoice creates value from 1 - 3, and then we translate to String)
    
    function getComputerChoice(min,max) {
        return Math.floor(Math.random() * (max - min +1) +min)
    }

    let setComputerChoice = getComputerChoice(1,3);

    if (setComputerChoice == 1) {
            computerSelection = "ROCK"
        } 
        else if (setComputerChoice == 2) {
            computerSelection = "PAPER"
        }
        else {
            computerSelection = "SCISSORS"
        };


// Plays 1 round of RPS and compares playerSelection to computerSelection to see who wins and returns string
    function playRound (playerSelection, computerSelection) {
        if (playerSelection === "ROCK" & computerSelection === "ROCK") { 
            return "Its a Draw" 
        }
        else if (playerSelection == "ROCK" & computerSelection == "PAPER"){
            return "oh no! PAPER beats ROCK!" 
        }
        else if (playerSelection == "ROCK" & computerSelection == "SCISSORS"){
            return "ROCK BEATS SCISSORS!"  + w++
        }
        else if (playerSelection == "PAPER" & computerSelection == "ROCK" ){
            return "PAPER BEATS ROCK!" + w++
        }
        else if (playerSelection == "PAPER" & computerSelection == "SCISSORS" ){
            return "OH NO! SCRISSORS BEATS PAPER!" + l++
        }
        else if (playerSelection == "PAPER" & computerSelection == "PAPER" ){
            return "A DRAW!"
        }
        else if (playerSelection == "SCISSORS" & computerSelection == "SCISSORS" ){
            return "A DRAW!"
        }
        else if (playerSelection == "SCISSORS" & computerSelection == "ROCK" ){
            return "OH NO! ROCK BEATS SCISSORS" + l++
        }
        else if (playerSelection == "SCISSORS" & computerSelection == "PAPER" ){
            return "SCISSORS BEAT PAPER!" + w++
        }
        else {return "OH SNAP IT BROKE"}
    }


// For loop that goes through 5 games
function game() {
    for (let i = 0; i < 5; i++) {
    if (i < 5 ) { let setComputerChoice = getComputerChoice(1,3);
    
        if (setComputerChoice == 1) {
                computerSelection = "ROCK"
            } 
            else if (setComputerChoice == 2) {
                computerSelection = "PAPER"
            }
            else {
                computerSelection = "SCISSORS"
            };
             playerChoice = prompt("Type Rock, Paper, or Scissors");
             playerSelection = playerChoice.toUpperCase(); 
             console.log(playRound(playerSelection, computerSelection)) }
    else { return "Time to count Score!"
    }
}}

// Call game function
game();

// Function to calculate win or loss of game()
function tally(w , l) {
    if (w > l) {return "You WON!"}
    else if (w === l) {return "Its a Draw!"}
    else {return "You Lost!"}
}

// log tally result to console
console.log(tally())