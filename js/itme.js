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


