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




class Enemy {
    constructor() {
      this.x = 10;
      this.y = h2;
  
      this.ctx = ctx;
  
      this.sizeW = 80;
      this.sizeH = 80;
      this.speed = 1;
  
      this.up = false;
      this.right = false;
      this.down = false;
      this.left = false;
      this.active = true
  
      this.imgEnemy = new Image();
      this.imgEnemy.src = "./img/flame2.png";
      this.imgEnemy.frames = 4;
      this.imgEnemy.frameIndex = 0;
    }
  
    chase() {
      if (this.y < player.y) {
        this.y += this.speed;
      }
      if (this.y > player.y) {
        this.y -= this.speed;
      }
      if (this.x < player.x) {
        this.x += this.speed;
      }
      if (this.x > player.x) {
        this.x -= this.speed;
      }
    }
  
    drawEnemy() {
        
      this.ctx.drawImage(
        this.imgEnemy,
        this.imgEnemy.frameIndex *
          Math.floor(this.imgEnemy.width / this.imgEnemy.frames),
        0,
        Math.floor(this.imgEnemy.width / this.imgEnemy.frames),
        this.imgEnemy.height,
        this.x,
        this.y,
        this.sizeW,
        this.sizeH
      );
    }
  
    animate() {
        
      this.drawEnemy();
      
      if (framesCounter % 10 == 0) this.imgEnemy.frameIndex++;
      if (this.imgEnemy.frameIndex >= 4) this.imgEnemy.frameIndex = 0;
      this.chase();
  }
    }
  
  
  let enemy = new Enemy();
  




  setInterval(() => {
    framesCounter++;
    clearScreen();
    enemy.animate();
  
  }, 1000 / fps);
  
  function clearScreen() {
    ctx.clearRect(0, 0, w, h);
  }
  