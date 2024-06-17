const moves = ["Rock", "Paper", "Scissors"]
//function that will return a random choice
function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)]
}

//function that will return human choice
function getHumanChoice(move){
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

console.log(getHumanChoice(prompt("Rock, paper, or scissors?")))