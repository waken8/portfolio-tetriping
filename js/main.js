const tetrisBoard = {
  el: document.querySelector(".tetris-board"),
  childrenSize: 210,
  childClassName: "tetris-cell"
}

const moveBoard = {
  el: document.querySelector(".move-vocubrarys-board"),
  childrenSize: 10,
  childClassName: "move-cell"
}

const selectTypingBoard = {
  el: document.querySelector(".select-word-board"),
  childrenSize: 4,
  childClassName: "select-row"
}

initBoards();

function initBoards() {
  createSelectBoard();
  createBoard(tetrisBoard);
  createBoard(moveBoard);
}

// core function for create board
function createBoard({ el, childrenSize, childClassName }) {
  for(let i = 0; i < childrenSize; i++) {
    const div = document.createElement("div");
    div.classList.add(childClassName);

    el.append(div);
  }

  if(childClassName === "tetris-cell") translatBaseColide({ el, childrenSize })
}

// add style as colide
function translatBaseColide({ el, childrenSize }) {
  for(let i = 200; i < childrenSize; i++) {
    el.children[i].style.border = "none";
    el.children[i].classList.add("colide");
  }
}

function createSelectWrapper(rowIndex) {
  const selectRow = {
    el: document.querySelectorAll(".select-row")[rowIndex],
    childrenSize: 4,
    childClassName: "select-item-wrapper"
  }

  createBoard(selectRow);
}

function createSelectItem(wrapperIndex) {
  const miniMinoBoard = {
    el: document.querySelectorAll(".select-item-wrapper")[wrapperIndex],
    childrenSize: 1,
    childClassName: "mini-mino-board"
  }

  const wordBox = {
    el: document.querySelectorAll(".select-item-wrapper")[wrapperIndex],
    childrenSize: 1,
    childClassName: "word-box"
  }

  createBoard(miniMinoBoard);
  createBoard(wordBox);
}

function createMiniBoardCells(miniBoardIndex) {
  const miniBoard = {
    el: document.querySelectorAll(".mini-mino-board")[miniBoardIndex],
    childrenSize: 16,
    childClassName: "mini-board-cell"
  }

  createBoard(miniBoard);
}
 
function createSelectBoard() {
  createBoard(selectTypingBoard);

  createSelectWrapper(0);
  createSelectWrapper(1);
  createSelectWrapper(2);
  createSelectWrapper(3);

  const boxesSize = 16;
  for(let i = 0; i < boxesSize; i++) {
    createSelectItem(i);
    createMiniBoardCells(i);
  }
}

// tetrominos
// main mino as move
const Mmino = [
  {
    shape: "M",
    index: [0]
  }
];

// currentShape
const Lmino = [
    {
      shape: "L",
      index: [0, 1, 2, 4],
      calcType: "A"
    },
    {
      shape: "L",
      index: [2, 4, 5, 6],
      calcType: "A"
    },
    {
      shape: "L",
      index: [0, 4, 8, 9],
      calcType: "B"
    },
    {
      shape: "L",
      index: [0, 1, 5, 9],
      calcType: "B"
    }
]

const Jmino = [
  {
    shape: "J",
    index: [0, 4, 5, 6],
    calcType: "A"
  },
  {
    shape: "J",
    index: [0, 1, 2, 6],
    calcType: "A"
  },
  {
    shape: "J",
    index: [1, 5, 8, 9],
    calcType: "B"
  },
  {
    shape: "J",
    index: [0, 1, 4, 8],
    calcType: "B"
  },
];

const Tmino = [
  {
    shape: "T",
    index: [0, 1, 2, 5],
    calcType: "A"
  },
  {
    shape: "T",
    index: [1, 4, 5, 6],
    calcType: "A"
  },
  {
    shape: "T",
    index: [0, 4, 5, 8],
    calcType: "B"
  },
  {
    shape: "T",
    index: [1, 4, 5, 9],
    calcType: "B"
  }
];

const Smino = [
  {
    shape: "S",
    index: [1, 2, 4, 5],
    calcType: "A"
  },
  {
    shape: "S",
    index: [0, 4, 5, 9],
    calcType: "B"
  }
];

const Zmino = [
  {
    shape: "Z",
    index: [0, 1, 5, 6],
    calcType: "A"
  },
  {
    shape: "Z",
    index: [1, 4, 5, 8],
    calcType: "B"
  }
]

const Omino = [
  {
    shape: "O",
    index: [0, 1, 4, 5],
    calcType: "B"
  }
];

const Imino = [
    {
      shape: "I",
      index: [0, 1, 2, 3],
      calcType: "C"
    },
    {
      shape: "I",
      index: [0, 4, 8, 12],
      calcType: "D"
    }
];

const minoItems = [
  Lmino,
  Jmino,
  Smino,
  Zmino,
  Tmino,
  Omino,
  Imino
];

// alpabets for move
const alpabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// words
const a = ["add", "arc", "and", "age", "ago", "able", "area", "away", "apple", "avoid", "about", "active", "almost", "alpabet"];
const b = ["be", "big", "bar", "bag", "boy", "beat", "both", "best", "born", "break", "bring", "before", "budget", "background"];
const c = ["cat", "can", "cup", "cut", "cake", "cost", "color", "clear", "choise", "chance", "company", "consumer"];
const d = ["do", "dog", "die", "dig", "draw", "date", "drop", "dream", "drive", "doctor", "discover"];
const e = ["eat", "eye", "end", "easy", "east", "each", "ever", "every", "event", "enjoy", "enter", "exist", "example"];
const f = ["fix", "for", "fit", "fox", "fire", "fine", "find", "favolite", "finger", "from", "front", "first", "final", "field"];
const g = ["go", "git", "gas", "get", "guy", "girl", "game", "great", "group", "garden", "government"];
const h = ["he", "hat", "hand", "half", "have", "head", "hear", "had", "history", "himself", "hospital"];
const i = ["if", "in", "it", "into", "idea", "image", "item", "itself", "inside"];
const j = ["job", "jam", "job", "just", "join", "jet", "justis", "june", "july"];
const k = ["kid", "key", "kick", "kitkat", "keyboard", "know", "kind", "kitchen", "knowledge"];
const l = ["lay", "leg", "let", "lot", "low", "live", "long", "like", "life", "left", "lead", "late", "last", "land", "leave", "level", "light"];
const m = ["me", "man", "move", "may", "mean", "maybe", "media", "manage", "modern", "money", "movement"];
const n = ["no", "not", "nir", "now", "note", "none", "news", "near", "next", "naver", "newspaper"];
const o = ["on", "out", "own", "our", "over", "order", "open", "other", "option", "operation"];
const p = ["pay", "per", "put", "push", "play", "plan", "point", "place", "position", "prevent", "production"];
const q = ["quite", "quality", "quick", "quickly", "quite", "question"];
const r = ["run", "rest", "rich", "rule", "road", "risk", "read", "real", "race", "raise", "recent", "record", "relete", "response", "represent"];
const s = ["so", "she", "sit", "sing", "skin", "some", "shot", "share", "since", "smile", "singer", "situation", "something", "sometimes"];
const t = ["to", "top", "try", "type", "turn", "trim", "town", "today", "think", "those", "this", "these", "teachear", "television"];
const u = ["up", "us", "use", "unit", "until", "under", "upon", "understand"];
const v = ["very", "vote", "view", "visit", "value", "victim"];
const w = ["we", "who", "why", "what", "will", "which", "wear", "watch", "weight", "weapon", "whatever", "without"];
const x = ["xmas", "xray", "xylitol", "xerotes", "xylophone", "xerophyte"];
const y = ["you", "yes", "yet", "yard", "year", "young", "yourself", "your"];
const z = ["zero", "zoro", "zebra", "zeal", "zealous", "zap"];


const wordItems = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

let isGameOver = false;

let currentMino = Mmino[0];
let currentPosition = 0;
let currentRow = 0;
const tetrisGird = document.querySelector(".tetris-board");
let tetrisCells = Array.from(document.querySelectorAll(".tetris-cell"));

let preparedMino; 
let currentWordBox;
let currentCharIndex = 0;
let missedCount = 0;
let perfectComboCount = 0;

let currentTargetItems = [];
const selectWrapper = document.querySelectorAll(".select-item-wrapper");
const wordBoxes = document.querySelectorAll(".word-box");
const miniBoards = document.querySelectorAll(".mini-mino-board");
const missCountDisplay = document.querySelector(".word-missed-score");


let currentTargetAlpabets;
let currentTypedIndex = 0;
const moveCells = document.querySelectorAll(".move-cell");


let totalScore = 0;
let deletedLineScore = 0;
let deletedWordScore = 0;
let currentLevel = 0;
const totalScoreDisplay = document.querySelector(".score-count");
const lineScoreDisplay = document.querySelector(".line-score-count");
const wordScoreDisplay = document.querySelector(".word-score-count");
const levelScoreDisplay = document.querySelector(".level-score-count");
const softDropBox = document.querySelectorAll(".play-item-wrapper")[0];
const hardDropBox = document.querySelectorAll(".play-item-wrapper")[1];
const clearItemBox = document.querySelectorAll(".play-item-wrapper")[2];

let gameTimer;
let gameSpeed = 2600;

let currentModeFlag = true;
const tetrisWrapper = document.querySelector(".tetris-wrapper");
const selectWordWrapper = document.querySelector(".select-word-wrapper");
const tetrisBoardForIndicate = document.querySelector(".tetris-board");

let startNumber = 3;
const startNumberDisplay = document.querySelector(".number");
const startMessageDisplay = document.querySelector(".start-message");
const startAnimeDisplay = document.querySelector(".start-anime-display");

const startSelectDisplay = document.querySelector(".start-select-display");
const startButton = document.querySelector(".play-button");
const gameOverDisplay = document.querySelector(".game-over-modal");
const playButton = document.querySelector(".play-again-button");

const baseColor = "rgb(250, 159, 102)";



function shffle([...array]) {
  const arraySize = array.length;
  for(let i = arraySize - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


function randomizedItems(itemsType) {
  const shffledArray = shffle(itemsType);

  const targets = [];
  const targetA = shffle(shffledArray[0]);
  const targetB = shffle(shffledArray[1]);
  const targetC = shffle(shffledArray[2]);
  const targetD = shffle(shffledArray[3]);

  targets.push(targetA[0]);
  targets.push(targetB[0]);
  targets.push(targetC[0]);
  targets.push(targetD[0]);

  return targets;
}

function createItem() {
  const setMinos = randomizedItems(minoItems);
  const setWords = randomizedItems(wordItems);
  
  const [minoA, minoB, minoC, minoD] = setMinos;
  const [wordA, wordB, wordC, wordD] = setWords;

  const targetItem = [
    {
      mino: minoA,
      word: wordA
    },
    {
      mino: minoB,
      word: wordB
    },
    {
      mino: minoC,
      word: wordC
    },
    {
      mino: minoD,
      word: wordD
    },
  ];

  return targetItem;
}

function setTargetItem(index) {
  const selectRow = document.querySelectorAll(".select-row")[index];
  const items = currentTargetItems[index];

  let wrapperIndex = 0;

  for(let { mino, word } of items) {
    const [miniBoard, wordBox] = selectRow.children[wrapperIndex].children;
    const miniBoardCells = miniBoard.children;

    drawMiniMino(miniBoardCells, mino);
    addCharsCanTyping(word, wordBox);
    wrapperIndex++;
  }
}

function drawMiniMino(cells, mino) {
  const { index: minoIndex, shape } = mino;

  const position = 0;
  minoIndex.map(index => cells[index + position].classList.add(shape))
}

function resetAllShape(cell) {
  cell.classList.remove("J");
  cell.classList.remove("L");
  cell.classList.remove("S");
  cell.classList.remove("Z");
  cell.classList.remove("T");
  cell.classList.remove("O");
  cell.classList.remove("I");
}

function resetAllMiniBoard() { 
  for(const miniBoard of miniBoards) {
    const miniBoardCells = miniBoard.children;
    const cellSize = miniBoardCells.length;

    for(let i = 0; i < cellSize; i++) {
      resetAllShape(miniBoardCells[i]);
    }
  }
} 
  
function updateTargetItmes() {
  resetAllMiniBoard()

  currentTargetItems.shift();
  currentTargetItems.push(createItem());

  setTargetItem(0);
  setTargetItem(1);
  setTargetItem(2);
  setTargetItem(3);
  
  setMoveAlpabets(alpabets);
}

function checkLevel() {
  currentLevel = 1;
  gameSpeed = 2600;

  if(deletedLineScore < currentLevel * 10) {
    currentLevel = currentLevel;
  } else { 
    currentLevel = Math.floor(deletedLineScore * 0.1) + 1;
    gameSpeed = gameSpeed - (currentLevel * 150);
  }
}

function displayLevelScore() {
  levelScoreDisplay.textContent = null;
  levelScoreDisplay.textContent = currentLevel;
}

function displayScore() {
  totalScoreDisplay.textContent = null;
  lineScoreDisplay.textContent = null;
  wordScoreDisplay.textContent = null;

  totalScoreDisplay.textContent = totalScore;
  lineScoreDisplay.textContent = deletedLineScore;
  wordScoreDisplay.textContent = deletedWordScore;
}

function setMoveAlpabets(alpabets) {
  const shffledAlpabets = shffle(alpabets);

  currentTargetAlpabets = shffledAlpabets.slice(0, 10);
  currentTargetAlpabets.map((alpabet, index) => {
    moveCells[index].textContent = "";
    moveCells[index].textContent = alpabet;
  })
}

function indicateMoveChar() {
  tetrisWrapper.style.background = "red";

  setTimeout(() => {
    tetrisWrapper.style.background = "";
  }, 100)
}

function typeMoveAlpabet({ key }) {
  if(currentMino.shape != "M") return;

  moveCells.forEach(cell => cell.style.background = null);

  if(currentTargetAlpabets.includes(key)) {
    currentTypedIndex = currentTargetAlpabets.indexOf(key);

    if(!tetrisCells[currentRow + currentTypedIndex].classList.contains("colide")) {
      moveMino();
    } else {
      indicateMoveChar();
    }
  } else {
    indicateMoveChar();
  }

  moveCells[currentTypedIndex].style.background = baseColor;
}

function controlMove({ key }) {
  if(!currentTargetAlpabets) return;
  typeMoveAlpabet({ key })

  tetrisWrapper.style.background = "";
  if(key === "H") hardDrop();
  if(key === "S") softDrop();
}

function moveMino() {
  undrawShadowMinos();
  undrawMino(tetrisCells, currentMino);
  currentPosition = currentRow;
  currentPosition = currentPosition + currentTypedIndex;
  drawMino(tetrisCells, currentMino);

  if(checkCalctype(preparedMino)) {
    drawShadowMino(preparedMino)
  } 
}

function checkCalctype(preparedMino) {
  if(!preparedMino) return;

  const { index: minoIndex, calcType } = preparedMino;

  const checkColideMino = minoIndex.some(index => tetrisCells[index + currentPosition].classList.contains("colide"));

  const typeA = currentPosition % 10 === 8 || currentPosition % 10 === 9;
  const typeB = currentPosition % 10 === 9;
  const typeC = currentPosition % 10 === 7 || currentPosition % 10 === 8 || currentPosition % 10 === 9;
  const typeD = currentPosition % currentPosition === 1;

  const calcA = calcType === "A" && !typeA && !checkColideMino;
  const calcB = calcType === "B" && !typeB && !checkColideMino;
  const calcC = calcType === "C" && !typeC && !checkColideMino;
  const calcD = calcType === "D" && !typeD && !checkColideMino;

  if(calcA || calcB || calcC || calcD) return true;

  return false;
}


function convertMino(mino) {
  const { index: minoIndex, shape, calcType } = mino;

  const converted = minoIndex.map(index => {
    if(index === 4) index = 10;
    if(index === 5) index = 11;
    if(index === 6) index = 12;
    if(index === 8) index = 20;
    if(index === 9) index = 21;
    if(index === 12 && calcType === "D") index = 30;

    return index;
  })

  return {
    shape, 
    index: converted,
    calcType
  }
}

function drawMino(cells, mino) {
  const { index: minoIndex, shape } = mino;

  minoIndex.map(index => cells[index + currentPosition].classList.add(shape))

  drawColideShadowMino();
}

function undrawMino(cells, mino) {
  const { index: minoIndex, shape } = mino;

  minoIndex.map(index => cells[index + currentPosition].classList.remove(shape))
}

function drawShadowMino(preparedMino) {
  const { index: minoIndex, shape } = preparedMino;
  const drawnMinoIndex = minoIndex.map(index => index + currentPosition);

  drawnMinoIndex.filter(index => {
    if(index != currentPosition) {
      tetrisCells[index].style.background = "#ccc"
    } 
  })
}

function undrawShadowMinos() {
  tetrisCells.forEach(cell => cell.style.background = null);
  tetrisCells.forEach(cell => cell.classList.remove("colide-shadow"));
}


function update() {
  // undrawColideShadowMino();
  dropMino();
  indicateCanTypeKey();
  checkLevel();
  displayLevelScore()

  if(isGameOver) {
    clearInterval(gameTimer);

    gameOverDisplay.style.display = "block";
    playButton.addEventListener("click", e => {
      gameOverDisplay.style.display = "none";
    })
  } else {
    clearInterval(gameTimer);
    gameTimer = setInterval(update, gameSpeed);
  }
}

function dropMino() {
  undrawMino(tetrisCells, currentMino);
  currentRow += 10;
  currentPosition += 10;
  drawMino(tetrisCells, currentMino);
  checkColide(currentMino);

  if(currentMino.shape != "M") return;

  if(checkCalctype(preparedMino)) {
    undrawShadowMinos();
    drawShadowMino(preparedMino);
  }
}

function softDrop() {
  if(currentMino.shape === "M") return;

  dropMino();
  totalScore++;
  displayScore();
  indicateCanTypeKey();
}

function hardDrop() {
  if(currentMino.shape === "M") return;

  const { index: minoIndex } = currentMino;
  let colidePosition = currentPosition;

  while(!minoIndex.some(index => tetrisCells[index + colidePosition + 10].classList.contains("colide"))) {
    colidePosition += 10;
    totalScore++;
  }

  if(minoIndex.some(index => tetrisCells[index + colidePosition + 10].classList.contains("colide"))) {
    undrawMino(tetrisCells, currentMino);
    currentPosition = colidePosition;
    drawMino(tetrisCells, currentMino);
    displayScore();
    checkColide(currentMino);
  }

  indicateCanTypeKey();
}

function drawColideShadowMino() {
  if(currentMino.shape === "M") return;

  const { index: minoIndex } = currentMino;

  let colidePosition = currentPosition;

  while(!minoIndex.some(index => tetrisCells[index + colidePosition + 10].classList.contains("colide"))) {
    colidePosition += 10;
  }

  if(minoIndex.some(index => tetrisCells[index + colidePosition + 10].classList.contains("colide"))) {
    minoIndex.map(index => tetrisCells[index + colidePosition].classList.add("colide-shadow"));
  }
}

function undrawColideShadowMino() {
  const { index: minoIndex } = currentMino;

  if(minoIndex.some(index => tetrisCells[index + currentPosition].classList.contains("colide-shadow"))) {
    minoIndex.map(index => tetrisCells[index + colidePosition].classList.remove("colide-shadow"));
  }
}

function checkColide(mino) {
  const { index: minoIndex } = mino;
  const bottomRow = 10;

  if(minoIndex.some(index => tetrisCells[index + currentPosition +  bottomRow].classList.contains("colide"))) {
    minoIndex.map(index => tetrisCells[index + currentPosition].classList.add("colide"))

    changeGameOverState();
    undrawShadowMinos();
    addScoreDeleteLine();
  }
}


function addCharsCanTyping(word, wordBox) {
  wordBox.textContent = null;

  for(let char of word) {
    const span = document.createElement("span");
    span.textContent = char;

    wordBox.append(span);
  }
}

function updateStyleTarget(index) {
  const currentTarget = currentTargetItems[0][index];
  preparedMino = convertMino(currentTarget.mino);

  if(checkCalctype(preparedMino)) drawShadowMino(preparedMino);

  selectWrapper[index].style.border = "6px solid rgb(250, 159, 102)";
  currentWordBox = wordBoxes[index];
  currentWordBox.children[0].classList.add("typed");
  
  selectWordWrapper.style.background = "";
  currentCharIndex++;
}

function displayMissedScore() {
  missCountDisplay.textContent = null;
  missCountDisplay.textContent = missedCount;
}

function addScoreByTyping() {
  if(missedCount === 0) {
    perfectComboCount++;
    totalScore += (currentCharIndex + 1) * currentLevel * 2;
  } else {
    perfectComboCount = 0;
    totalScore += (currentCharIndex + 1) * currentLevel;
  }

  if(perfectComboCount > 1) {
    totalScore += (currentCharIndex + 1) + perfectComboCount * 10;
  }
}


function indicateFirstChar() {
  if(!currentWordBox) {
    selectWordWrapper.style.background = "red";

    setTimeout(() => {
      selectWordWrapper.style.background = "";
    }, 100)
  }
}

function indicateWord(key) {
  const firstChar = currentWordBox.children[0].textContent;
  
  if(currentWordBox.children[currentCharIndex].textContent !== key && firstChar !== key) {
    selectWordWrapper.style.background = "red";
  }

  setTimeout(() => {
    selectWordWrapper.style.background = "";
  }, 100)
}


function typeFirstChar({ key }) {
  if(currentWordBox) return;

  const wordBoxA = wordBoxes[0];
  const wordBoxB = wordBoxes[1];
  const wordBoxC = wordBoxes[2];
  const wordBoxD = wordBoxes[3];

  const words = [wordBoxA, wordBoxB, wordBoxC, wordBoxD];
  const firstChars = [];

  for(let word of words) {
    const firstChar = word.textContent[0];

    firstChars.push(firstChar);
  }

  if(!firstChars.includes(key)) {
    indicateFirstChar();
    missedCount++;
    displayMissedScore();
  } else {
    missedCount--;
    updateStyleTarget(firstChars.indexOf(key));
    indicateCanTypeKey();
  } 

}

function typeWordCheck({ key }) {
  if(!currentWordBox) return;

  const currentWord = currentWordBox.children;

  indicateWord(key);
  if(key === currentWord[currentCharIndex].textContent) {
    currentWord[currentCharIndex].classList.add("typed");
    currentCharIndex++;

    const checkWordCorret = currentCharIndex === currentWord.length; 
    const corretOnlyWord = checkWordCorret && !checkCalctype(preparedMino);
    const corretBoth = checkWordCorret && checkCalctype(preparedMino);

    if(corretOnlyWord) {
      const lastCharIndex = currentCharIndex - 1;
      currentWord[lastCharIndex].classList.remove("typed");
      currentCharIndex = lastCharIndex;
      indicateWord();
    } 


    if(corretBoth) {
      translateMino(preparedMino);
      currentCharIndex--;
      indicateCanTypeKey();
    }

  } else {
    missedCount++;
    displayMissedScore();
  }  
}

function indicateCanTypeKey() {
  if(currentMino.shape != "M") {
    softDropBox.style.background = baseColor;
    hardDropBox.style.background = baseColor;
    clearItemBox.style.background = baseColor;
  } else {
    softDropBox.style.background = "";
    hardDropBox.style.background = "";
    clearItemBox.style.background = "";
  }

  if(preparedMino) {
    clearItemBox.style.background = baseColor;
  } else {
    clearItemBox.style.background = "";
  }
}

function translateMino() {
  undrawShadowMinos();
  undrawMino(tetrisCells, currentMino);
  currentMino = preparedMino;
  drawMino(tetrisCells, currentMino);
}


function resetCurrentItem() {
  if(!preparedMino) return;
  typedStyle();
  selectedWrapper();
  undrawShadowMinos();
  undrawMino(tetrisCells, currentMino);
  currentMino = Mmino[0];
  drawMino(tetrisCells, currentMino);

  softDropBox.style.background = "";
  hardDropBox.style.background = "";
  clearItemBox.style.background = "";
  currentWordBox = null;
  currentCharIndex = 0;
  preparedMino = null;

}

function selectedWrapper() {
  selectWrapper[0].style.border = "";
  selectWrapper[1].style.border = "";
  selectWrapper[2].style.border = "";
  selectWrapper[3].style.border = "";
}

function typedStyle() {
  const typedChars = currentWordBox.children;

  for(let char of typedChars) {
    char.classList.remove("typed")
  }
}


function changeGameOverState() {
  const isMmino = "M" === currentMino.shape;
  
  if(isMmino) {
    isGameOver = true;
    return;
  }

  next();
}

function next() {
  deletedWordScore++;
  addScoreByTyping();
  displayScore()
  selectedWrapper();

  missedCount = 0;
  displayMissedScore();

  currentPosition = currentTypedIndex;
  currentRow = 0;
  currentMino = Mmino[0];
  preparedMino = null;
  currentCharIndex = 0;
  currentWordBox = null;

  moveCells[currentTypedIndex].style.background = "rgb(250, 159, 102)";

  updateTargetItmes();
}

function selectTyping({ key }) {
  typeFirstChar({ key });
  typeWordCheck({ key });
}


function addScoreDeleteLine() {
  const result = deleteFilledLines();

  const single = result === 1;
  const double = result === 2;
  const triple = result === 3;
  const tetris = result === 4;

  if(single) totalScore += 10 * currentLevel;
  if(double) totalScore += 30 * currentLevel;
  if(triple) totalScore += 60 * currentLevel;
  if(tetris) totalScore += 100 * currentLevel;

  deletedLineScore += result;
  displayScore();
}

function deleteFilledLines() {
  let deletedLineTimes = 0;
  const tetrisBoardSize = 200;
  const rowIndex = 10;

  for(let i = 0; i < tetrisBoardSize; i += rowIndex) {
    const checkCompleteLine = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];

    if(checkCompleteLine.every(index => tetrisCells[index].classList.contains("colide"))) {

      checkCompleteLine.forEach(i => {
        tetrisCells[i].classList.remove("colide");
        resetAllShape(tetrisCells[i]);
      })

      deletedLineTimes++;
      const deletedCells = tetrisCells.splice(i, rowIndex);
      tetrisCells = deletedCells.concat(tetrisCells);
      tetrisCells.forEach(cell => tetrisGird.append(cell));
    }
  }

  return deletedLineTimes;
}

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
    tetrisWrapper.style.background = "";
    resetCurrentItem();
    missedCount++;
    displayMissedScore();
  }
})

playButton.addEventListener("click", gameRestart)
startButton.addEventListener("click", () => {
  startSelectDisplay.style.display = "none";
  startAnimeNumber();
});
