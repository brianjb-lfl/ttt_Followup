'use strict';

const appState = {
  lastMarkedCell: null,
  currBoard: ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
  currCell: null,
  currMarker: 'X',
  winCombo: [],   //winning combo
  winCombos: [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]]
};

function initialize(){
  appState.lastMarkedCell = null;
  appState.currBoard = ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;'];
  appState.currCell = null;
  appState.currMarker = 'X';
  appState.winCombo = [];
}

function cellHandler(){
  $('.board').on('click', '.cell', event => {
  
    if(appState.winCombo.length < 3){
  
      if($(event.currentTarget).find('p').text().trim() === ''){          // cell is currently empty
        
        appState.currCell = parseInt($(event.currentTarget).attr('id'));  // get cell's id, 0-8
        appState.currBoard[appState.currCell] = appState.currMarker;      // add cell id to appState arr

        appState.currMarker = appState.currMarker === 'X' ?             // toggle marker
          appState.currMarker = "O" : appState.currMarker = "X";

        checkWin();

        renderTicTacToe();
      }
    }
  });
}

function checkWin(){
  let newArr = appState.winCombos.filter( arr => arr.includes(appState.currCell));
  for (let i = 0; i < newArr.length; i++ ){
    if("XXX?OOO".includes
      (appState.currBoard[newArr[i][0]] + appState.currBoard[newArr[i][1]] + appState.currBoard[newArr[i][2]])){
      appState.winCombo = newArr[i];
      return;
    }
  }
}

function btnHandler(){
  $('#new-game').on('click',  event => {
    console.log('new-game ran');
    initialize();
    renderTicTacToe();
  });
}

function handleTTTApp(){
  initialize();
  renderTicTacToe();
  cellHandler();
  btnHandler();
}

$(handleTTTApp);



