var rock = document.querySelector('.rock');
var scissors = document.querySelector('.scissors');
var paper = document.querySelector('.paper');
var wrapper = document.querySelector(".wrapper");
var player, computer;
var playerScre = 0;
var computerScre = 0;
var computerArrray = ['rock','scissors','paper'];
var computerThing = ['rock✊','scissors✌️','paper✋'];
var computerScore = document.querySelector('.computer-score');
var playerScore = document.querySelector('.player-score');
var computerResult = document.querySelector('.computer-result');
var playerResult = document.querySelector('.player-result');
var gameAnswer = document.querySelector('.game-answer');

wrapper.addEventListener("click", function(evt) {
  
  gameAnswer.classList.add('d-none');
  
  if (evt.target.classList === 'btn-primary'){
    evt.target.classList.remove('btn-primary');
    evt.target.classList.add('btn-secondary');
  }else if (evt.target.classList === 'btn-secondary'){
    evt.target.classList.remove('btn-secondary');
    evt.target.classList.add('btn-primary');
  }
  if (evt.target.tagName === "BUTTON"){

    var computerItem = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player = evt.target.value;
    computer = computerArrray[computerItem];
    computerResult.classList.remove('d-block','alert-warning','alert-danger','alert-success');
    playerResult.classList.remove('d-block','alert-warning','alert-danger','alert-success');
    if (player === computer) {
      computerResult.classList.add('alert-warning');
      computerResult.textContent = computerThing[computerItem];
      playerResult.classList.add('alert-warning');
      playerResult.textContent = 'DRAW TRY AGAIN';
    } else if (player === 'rock' && computer === 'scissors'){
      playerScre = playerScre + 1;
      computerResult.classList.add('alert-danger');
      computerResult.textContent = computerThing[computerItem];
      playerResult.classList.add('alert-success');
      playerResult.textContent = 'YOU WIN';
    } else if (player === 'scissors' && computer === 'paper'){
      playerScre = playerScre + 1;
      playerResult.classList.add('alert-success');
      playerResult.textContent = 'YOU WIN';
      computerResult.classList.add('alert-danger');
      computerResult.textContent = computerThing[computerItem];
    } else if (player === 'paper' && computer === 'rock'){
      playerResult.classList.add('alert-success');
      playerResult.textContent = 'YOU WIN';
      playerScre = playerScre + 1;
      computerResult.classList.add('alert-danger');
      computerResult.textContent = computerThing[computerItem];
    }else{
      computerResult.classList.add('alert-success');
      computerResult.textContent = computerThing[computerItem];
      playerResult.classList.add('alert-danger');
      playerResult.textContent = 'YOU LOSE HA HA HA LOSER';
      
      computerScre = computerScre + 1;
    }
    if(computerScre >= 5 && playerScre < 5){
      computerScre = 0;
      playerScre = 0;
      gameAnswer.classList.remove('d-none','alert-danger','alert-succes');
      gameAnswer.classList.add('alert-danger');
      gameAnswer.textContent = 'GAME OVER YOU LOSE';
      
    }else if(computerScre < 5 && playerScre >= 5){
      computerScre = 0;
      playerScre = 0;
      gameAnswer.classList.remove('d-none','alert-danger','alert-succes');
      gameAnswer.classList.add('alert-success');
      gameAnswer.textContent = '🏆!!! YOU WIN !!!🏆';
    }
    
  }
  computerScore.textContent = computerScre;  
  playerScore.textContent = playerScre;  
});
