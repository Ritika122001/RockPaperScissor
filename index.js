let pscore =0;
let cscore=0;

const playbtn = document.querySelector(".intro button");
const match = document.querySelector(".match");
const introscreen = document.querySelector(".intro");
const optionbtn = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");
const winner = document.querySelector(".winner");
const plyscore = document.querySelector(".player-score p");
const compscore = document.querySelector(".computer-score p");
const reset = document.querySelector(".resetbtn");
const startbtn = document.querySelector(".start");

// const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });


// const play = () => 
// {
	play();

function play()
{
	   playbtn.addEventListener("click", () => 
{
    
     introscreen.classList.add("fadeOut");
     match.classList.add("fadeIn");


});

}


// };



const computeroptions = ['rock','paper','scissors'];


optionbtn.forEach(option=> {

    option.addEventListener("click", function()
    {
     const cmptNum = Math.floor(Math.random()*3);
     const cmptchoice = computeroptions[cmptNum];
     setTimeout(() => {
          //Here is where we call compare hands
          compare(this.textContent, cmptchoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${cmptchoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
    })

});





function compare(plychoice,cmptchoice)
{




if(plychoice===cmptchoice)
{
	winner.textContent= 'It is tie!!';
	return ;
}

//check for rock
if(plychoice === 'rock')
{
	if(cmptchoice ==='scissors')
	{
		winner.textContent='Winner is Player';
		pscore++;
		updateScore();
		return ;
	}
	else{

		winner.textContent = 'Winner is Computer';
		cscore++;
		updateScore()
		return ;
	}
}



//check for scisscors
if(plychoice === 'scissors')
{
	if(cmptchoice==='rocks')
	{
		winner.textContent='Winner is Computer';
		cscore++;
		updateScore();
		return ;
	}
	else {

		winner.textContent = 'Winner is Player';
		pscore++;
		updateScore();
		return ;
	}
}



//check for paper
if(plychoice === 'paper')
{
	if(cmptchoice ==='scissors')
	{
		winner.textContent='Winner is Computer';
		cscore++;
		updateScore();
		return ;
	}
	else{

		winner.textContent = 'Winner is Player';
		pscore++;
		updateScore();
		return ;
	}
}



}


function updateScore()
{
  
plyscore.textContent = pscore;
compscore.textContent = cscore; 

 
}

reset.addEventListener("click" , function()
{
	plyscore.textContent = 0;
compscore.textContent = 0; 
pscore=0;
cscore=0;
play();

  

})



startbtn.addEventListener("click" , function()
{
 
screen(); 
plyscore.textContent = 0;
compscore.textContent = 0; 
pscore=0;
cscore=0;



})

function screen()
{

introscreen.classList.remove("fadeOut");
     match.classList.remove("fadeIn");
	introscreen.classList.add("op1");
    match.classList.add("op2");

}