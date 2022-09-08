let userInput = 0;
let playerScore = 0;
let compScore = 0;
let compOptions = Array('rock', 'paper', 'scissors');
let gameCount = 0;
const buttons = document.querySelectorAll('button');

const playBoard = document.querySelector('.playboard');
const compImg = document.createElement('img');
const playerImg = document.createElement('img');
compImg.classList.add('playImg');
playerImg.classList.add('playImg');

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

const endMess = document.querySelector('.result');

const gameBegin = document.querySelector('.result');

function playRound(e) {
    let userPick = this.classList.value;
    let compPick = computerChoice();
    updateImages(compPick, userPick);

    if (userPick === compPick) {
        resultMessage('tie');
    } else if (userPick === 'rock') {
        if (compPick === 'paper') {
            resultMessage('loss');
        } else {
            resultMessage('win');
        }
    } else if (userPick === 'paper') {
        if (compPick === 'rock') {
            resultMessage('win');
        } else {
            resultMessage('loss');
        }
    } else if (userPick === 'scissors') {
        if (compPick === 'paper') {
            resultMessage('win');
        } else {
            resultMessage('loss');
        }
    }
}

buttons.forEach(button => button.addEventListener('click', playRound));

function computerChoice() {
    return compOptions[Math.floor(Math.random() * compOptions.length)];
}

function updateImages(compPick, userPick) {
    compImg.src = './img/compimg/' + compPick + '.jpg';
    playerImg.src = './img/' + userPick + '.jpg';
    playBoard.appendChild(compImg);
    playBoard.appendChild(playerImg);
}

function resultMessage(resultMsg) {
    ++gameCount;
    if (compScore > 4 || playerScore > 4) {
        if (compScore > playerScore) {
            gameReset('The computer wins!');
        } else {
            gameReset('Congratulations! You win :)');
        }
    } else {
        if (resultMsg === 'win') {
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
}

function textUpdate() {
    msgContainer.appendChild(resContent);
    gameCtUpdate();
}

function gameCtUpdate() {
    gameCounter.textContent = 'You played ' + gameCount + ' games!';
    msgContainer.appendChild(gameCounter);
}

function scoreUpdate() {
    oppoScore.textContent = compScore;
    yourScore.textContent = playerScore;
    rightScore.appendChild(yourScore);
    leftScore.appendChild(oppoScore);
}

function gameReset(endMessage) {
    const finalMess = document.createElement('p');
    finalMess.textContent = endMessage;
    endMess.appendChild(finalMess);
    buttons.forEach(button => button.removeEventListener('click', playRound, false));
    gameCtUpdate();
    gameStart();
}

function gameStart() {
    const gameButton = document.createElement('button');
    gameButton.classList.add('gameButton');
    gameButton.textContent = 'Restart Game';
    gameBegin.appendChild(gameButton);
    gameButton.addEventListener('click', zeroSet);
}

function zeroSet(e) {
    removeAllChildNodes(msgContainer);
    removeAllChildNodes(endMess);
    removeAllChildNodes(gameBegin);
    playerScore = 0;
    compScore = 0;
    gameCount = 0;
    scoreUpdate();
    buttons.forEach(button => button.addEventListener('click', playRound));
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}