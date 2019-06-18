/** @type HTMLCanvasElement */
let canvas = document.querySelector("#myCanvas");

/** @type CanvasRenderingContext2D */
let ctx = canvas.getContext("2d");

let w = window.innerWidth;
let h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

let framesCounter = 0;
const fps = 60;

////////PLAYER//////////
class Player {
  constructor() {
    this.x = w2;
    this.y = h2;

    this.ctx = ctx;
    this.speed = 1;

    this.w = 50;
    this.h = 75;

    this.up = true;
    this.right = false;
    this.down = false;
    this.left = false;

    this.imgPlayerStand = new Image();
    this.imgPlayerStand.src = "./img/playerStand.png";
    this.imgPlayerStand.frames = 1;
    this.imgPlayerStand.frameIndex = 0;

    this.imgPlayerLeft = new Image();
    this.imgPlayerLeft.src = "img/playerLeft.png";
    this.imgPlayerLeft.frames = 6;
    this.imgPlayerLeft.frameIndex = 0;

    this.imgPlayerRight = new Image();
    this.imgPlayerRight.src = "img/playerRight.png";
    this.imgPlayerRight.frames = 6;
    this.imgPlayerRight.frameIndex = 6;

    this.imgPlayerUp = new Image();
    this.imgPlayerUp.src = "img/playerUp.png";
    this.imgPlayerUp.frames = 6;
    this.imgPlayerUp.frameIndex = 0;

  }

  drawStand() {
    this.ctx.drawImage(
      this.imgPlayerStand,
      this.imgPlayerStand.frameIndex *
        Math.floor(this.imgPlayerStand.width / this.imgPlayerStand.frames),
      0,
      Math.floor(this.imgPlayerStand.width / this.imgPlayerStand.frames),
      this.imgPlayerStand.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  drawLeft() {
    this.ctx.drawImage(
      this.imgPlayerLeft,
      this.imgPlayerLeft.frameIndex *
        Math.floor(this.imgPlayerLeft.width / this.imgPlayerLeft.frames),
      0,
      Math.floor(this.imgPlayerLeft.width / this.imgPlayerLeft.frames),
      this.imgPlayerLeft.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  drawUp() {
    this.ctx.drawImage(
      this.imgPlayerUp,
      this.imgPlayerUp.frameIndex *
        Math.floor(this.imgPlayerUp.width / this.imgPlayerUp.frames),
      0,
      Math.floor(this.imgPlayerUp.width / this.imgPlayerUp.frames),
      this.imgPlayerUp.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }



  animate() {
    if (this.left) {
      this.drawLeft();
      this.x -= this.speed;
      if (framesCounter % 10 == 0) this.imgPlayerLeft.frameIndex++;
      if (this.imgPlayerLeft.frameIndex >= 6) this.imgPlayerLeft.frameIndex = 0;
    }
    if (this.right) {
        this.drawRight();
        this.x += this.speed;
      if (framesCounter % 10 == 0) this.imgPlayerRight.frameIndex--;
      if (this.imgPlayerRight.frameIndex < 0) this.imgPlayerRight.frameIndex = 5;
    }
    if(this.up) {
        this.drawUp();
      this.y -= this.speed;
      if (framesCounter % 10 == 0) this.imgPlayerUp.frameIndex++;
      if (this.imgPlayerUp.frameIndex >= 6) this.imgPlayerUp.frameIndex = 0;
    }
  }
}



let player = new Player();

////////////////INTERVAL///////////////

setInterval(() => {
  framesCounter++;
  clearScreen();
  player.animate();
}, 1000 / fps);

function clearScreen() {
  ctx.clearRect(0, 0, w, h);
}

window.onload = function() {};
