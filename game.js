//global variables to use in multiple places
const moves = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let humanScore = 0;
//function that will return a random choice
function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)]
}

//function that will return human choice
function getHumanChoice(){
    let move = prompt("Rock, paper, or Scissors?");
    if(move == "rock" || move == "Rock"){
        return "Rock"
    }else if(move == "paper" || move == "Paper"){
        return "Paper"
    }else if(move == "scissors" || move == "Scissors"){
        return "Scissors"
    }else{
        console.warn("You havent picked a valid value a random one was assigned.")
        return moves[Math.floor(Math.random() * 3)]
    }
}
//winning logic
function playRound(computerChoice, humanChoice){
        if(computerChoice == humanChoice){
            console.log("Draw!")
        }else if((computerChoice=="Rock" && humanChoice!="Scissors")||(computerChoice=="Paper"&&humanChoice!="Rock") || (computerChoice=="Scissors"&&humanChoice!="Paper")){
            console.log("You win!");
            humanScore++;
        }else{
            console.log("You lose!");
            computerScore++;
        }
    }


//functions call and end message
for(let i=0;i<=5;i++){
    playRound(getComputerChoice(), getHumanChoice())
}
console.log("----------GAME OVER----------")
    console.log(`Your score: ${humanScore} Computer score: ${computerScore}`)
    if(humanScore>computerScore){
        console.log("You are great at this game!")
    }else if(computerScore>humanScore){
        console.log("You suck at this game!")
    }else{
        console.log("That was a close one!")
    }