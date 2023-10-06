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

let playerSelection = prompt("Choose rock, paper or scissors: ").toLowerCase();

function playRound(playerSelection, computerSelection){

}