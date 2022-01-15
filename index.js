const BTN = document.querySelector(".btn")

const item = [ 'carta', 'forbice', 'sasso'];

//////////////////////////////////////////////////////
function randomPc (){
  const randomItem = Math.floor(Math.random() * item.length);
  return item[randomItem]
}


/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).*/
let playerChoice = 'carta'// prompt()
console.log(playerChoice)
let pcChoice = randomPc()
console.log(pcChoice)


function round(playerSelection, computerSelection){
  if(
    playerSelection === 'carta' && computerSelection ==='sasso' || 
    playerSelection === 'forbice' && computerSelection === 'carta' || 
    playerSelection === 'sasso' && computerSelection ==='forbice'
  ) {
    console.log("Player Wins! with " + playerSelection)
  } else {
    console.log("Pc wins with " + computerSelection)
  }
}
let funzione = round(playerChoice, pcChoice)

BTN.addEventListener('click', funzione)




/*
BTN.addEventListener('click', funzione)
BTN.addEventListener('click', ()=>{
    console.log("hey you little fucke")
})
*/