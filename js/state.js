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




