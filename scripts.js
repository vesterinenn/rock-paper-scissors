function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
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
                playerScore++;
                return "You win! " + playerSelection + " wins " + computerSelection;
            }      
            else if(computerSelection == "rock" && playerSelection == "scissors" ||
            computerSelection == "paper" && playerSelection == "rock" ||
            computerSelection == "scissors" && playerSelection == "paper"){
                computerScore++;
                return "You loose! " + computerSelection + " wins " + playerSelection;
            }
            else{
                i--;
                return "Something went wrong :( try again";
            }
        }
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore){
        console.log("Your score: " + playerScore + "\nComputer score: " + computerScore + "\nYou win!");
    }
    else if(playerScore == computerScore){
        console.log("Your score: " + playerScore + "\nComputer score: " + computerScore + "\nIt's a tie!");
    }
    else{
        console.log("Your score: " + playerScore + "\nComputer score: " + computerScore + "\nComputer wins :(");
    }
}

game();
