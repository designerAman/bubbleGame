var score = document.querySelector('#score');
var time = document.querySelector('#time');
var guess = document.querySelector('#guess');
var bubbles = document.querySelector('#bubbles');
var reset = document.querySelector('#reset');
var yourScore;

score.innerHTML = '0';
time.innerHTML = '60';


function getBubbles() {
    for (var i = 1; i <= 65; i++) {
        var rraannddoomm = Math.floor(Math.random() * 10);
        var template = '<div class="bubble">' + rraannddoomm + '</div>';
        bubbles.innerHTML += template;
    }
}
getBubbles();


//random guess number code start
function setGuess() {
    var random = Math.floor(Math.random() * 10);
    guess.textContent = random;
}
setGuess();
//random guess number code ends
//timer code start
setInterval(function () {
    var currentTimer = time.textContent;
    currentTimer = Number(currentTimer);
    if (currentTimer > 0) {
        currentTimer = currentTimer - 1;
        time.textContent = currentTimer;
    } else {
        bubbles.innerHTML = '<h1>!GAME OVER! <br><br><br>YOUR SCORE: ' + yourScore + '</h1>';
    }
}, 1000);
//timer code ends

bubbles.addEventListener('click', function (event) {
    var clickedBubble = Number(event.target.innerText);
    var guessValue = Number(guess.innerText);


    if (clickedBubble === guessValue) {
        yourScore = Number(score.innerText);
        yourScore += 10;
        score.innerText = yourScore;
        bubbles.innerHTML = '';
        setGuess();
        getBubbles();
    } else {
        bubbles.innerHTML = '';
        getBubbles();
    }
});



reset.addEventListener('click', function () {
    score.innerHTML = '0';
    time.innerHTML = '60';
    bubbles.innerHTML = '';
    setGuess();
    getBubbles();
})