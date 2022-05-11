var startButton = document.querySelector('#start-button')
var scoresButton = document.querySelector('#scores-button')
var questionArea = document.querySelector('#question-area')
var questionText = document.querySelector('#question')
var answerArea = document.querySelector('#answers')
var answerOne;
var answerTwo;
var answerThree;
var answerFour;

var timerDisplay;
var timeRemaining;
var timer;
var scoreDisplay;
var score = 60;

var currentQuestion = 0;
var selectedAnswer;
var answerSheet = [2, 1, 3, 3, 4, 4, 3]

var initialForm;
var boardScores = [];

// Create the timer and make it start running
// Should lose 10 seconds with each wrong guess
// Should end the game when it hits 0, triggers the initials screen

function startGame() {
    console.log('start');
    replaceStartButton();
    startTimer();
    questionOne();
}

// When game starts, a question should appear
// Question should appear with answers (4 multiple choice q's)
// If answer is correct, add 10 points to score
// If answer is wrong, -10s
// End of last question triggers the initials screen

function replaceStartButton() {
    startButton.remove();

    answerOne = document.createElement('li');
    answerOne.textContent = ('');
    answerArea.appendChild(answerOne);

    answerOne.addEventListener('click', function () {
        selectedAnswer = 1;
        checkAnswer();
    })

    answerTwo = document.createElement('li');
    answerTwo.textContent = ('');
    answerArea.appendChild(answerTwo);
    
    answerTwo.addEventListener('click', function () {
        selectedAnswer = 2;
        checkAnswer();
    })

    answerThree = document.createElement('li');
    answerThree.textContent = ('');
    answerArea.appendChild(answerThree);
    
    answerThree.addEventListener('click', function () {
        selectedAnswer = 3;
        checkAnswer();
    })

    answerFour = document.createElement('li');
    answerFour.textContent = ('');
    answerArea.appendChild(answerFour);

    answerFour.addEventListener('click', function () {
        selectedAnswer = 4;
        checkAnswer();
    })
    
    
}

function startTimer() {
    timeRemaining = 60;
    timerDisplay = document.createElement('h2');
    timerDisplay.textContent = ('Time Remaining: ' + timeRemaining);
    questionArea.appendChild(timerDisplay);
    scoreDisplay = document.createElement('h2');
    scoreDisplay.textContent = ('Score: ' + score);
    questionArea.appendChild(scoreDisplay);
    timer = setInterval(function() {
        timeRemaining--
        score--
        timerDisplay.textContent = ('Time Remaining: ' + timeRemaining);
        scoreDisplay.textContent = ('Score: ' + score);
        // add logic for game win stopping timer and adding to score
        
        if (timeRemaining <= 0 || currentQuestion == 7) {
            timeRemaining = 0;
            clearInterval(timer);
            timerDisplay.textContent = ('Time Remaining: ' + timeRemaining);
            endGame()
        }
        
    }, 1000);
}

function questionOne() {
    questionText.textContent = ("Question 1: What was the original name of JavaScript?")

    answerOne.textContent = 'Espresso';
    answerTwo.textContent = 'Mocha'
    answerThree.textContent = 'Latte'
    answerFour.textContent = 'DarkRoast'
}

function questionTwo() {
    questionText.textContent = ("Question 2: Who is credited with the creation of the first ever JavaScript?")

    answerOne.textContent = 'Brendan Eich';
    answerTwo.textContent = 'Lars Ulrich'
    answerThree.textContent = 'Nicholas De Palma'
    answerFour.textContent = 'Patrick Mahomes'
}

function questionThree() {
    questionText.textContent = ("Question 3: What year was JavaScript created?")

    answerOne.textContent = '1989';
    answerTwo.textContent = '1991'
    answerThree.textContent = '1995'
    answerFour.textContent = '2001'
}

function questionFour() {
    questionText.textContent = ("Question 4: Which of the following is an API that can be used to assist in writing JavaScript?")

    answerOne.textContent = 'Bootstrap';
    answerTwo.textContent = 'jsAid'
    answerThree.textContent = 'jQuery'
    answerFour.textContent = 'laCroix'
}

function questionFour() {
    questionText.textContent = ("Question 4: Which of the following is an API that can be used to assist in writing JavaScript?")

    answerOne.textContent = 'Bootstrap';
    answerTwo.textContent = 'jsAid'
    answerThree.textContent = 'jQuery'
    answerFour.textContent = 'laCroix'
}

function questionFive() {
    questionText.textContent = ("Question 5: What company is in charge of maintaining JavaScript?")

    answerOne.textContent = 'Apple';
    answerTwo.textContent = 'IBM'
    answerThree.textContent = 'AMD'
    answerFour.textContent = 'ECMA'
}

function questionSix() {
    questionText.textContent = ("Question 6: Which major browser does not support JavaScript?")

    answerOne.textContent = 'Safari';
    answerTwo.textContent = 'Internet Explorer'
    answerThree.textContent = 'Firefox'
    answerFour.textContent = 'All major browsers support JS'
}

function questionSeven() {
    questionText.textContent = ("Question 7: JavaScript is one of the three main languages used on the internet. What are the other two?")

    answerOne.textContent = 'Java and HTML';
    answerTwo.textContent = 'Python and CSS'
    answerThree.textContent = 'HTML and CSS'
    answerFour.textContent = 'Java and Python'
}


function checkAnswer() {
    if (selectedAnswer == answerSheet[currentQuestion]) {
        correctAnswer()
    } else {
        wrongAnswer()
    }

    if (currentQuestion == 0) {
        currentQuestion++
        questionTwo()
    } else if (currentQuestion == 1) {
        currentQuestion++
        questionThree()
    } else if ( currentQuestion == 2) {
        currentQuestion++
        questionFour()
    } else if ( currentQuestion == 3) {
        currentQuestion++
        questionFive()
    } else if ( currentQuestion == 4) {
        currentQuestion++
        questionSix()
    } else if ( currentQuestion == 5) {
        currentQuestion++
        questionSeven()
    } else {
        currentQuestion++
        score++
        // endGame()
    }
}

function correctAnswer() {
    console.log('correct answer');
    score = score + 10;
    scoreDisplay.textContent = ('Score: ' + score);
}

function wrongAnswer() {
    console.log('wrong answer!');
    if (timeRemaining < 10) {
        score = score - timeRemaining + 1;
    } else {
        score = score - 10;
    }
    scoreDisplay.textContent = ('Score: ' + score);
    timeRemaining = timeRemaining - 10;

}

function endGame() {
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    timerDisplay.remove();
    questionText.textContent = 'Save your score, enter your initials below!';
    initialForm = document.createElement('input');
    initialForm.type = 'text';
    questionArea.appendChild(initialForm)
    initialForm.style = 'max-width: 100px; align-self: center; background-color: white; color: black; border-color: var(--purple);'
    initialForm.addEventListener('keypress', function(event){
        if (event.key === 'Enter' && initialForm.value !== "") {
            var userInitials = initialForm.value;
            var finalScores = {
                initials: userInitials.trim(),
                finalScore: score
            }
            boardScores.push(finalScores);
            boardScores = boardScores.concat(JSON.parse(localStorage.getItem('finalScores')));

            localStorage.setItem('finalScores', JSON.stringify(boardScores));
            highScores()
        }
    })
}

function highScores() {
    if (initialForm !== undefined) {
        initialForm.remove()
    }
    if (answerOne !== undefined) {
        answerOne.remove();
    }
    if (answerTwo !== undefined) {
        answerTwo.remove();
    }
    if (answerThree !== undefined) {
        answerThree.remove();
    }
    if (answerFour !== undefined) {
        answerFour.remove();
    }
    if (timerDisplay !== undefined) {
        timerDisplay.remove();
    }
    if (startButton !== undefined) {
        startButton.remove();
    }
    if (scoreDisplay !== undefined) {
        scoreDisplay.remove();
    }
    questionText.textContent = 'High Scores'
    var storedScores = JSON.parse(localStorage.getItem('finalScores'))
    console.log(storedScores);
    if (storedScores !== null) {
        boardScores = storedScores;
    }
    console.log(boardScores);
    // Getting rid of a pesky null that keeps going into the memory here and throwing everything off
    var filtered = boardScores.filter(function (el) {
        return el != null;
    })
    boardScores = filtered;
    console.log(boardScores);
    boardScores.sort(sortBoard)
    console.log(boardScores);
    for (let i = 0; i < boardScores.length; i++) {
        var nameScore = JSON.stringify(boardScores[i], null, 5)
        leaders = document.createElement('li');
        leaders.textContent = (nameScore);
        answerArea.appendChild(leaders);
    }
}

function sortBoard (a, b) {
    if (a.finalScore < b.finalScore) {
        return 1;
    } else if (a.finalScore > b.finalScore) {
        return -1;
    } else {
        return 0;
    }
}


// End of game allows initials to be entered
// Displays final score
// Saves the score to the user's browser and ranks it on the high score page

// High score page is opened after initials are submitted or when the high scores button is pushed
// saved locally
// Has a clear history button for the high scores

// Create a start button that should initiate the timer and question 1

startButton.addEventListener("click", startGame)
scoresButton.addEventListener("click", highScores)