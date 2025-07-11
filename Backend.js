console.log (parseInt((Math.random()*100+1)))
let RandomNumber=parseInt((Math.random()*100+1)) //genrate a random number
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const GuesSLot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const LowHigh=document.querySelector('.lowOrHi')
const StartOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numberGuess=1

let playGame=true

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert('Please Enter  valid number')
    }else if(guess<1){
      alert('Please Enter  number greater than 1')
    }else if(guess>100){
      alert('Please Enter  NUmber smaller than 100')
    } else{
      prevGuess.push(guess)// store the guess in prevGuess
      if(numberGuess==11){// all chance are over 
        displayGuess(guess);
        DisplayMessage(`Game Over. Random Number was ${RandomNumber}`);
       endGame();
      }else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }

}

function checkGuess(guess){
   if(guess===RandomNumber){
      DisplayMessage("your guesed right");
      endGame();
   }else if(guess<RandomNumber){
    DisplayMessage("Your number is Toolow");
   }else if(guess>RandomNumber){
    DisplayMessage("you Number is Too High");
   }


}

function displayGuess(guess){
  userInput.value=''
  GuesSLot.innerHTML+=`${guess} `
  remaining.innerHTML=`${10-numberGuess}`
  numberGuess++


}

function DisplayMessage(message){
  LowHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h3 id="newGame"> Start New Game</h3>`
   StartOver.appendChild(p)
   playGame=false
   NewGame()
}

function NewGame(){ 
      const newGameButton =document.querySelector('#newGame')
      newGameButton.addEventListener('click',()=>{
        RandomNumber=parseInt((Math.random()*100+1))
        prevGuess=[]
        numberGuess=1
        GuesSLot.innerHTML=''
        remaining.innerHTML=`${10-numberGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame=true
      })
}