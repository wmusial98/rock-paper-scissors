let userInput = 0;
let playerScore = 0;
let compScore = 0;
let compOptions = Array('rock', 'paper', 'scissors');
let gameCount = 0;
const buttons = document.querySelectorAll('button');

const msgContainer = document.querySelector('.result');
const resContent = document.createElement('p');
resContent.classList.add('resContent');
resContent.textContent = '';
const gameCounter = document.createElement('p');
gameCounter.classList.add('gameCounter');
gameCounter.textContent = '';

const rightScore = document.querySelector('.rightScore');
const leftScore = document.querySelector('.leftScore');
const oppoScore = document.createElement('div');
const yourScore = document.createElement('div');
oppoScore.classList.add('oppoScore');
yourScore.classList.add('yourScore');
oppoScore.textContent = '0';
yourScore.textContent = '0';
rightScore.appendChild(yourScore);
leftScore.appendChild(oppoScore);

function playRound(e) {
    let userPick = this.classList.value;
    let compPick = computerChoice();
    console.log(userPick, compPick);

    if(userPick === compPick) {
        resultMessage('tie');
    } else if (userPick === 'rock') {
        if(compPick === 'paper') {
            resultMessage('loss');
        } else {
            resultMessage('win');
        }
    } else if (userPick === 'paper') {
        if(compPick === 'rock') {
            resultMessage('win');
        } else {
            resultMessage('loss');
        }
    } else if (userPick === 'scissors') {
        if(compPick === 'paper') {
            resultMessage('win');
        } else {
            resultMessage('loss');
        }
    }
}

buttons.forEach(button => button.addEventListener('click', playRound));

function computerChoice() {
    return compOptions[Math.floor(Math.random()*compOptions.length)];
}

function resultMessage(resultMsg) {
    gameCount++;
    if(resultMsg === 'win') {
        playerScore++;
        resContent.textContent = 'You win!';
        scoreUpdate();
        textUpdate();
    } else if (resultMsg === 'loss') {
        compScore++;
        resContent.textContent = 'You lose!';
        scoreUpdate();
        textUpdate();
    } else if (resultMsg === 'tie') {
        resContent.textContent = 'You tied!';
        textUpdate();
    } 
}

function textUpdate() {
    gameCounter.textContent = 'You played ' + gameCount + ' games!';
    msgContainer.appendChild(resContent);
    msgContainer.appendChild(gameCounter);
}

function scoreUpdate() {
    oppoScore.textContent = compScore;
    yourScore.textContent = playerScore;
    rightScore.appendChild(yourScore);
    leftScore.appendChild(oppoScore);
}