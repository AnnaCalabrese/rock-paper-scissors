const BTN = document.querySelector(".btn")
const ROCK = document.querySelector(".rock")
const PAPER = document.querySelector(".paper")
const SCISSORS = document.querySelector(".scissors")
const WINNER_TEXT = document.querySelector(".winner-text")
const SCORE_PLAYER =document.querySelector(".score-player")
const SCORE_PC = document.querySelector(".score-pc")


const computerPlay = function(){
  const ARRAY = ['rock','paper','scissors']
  const RANDOM = Math.floor(Math.random() * ARRAY.length)
  return ARRAY[RANDOM]
}



function round(playerSelection, computerSelection){

 
  
      if(
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" ){
          WINNER_TEXT.innerHTML = "✔️ Player wins! " + playerSelection + " beats " + computerSelection
          SCORE_PLAYER.innerHTML++
          console.log("Player Wins")
        } else if( playerSelection === computerSelection){
          WINNER_TEXT.innerHTML = "🙌🏻 Tie! Try again."

        } else {
          WINNER_TEXT.innerHTML = "❌ Pc wins! " + computerSelection + " beats " + playerSelection
          console.log("Pc Wins")
          SCORE_PC.innerHTML++

        }
  
  }






SCISSORS.addEventListener('click',  function(){
  round('scissors', computerPlay())
} )
ROCK.addEventListener('click',   function(){
  round('rock', computerPlay())
} )
PAPER.addEventListener('click',   function(){
  round('paper', computerPlay())
} )

