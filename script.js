function fiveRounds(){
    let playerVCount = 0;
    let computerVCount = 0;
    let state = 0;
    
    for(let i = 1; i < 5; i++){
        state = playGame();
        if(state == 1){
            playerVCount++;
        }else if(state == 2){
            computerVCount++;
        }else{
            
        }
        console.log(`current score is P = ${playerVCount} : C = ${computerVCount}`)
    }  
    alert(`final score... Player: ${playerVCount}, Computer: ${computerVCount}`);
}

function playGame(){
    let playerVictory = false;
    let playerInput = prompt("Rock, Paper or Scissors? : ").toString().toLowerCase();
    
    if(playerInput != "rock" && playerInput != "paper" && playerInput != "scissors"){
        alert("Invalid Choice! Please enter rock, paper, or scissors");
        return;
    }else{
        console.log(`player plays: ${playerInput}`);
    }

    let computeInput = comHands();

    if(playerInput == computeInput){
        alert("Draw!");
        return 3;
    }else{
        if(playerInput = "rock"){
            if(computeInput == "scissors"){
                playerVictory = true;
                declaration(playerVictory, playerInput, computeInput);
                return 1;
            }else{
                declaration(playerVictory, playerInput, computeInput);
                return 2;
            }
        }else if(playerInput == "paper"){
            if(computeInput == "rock"){
                playerVictory = true;
                declaration(playerVictory, playerInput, computeInput);
                return 1;
            }else{
                declaration(playerVictory, playerInput, computeInput);
                return 2;
            } 
        }else{
            if(computeInput == "paper"){
                playerVictory = true;
                declaration(playerVictory, playerInput, computeInput);
                return 1;
            }else{
                declaration(playerVictory, playerInput, computeInput);
                return 2;
            } 
        }
    }
}

function comHands(){
    let computerChoice = Math.random() * 100;
    let computeInput;
    if(computerChoice <= 33){
        computeInput = "rock";
    }else if(computerChoice > 33 && computerChoice <= 66){
        computeInput = "paper";
    }else{
        computeInput = "scissors";
    }
    console.log(`computer plays: ${computeInput}`);
    return computeInput;
}

function declaration(playerVictory, playerInput, computeInput){
    if (playerVictory == true){
        alert(`You win! You played ${playerInput}, computer played ${computeInput}`);
    } else{
        alert(`Better luck next time! You played ${playerInput}, computer played ${computeInput}`);
    }
}

