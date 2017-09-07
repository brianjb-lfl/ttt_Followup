'use strict';

function renderTicTacToe(){
  let str = '<div class="row">';
  for(let i = 0; i < 9; i++){
    str += 
      `<div class="cell" id="${i}">
        <p>${appState.currBoard[i]}</p>
      </div>`;
    if((i+1) % 3 === 0){
      str+=`</div>
            <div class="row">`;
    }
  }
  str += '</div>';
  $('.board').html(str);
  
  if(appState.winCombo.length === 3){
    for(let j = 0; j < 3; j++){
      $(`#${appState.winCombo[j]}`).addClass('win');
    }
  }
}



