let userInput = 0;
let playerScore = 0;
let compScore = 0;
let gameCount = 0;

game();

function game() {
    while (compScore < 5 && playerScore < 5) {
        let userChoice = playerSelection();
        let compChoice = computerChoice();
        if(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
            playRound(compChoice, userChoice);
            console.log('You played ' + gameCount + ' games. The score is currently Computer - ' + compScore + ', Player - ' + playerScore);
        } else {
            alert('Pick rock, paper, or scissors ONLY.');
        }
    } 
}

function playerSelection() {
    userInput = prompt('Rock, Paper, or Scissors?');
    let userChoice = userInput.toLowerCase();
    return userChoice;
}

function computerChoice() {
    /*https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript*/
    /* generates a random number from 1 to 3 */
    let compChoice = Math.floor(Math.random() * 3) + 1;
    console.log(compChoice);
    return compChoice;
}

function playRound(compPick, userPick) {
    switch (compPick) {
        case 1:
            /*rock*/ 
            switch(userPick) {
                case 'rock':
                    console.log('It is a tie!');
                    break;
                case 'paper':
                    console.log('The computer picked rock. You win!');
                    ++playerScore;
                    break;
                case 'scissors':
                    console.log('The computer picked rock. You lose!');
                    ++compScore;
                    break;
            }
            gameCount++;
            break;
        case 2:
            /*paper*/
            switch(userPick) {
                case 'rock':
                    console.log('The computer picked paper. You lose!');
                    ++compScore;
                    break;
                case 'paper':
                    console.log('It is a tie!');
                    break;
                case 'scissors':
                    console.log('The computer picked paper. You win!');
                    ++playerScore;
                    break;
            }
            gameCount++;
            break;
        case 3:
            /*scissors*/
            switch(userPick) {
                case 'rock':
                    console.log('The computer picked scissors. You win!');
                    ++playerScore;
                    break;
                case 'paper':
                    console.log('The computer picked scissors. You lose!');
                    ++compScore;
                    break;
                case 'scissors':
                    console.log('It is a tie!')
                    break;
            }
            gameCount++;
            break;
    }
    
}