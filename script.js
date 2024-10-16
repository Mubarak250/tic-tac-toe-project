const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const playerOneInput = document.querySelector('.first-player');
const playerTwoInput = document.querySelector('.second-player');
const startBtn = document.querySelector('.start-btn');
const gridItems = document.querySelectorAll('.items')
const showTurns = document.querySelector('.player-turn');
const submitBtn = document.querySelector('.submit-btn');
const closeBtn = document.querySelector('.icon-container')

const gameBoard = (function() {
  gameBoardArray = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

  return {gameBoardArray};
})();

function players(name, letter) {

  return {name, letter};
}

function startGame(playerOne, playerTwo) {
  let turn = true;
  gridItems.forEach(function(item) {
    item.addEventListener('click', function() {

      if (!showTurns.innerText.includes('Wins')) {
        if (turn === true && item.innerText === '' && showTurns.innerText.includes(playerOne.name)) {
          item.innerText = playerOne.letter;
          showTurns.innerText = `${playerTwo.name} Turn`
          turn = false;
        } else if (turn === false && item.innerText === '' && showTurns.innerText.includes(playerTwo.name)) {
          item.innerText = playerTwo.letter;
          showTurns.innerText = `${playerOne.name} Turn`
          turn = true;
        }
      }
      addDomToArray();
      checkForTie();
      winningConditions(playerOne, playerTwo);
    })
  })
}

function addDomToArray() {
  for (let i = 0; i < 9; i++) {
    gameBoard.gameBoardArray[i] = gridItems[i].innerText;
  }
  console.log(gameBoard.gameBoardArray);
}

function winningConditions(playerOne, playerTwo) {
  for (let i = 0; i < gridItems.length; i++) {
    if (gridItems[0].innerText === 'X' && gridItems[1].innerText === 'X' && gridItems[2].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[0].innerText === 'O' && gridItems[1].innerText === 'O' && gridItems[2].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[3].innerText === 'X' && gridItems[4].innerText === 'X' && gridItems[5].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[3].innerText === 'O' && gridItems[4].innerText === 'O' && gridItems[5].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[6].innerText === 'X' && gridItems[7].innerText === 'X' && gridItems[8].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[6].innerText === 'O' && gridItems[7].innerText === 'O' && gridItems[8].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[0].innerText === 'X' && gridItems[3].innerText === 'X' && gridItems[6].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[0].innerText === 'O' && gridItems[3].innerText === 'O' && gridItems[6].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[1].innerText === 'X' && gridItems[4].innerText === 'X' && gridItems[7].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[1].innerText === 'O' && gridItems[4].innerText === 'O' && gridItems[7].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[2].innerText === 'X' && gridItems[5].innerText === 'X' && gridItems[8].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[2].innerText === 'O' && gridItems[5].innerText === 'O' && gridItems[8].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[0].innerText === 'X' && gridItems[4].innerText === 'X' && gridItems[8].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[0].innerText === 'O' && gridItems[4].innerText === 'O' && gridItems[8].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    } else if (gridItems[2].innerText === 'X' && gridItems[4].innerText === 'X' && gridItems[6].innerText === 'X') {
      showTurns.innerText = `${playerOne.name} Wins`;
    } else if (gridItems[2].innerText === 'O' && gridItems[4].innerText === 'O' && gridItems[6].innerText === 'O') {
      showTurns.innerText = `${playerTwo.name} Wins`;
    }
  }
}


function checkForTie() {
  for (let i = 0; i < gridItems.length; i++) {
    if (gridItems[i].innerText === '') {
      return false;
    }
  }
  showTurns.innerText = 'Tie';
}

startBtn.addEventListener('click', function() {
  modal.showModal();
})

closeBtn.addEventListener('click', function() {
  modal.close();
})

function clearGrid() {;
  gridItems.forEach(function(item) {
    item.innerText = '';
  })
}

form.addEventListener('submit', function() {
  clearGrid();
  startBtn.innerText = 'Restart Game';
  const playerOne = players(playerOneInput.value, 'X');
  const playerTwo = players(playerTwoInput.value, 'O');
  showTurns.innerText = `${playerOne.name} Turn`
  startGame(playerOne, playerTwo);
})