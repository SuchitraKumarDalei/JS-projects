var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector('.score').textContent = score;
}
function makeBubble() {
    var clutter = "";
    for (var i = 1; i < 115; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * (10))}</div>`;
    }
    document.querySelector('#p_bottom').innerHTML = clutter;
}

function runTimer() {
    var timerLaps = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('.timerDiv').textContent = timer;
        } else {
            document.querySelector('#p_bottom').innerHTML = `<h1 id='scoreInP_bottom'>Game Over</h1>`;
            clearInterval(timerLaps);
        }
    }, 1000)
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('.hitval').textContent = hitrn;
}
document.querySelector('#p_bottom').addEventListener('click', (dets) => {
    var getNumber = Number(dets.target.textContent);
    if (getNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit()
    }
})
runTimer();
makeBubble();
getNewHit();