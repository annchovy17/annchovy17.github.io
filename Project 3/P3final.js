let rightNumb=Math.trunc(Math.random()*100+1);
console.log('Secret number is ' + rightNumb);

const userInput=document.querySelector('#userGuess');
const msg=document.querySelector('.msg');
const checkBtn=document.querySelector('.btn');

const previousGuess=document.querySelector('.history');
const midBox=document.querySelector('.middlerow');

let score=10;
let scoreSlot=document.querySelector('.scoreSlot');
let highScore=document.querySelector('.highScore');
const resetBtn=document.querySelector('.resetBtn');
const highestScore=[];

checkBtn.addEventListener('click',function(){
    guessCheck()
})

function guessCheck(){
    const userGuess=Number(userInput.value);
    
    if (!Number(userInput.value) || Number(userInput.value)<1 || Number(userInput.value)>100){
        msg.textContent="You can only enter numbers between 1 and 100";
        document.getElementById("shake").style.animation = "horizontal-shaking 1s 2"; 

    }
    
    else if (Number(userInput.value)===rightNumb){
        highestScore.push(score);
        highScoreUpdate();
        winner.textContent='Congrats! You win!';
        msg.textContent='Your guess was correct';
        midBox.style.backgroundColor='red';
        userInput.remove();
        checkBtn.remove();
        playAgain = document.createElement('button');
        playAgain.textContent = 'Start new game';
        document.body.append(playAgain);
        playAgain.addEventListener('click', newGame);
    }

    else {
        previousGuess.textContent+=`${userGuess} \n`;
        score--;
        scoreSlot.textContent=`${score}`;

        if (score===10){
            previousGuess.textContent="Guess History \n";
        }

        else if (score===0){
            userInput.remove();
            checkBtn.remove();
            playAgain = document.createElement('button');
            playAgain.textContent = 'Start new game';
            document.body.append(playAgain);
            playAgain.addEventListener('click', newGame);
            msg.textContent="Sorry, game over";
        }

        else {

        if (Number(userInput.value)>rightNumb){
            msg.textContent="Hint: The secret number is lower";}

        else if (userGuess<rightNumb){
            msg.textContent="Hint: The secret number is higher";}

        }}

        userInput.value='';
    }


function highScoreUpdate(){
    highestScore.sort(function(a,b){return b-a});
    highScore.textContent=highestScore[0];
}


function newGame(){
        document.location.reload()
}
resetBtn.addEventListener('click',function(){
    newGame()
})
