const startGameBtn = document.getElementById('start-game-btn');

//creating global constant to avoid typo error
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE= ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase()
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE
    }
    return selection;
};

const getComputerChoice = function(){
    const randomValue = Math.random(); //inbuilt function that selects random value
    if(randomValue < 0.34){
        return ROCK;
    }else if(randomValue < 0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
};
 
const getWinner = (cChoice, pChoice) => 
    cChoice === pChoice ? RESULT_DRAW : 
    cChoice === ROCK && pChoice === PAPER || 
    cChoice=== PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS




startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is Starting...');
    const playerChoice= getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, so you `;
    if (winner === RESULT_DRAW){
        message = message + 'had a draw..!';
    } else if(winner === RESULT_PLAYER_WINS){
        message = message + 'won.';
    }else{
        message = message + 'lost.';
    }
      
    alert(message);
    gameIsRunning = false;
});