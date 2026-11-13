let outcomeWin="You win";
let outcomeLoss="You Lose";
let outcomeTie="You Tie"
let playerWins=0;
let computerWins=0;
let tieCounter=0;
let displayMessage="";
const rockButton=document.getElementById('rockButton');
const paperButton=document.getElementById('paperButton');
const scissorButton=document.getElementById('scissorButton');
const winDisplay=document.querySelector(".wins");
const tieDisplay=document.querySelector(".ties");
const lossDisplay=document.querySelector(".losses");

rockButton.addEventListener("click",() => playRound("Rock"));
paperButton.addEventListener("click",() => playRound("Paper"));
scissorButton.addEventListener("click",() => playRound("Scissors"));




function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*3)
if(randomNumber===0){
    computerChoice="Rock"
}
else if (randomNumber===1){
    computerChoice="Paper"
}
else if(randomNumber===2){
    computerChoice="Scissors"
}
    return computerChoice
}


function getHumanChoice(choice){
   return choice;
}

function whoWins(computerChoice, userChoice){
    switch(true){
    case (userChoice==="Rock"):
        if(computerChoice==="Rock"){
            displayMessage=outcomeTie;
            break;
        }
        else if(computerChoice==="Paper"){
            displayMessage=outcomeLoss;
            break;
        }
         else if(computerChoice==="Scissors"){
            displayMessage=outcomeWin;
            break;
        }
    case(userChoice==="Paper"):
        if(computerChoice==="Rock"){
            displayMessage=outcomeWin;
            break;
        }
        else if(computerChoice==="Paper"){
            displayMessage=outcomeTie;
            break;
        }
         else if(computerChoice==="Scissors"){
            displayMessage=outcomeLoss;
            break;
         }
    case(userChoice==="Scissors"):
        if(computerChoice==="Rock"){
            displayMessage=outcomeLoss;
            break;
        }
        else if(computerChoice==="Paper"){
            displayMessage=outcomeWin;
            break;
        }
         else if(computerChoice==="Scissors"){
            displayMessage=outcomeTie;
            break;
        }
        
}
    return displayMessage;
}


function playRound(userChoice){
    whoWins(userChoice,getComputerChoice());
    if(displayMessage===outcomeWin){
        playerWins++;
    }
    else if(displayMessage===outcomeLoss){
        computerWins++;
    }
    else if(displayMessage===outcomeTie){
        tieCounter++;
    }
    if(playerWins===5){
        winDisplay.textContent="YOU WIN";
       lossDisplay.textContent="YOU WIN";
       tieDisplay.textContent="YOU WIN";
       playerWins=0;
       computerWins=0;
       tieCounter=0;
    }
        else if(computerWins===5){
        winDisplay.textContent="YOU LOSE";
       lossDisplay.textContent="YOU LOSE";
       tieDisplay.textContent="YOU LOSE";
       playerWins=0;
       computerWins=0;
       tieCounter=0;
    }
    else{
       winDisplay.textContent="Wins: "+ playerWins;
       lossDisplay.textContent="Losses: " + computerWins;
       tieDisplay.textContent="Ties: "+tieCounter;
    }
}
