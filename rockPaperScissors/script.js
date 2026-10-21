let outcomeWin="You win";
let outcomeLoss="You Lose";
let outcomeTie="You Tie"
let playerWins=0;
let computerWins=0;
let displayMessage="";
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*3)
    console.log(randomNumber);
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

function getHumanChoice(){
   userChoice=prompt("Please enter Rock, Paper or Scissors")
   return userChoice;
    
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


function playRound(){
    whoWins(getHumanChoice(),getComputerChoice());
    if(displayMessage===outcomeWin){
        playerWins++;
    }
    else if(displayMessage===outcomeLoss){
        computerWins++;
    }
        console.log("You Chose: "+ userChoice);
        console.log("Computer chose: "+computerChoice);
        console.log(displayMessage);
        console.log("Your wins: "+playerWins+"  Computer Wins: "+computerWins)
}

function playGame(){
    i=1;
    while(i<=5){
        playRound();
        i++;
    }
}
gameLength=prompt("Round or Game?");
if(gameLength==="Round"){
playRound();
}
else if(gameLength==="Game"){
    playGame();
}