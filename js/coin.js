class coin {
  constructor() {
    
  }
}
let coin  = new Image();
coin.src = "./img/coin.png";

let x = window.innerWidth/2;
let y = window.innerHeight/2;
let srcX;
let srcY;
let sheetWidth = 440;
let sheetHeight = 40;
let cols = 10;
let rows = 1;
let width = sheetWidth / cols;
let height = sheetHeight / rows;

let currentFrame = 0;

function updateCoin() {
  currentFrame = ++currentFrame % cols;
  srcX = currentFrame * width;
  srcY = 0;
  ctx.clearRect(x, y, width, height);
}

function drawCoin(posX, posY) {
  updateCoin();
  ctx.drawImage(coin, srcX, srcY, width, height, posX, posY, width, height);
}

// setInterval(() => {
//   drawCoin(x, y);
    
// }, 100);
