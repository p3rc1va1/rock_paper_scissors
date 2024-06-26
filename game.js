//after UI
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const scoreHuman = document.querySelector("#scoreTableHuman")
const scoreComputer = document.querySelector("#scoreTableComputer")
let score = 0;

const actionContainer = document.querySelector("#actionContainer")
rock.addEventListener("click",()=>{
    playRound(getComputerChoice(),"Rock")
    score+=1

})

paper.addEventListener("click",()=>{
    playRound(getComputerChoice(),"Paper")
    score+=1
})

scissors.addEventListener("click",()=>{
    playRound(getComputerChoice(),"Scissors")
    score+=1
})

if(score ==5){
    
}




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
    const result = document.createElement("p");
        if(score!=5){
            if(computerChoice == humanChoice){
                console.log("Draw!");
                result.textContent = `You: ${humanChoice} + Computer: ${computerChoice} = Draw!`;
            }else if((computerChoice=="Rock" && humanChoice!="Scissors")||(computerChoice=="Paper"&&humanChoice!="Rock") || (computerChoice=="Scissors"&&humanChoice!="Paper")){
                console.log("You win!");
                result.textContent = `You: ${humanChoice} + Computer: ${computerChoice} = You win!`;
                result.style.color="green";
                scoreHuman.textContent = Number(scoreHuman.textContent) +1
                humanScore++;
            }else{
                console.log("You lose!");
                result.textContent = `You: ${humanChoice} + Computer: ${computerChoice} = You lose!`;
                result.style.color="red";
                scoreComputer.textContent = Number(scoreComputer.textContent) +1
                computerScore++;
            }
            

        }else{
            score=0;
            const allChildren = document.querySelectorAll(".results")
            for(let child of allChildren){
                actionContainer.removeChild(child)
            }
            if(humanScore>computerScore){
                result.textContent = "Game over: You are great at this game!"
            }else if(computerScore>humanScore){
                result.textContent = "Game over: You suck at this game!"
            }else{
                result.textContent = "Game over: That was a close one!"
            }
            result.style.color="teal";
        }
        result.classList.add("results")
        actionContainer.appendChild(result)
}