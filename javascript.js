var p1Button= document.querySelector("#p1");
var p2Button= document.querySelector("#p2");
var h1= document.querySelector(".p1-score");
var h2= document.querySelector(".p2-score");
var maxScore= document.querySelector("input");
var maximumScore= document.querySelector("#maximumScore");
var numInput= document.querySelector("#winningScore");
var reset= document.querySelector("#reset");
var p1Score=0;
var p2Score=0;
var gameOver= false;
var winningScore= parseInt(numInput.value);;

p1Button.addEventListener("click", function(){
    if(!gameOver)
    {
        p1Score++;
        if(p1Score=== winningScore)
        {
            h1.classList.add("winner");
            gameOver= true;
        }
        h1.textContent= p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver)
    {
        p2Score++;
        if(p2Score=== winningScore)
        {
            h2.classList.add("winner");
            gameOver= true;
        }
        h2.textContent= p2Score;
    }
});

function resetScreen(){
    p1Score= 0;
    p2Score= 0;
    h1.classList.remove("winner");
    h2.classList.remove("winner");
    gameOver= false;
    h1.textContent= p1Score;
    h2.textContent= p2Score;
    winningScore= parseInt(numInput.value);
}

reset.addEventListener("click",function(){
    resetScreen();
});


numInput.addEventListener("change",function(){
    winningScore= numInput.value;
    maximumScore.textContent=this.value;
    winningScore= parseInt(this.value);
    resetScreen();
});