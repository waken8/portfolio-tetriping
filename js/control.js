function gameStart() {
  setMoveMode();
  drawMino(tetrisCells, currentMino);

  currentTargetItems.push(createItem());
  currentTargetItems.push(createItem());
  currentTargetItems.push(createItem());
  currentTargetItems.push(createItem());

  updateTargetItmes();
  setMoveAlpabets(alpabets);
  moveCells[currentTypedIndex].style.background = baseColor;
  changeStyleBaseColide(currentModeFlag);
  displayScore();
  checkLevel();
  gameTimer = setInterval(update, gameSpeed);
}


function changeStyleBaseColide(isMoveMode) {
  for(let i = 200; i < 210; i++) {
    tetrisCells[i].style.background = "";
  }

  if(!isMoveMode) return;

  for(let i = 200; i < 210; i++) {
    tetrisCells[i].style.background = baseColor;
  }
}

function setMoveMode() {
  tetrisWrapper.classList.add("selected");
  selectWordWrapper.classList.remove("selected");

  removeEventListener("keydown", selectTyping)
  addEventListener("keydown", controlMove)
}

function setWordMode() {
  selectWordWrapper.classList.add("selected");
  tetrisWrapper.classList.remove("selected");

  removeEventListener("keydown", controlMove)
  addEventListener("keydown", selectTyping)
}

function toggleMode({ key }) {
  if(key === " ") currentModeFlag = !currentModeFlag;

  changeStyleBaseColide(currentModeFlag);
  if(currentModeFlag) {
    setMoveMode();
  } else {
    setWordMode();
  }
}

function indicateMove() {
  if(currentModeFlag && currentMino.shape != "M") {
    indicateMoveChar();
  }
}

let startAnimeTimer;
function startAnimeNumber() {
  startAnimeTimer = setInterval(() => {

    if(startNumber < 1) {
      startAnimeDisplay.style.display = "none";
      startMessageDisplay.style.display = "block";

      setTimeout(() => {
        startMessageDisplay.style.display = "none";

        removeEventListener("click", startAnimeNumber);
      }, 1200);

      gameStart();
      clearInterval(startAnimeTimer);

    } else {
      startAnimeDisplay.style.display = "block";
      startNumberDisplay.textContent = "";
      startNumberDisplay.textContent = startNumber;
      startNumber--;
    }

  }, 1200);
}

function resetAllState() {
  moveCells[currentTypedIndex].style.background = "";
  tetrisCells = Array.from(document.querySelectorAll(".tetris-cell"));
  isGameOver = false;
  currentMino = Mmino[0];
  currentPosition = 0;
  currentRow = 0;
  preparedMino= null;
  currentWordBox= null;
  currentCharIndex = 0;
  currentTargetItems = [];
  currentTargetAlpabets = null;
  currentTypedIndex = 0;
  totalScore = 0;
  deletedLineScore = 0;
  deletedWordScore = 0;
  currentLevel = 0;
  missedCount = 0;
  gameTimer = null;
  gameSpeed = 2600;
  currentModeFlag = true;

  totalScoreDisplay.textContent = totalScore;
  lineScoreDisplay.textContent = deletedLineScore;
  wordScoreDisplay.textContent = deletedWordScore;
  levelScoreDisplay.textContent = currentLevel;
  missCountDisplay.textContent = missedCount;
  

  startNumber = 3;
  startAnimeTimer = null;
}

function gameRestart() {
  resetAllMiniBoard();

  tetrisCells.forEach(cell => {
    resetAllShape(cell);
    cell.classList.remove("M");
    cell.classList.remove("colide");
  })

  wordBoxes.forEach(word => {
    word.textContent = "";
  })

  for(let i = 200; i < 210; i++) {
    tetrisCells[i].style.border = "none";
    tetrisCells[i].classList.add("colide");
  }

  resetAllState();
  startAnimeNumber();
}


addEventListener("keydown", toggleMode)
addEventListener("keydown", indicateMove)
addEventListener("keydown", e => { 
  if(e.key === "C") {
    resetCurrentItem();
    missedCount++;
    displayMissedScore();
  }
})
playButton.addEventListener("click", gameRestart)
startButton.addEventListener("click", e => {
  startSelectDisplay.style.display = "none";
  startAnimeNumber();
});





