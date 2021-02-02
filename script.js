'use strict';

// generating a rundom number between 1 and 20
let myNum = Math.trunc(Math.random() * 20) + 1;
console.log(myNum);

let points = 20;
let highScore = 0;

// The score
let score = document.querySelector('.score');

// The Random Number
let result = document.querySelector('.number');

// Check Button
let checkBtn = document.querySelector('.check');

// Message if too high or too low
let message = document.querySelector('.message');

checkBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // The input
    let guess = Number(document.querySelector('.guess').value);

    // When ther is no number in the input
    if (!guess) {
        message.innerHTML = 'No Number!!!'

        // When Guess Is Wrong
    } else if (myNum !== guess) {
        if (points > 1) {
            message.innerHTML = guess > myNum ? 'Too High' : 'Too Low';
            points--;
            score.textContent = points;
        } else {
            message.innerHTML = 'You Lost The Game!';
            score.textContent = '0';
            document.body.style.backgroundColor = 'red';
        }
        // When the player Wins
    } else if (myNum === guess) {
        message.innerHTML = 'You Win!!';
        result.innerHTML = myNum;
        document.body.style.backgroundColor = 'green';
        // High Score
        if (points > highScore) {
            highScore = points;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
});

// Again Button

let againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
    // Generate new random number
    myNum = Math.trunc(Math.random() * 20) + 1;
    console.log(myNum);
    // Make everything back to default
    points = 20;
    message.innerHTML = 'Start guessing...';
    score.innerHTML = 20;
    document.body.style.backgroundColor = '#222';
    result.innerHTML = '?';
    document.querySelector('.guess').value = '';
});



