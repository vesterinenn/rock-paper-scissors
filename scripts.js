let ran = Math.floor(Math.random() * 3);

function getComputerChoice(ran){
    if(ran == 0){
        return "rock";
    }
    else if(ran == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let computerSelection = getComputerChoice(ran);
let playerSelection = prompt("Choose rock, paper or scissors: ").toLowerCase();

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! " + playerSelection + " wins " + computerSelection;
    }
    else if(computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper"){
        return "You loose! " + computerSelection + " wins " + playerSelection;
    }
    else{
        return "Something went wrong :(";
    }
}

console.log(playRound(playerSelection, computerSelection));