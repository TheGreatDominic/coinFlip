var bothPic, headsPic, tailsPic, flip, reset, x, flipResult;
var headsScore, tailsScore, headsCounter, tailsCounter, audio;
var totalCounter, totalFlips;

bothPic = document.getElementById("bothPic");
headsPic = document.getElementById("headsPic");
tailsPic = document.getElementById("tailsPic");
flip = document.getElementById("flip");
reset = document.getElementById("reset");
x = "";
flipResult = document.getElementById("flipResult");
headsScore = document.getElementById("headsScore");
tailsScore = document.getElementById("tailsScore");
headsCounter = 0;
tailsCounter = 0;
audio = new Audio("sounds/coinflip.mp3");
totalCounter = 0;
totalFlips = document.getElementById("totalFlips");



function flipFunc()
{

    totalCounter++;

    totalFlips.innerHTML = "Total Flips: " + totalCounter;

    audio.play();

    x = Math.floor(Math.random() * 100);

    if(x <= 49)
    {//starting heads flip
        bothPic.style.display = "none";
        headsPic.style.display = "block";
        tailsPic.style.display = "none";
        flip.style.display = "none";
        reset.style.display = "block";
        flipResult.innerHTML = "It's Heads!";
        headsCounter++;
        headsScore.innerHTML = "Number of Heads: " + headsCounter;  
    }//end heads flip
    else
    {//start tails flip
        bothPic.style.display = "none";
        headsPic.style.display = "none";
        tailsPic.style.display = "block";
        flip.style.display = "none";
        reset.style.display = "block";
        flipResult.innerHTML = "It's Tails!"
        tailsCounter++;
        tailsScore.innerHTML = "Number of Tails: " + tailsCounter;  
    }//end tails flip

    headsPercent.innerHTML = "Percent Heads: " + ((headsCounter/totalCounter) * 100).toFixed(0) + "%";
    tailsPercent.innerHTML = "Percent Tails: " + ((tailsCounter/totalCounter) * 100).toFixed(0) + "%";
};

function resetFunc()
{
    bothPic.style.display = "block";
    headsPic.style.display = "none";
    tailsPic.style.display = "none";
    flip.style.display = "block";
    reset.style.display = "none";
    x = "";
    flipResult.innerHTML = "";
};