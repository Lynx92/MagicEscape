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
    this.speed = 2;

    this.w = 50;
    this.h = 75;

    this.up = false;
    this.right = false;
    this.down = false;
    this.left = false;
    this.attack = false;

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
    this.imgPlayerRight.frameIndex = 0;

    this.imgPlayerUp = new Image();
    this.imgPlayerUp.src = "img/playerUp.png";
    this.imgPlayerUp.frames = 6;
    this.imgPlayerUp.frameIndex = 0;

    this.imgAttackRight = new Image();
    this.imgAttackRight.src = "img/AttackRight.png";
    this.imgAttackRight.frames = 6;
    this.imgAttackRight.frameIndex = 0;

    this.attackLeft = new Image();
    this.attackLeft.src = "img/attackLeft.png";
    this.attackLeft.frames = 6;
    this.attackLeft.frameIndex = 0;
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

  drawRight() {
    this.ctx.drawImage(
      this.imgPlayerRight,
      this.imgPlayerRight.frameIndex *
        Math.floor(this.imgPlayerRight.width / this.imgPlayerRight.frames),
      0,
      Math.floor(this.imgPlayerRight.width / this.imgPlayerRight.frames),
      this.imgPlayerRight.height,
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

  drawDown() {
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
  // Img ataque derecha
  attackRight() {
    this.ctx.drawImage(
      this.imgAttackRight,
      this.imgAttackRight.frameIndex *
        Math.floor(this.imgAttackRight.width / this.imgAttackRight.frames),
      0,
      Math.floor(this.imgAttackRight.width / this.imgAttackRight.frames),
      this.imgAttackRight.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  // Img ataque izquierda
  attackLeft() {
    this.ctx.drawImage(
      this.attackLeft,
      this.attackLeft.frameIndex *
        Math.floor(this.attackLeft.width / this.attackLeft.frames),
      0,
      Math.floor(this.attackLeft.width / this.attackLeft.frames),
      this.attackLeft.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  //Animar movimiento Player
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
      if (this.imgPlayerRight.frameIndex <= 0)
        this.imgPlayerRight.frameIndex = 5;
    }
    if (this.up) {
      this.drawUp();
      this.y -= this.speed;
      if (framesCounter % 10 == 0) this.imgPlayerUp.frameIndex++;
      if (this.imgPlayerUp.frameIndex >= 6) this.imgPlayerUp.frameIndex = 0;
    }
    if (this.down) {
      this.drawDown();
      this.y += this.speed;
      if (framesCounter % 10 == 0) this.imgPlayerUp.frameIndex++;
      if (this.imgPlayerUp.frameIndex >= 6) this.imgPlayerUp.frameIndex = 0;
    }
    if (!this.left && !this.right && !this.down && !this.up) {
      this.drawStand();
    }

    this.control();
  }
  //Funcion de lanzar magia

  magicCast() {
    let magics = new Magic(this.x, this.y+20, 30, 30, this.ctx);
    magics.init();
  }

  //Control del PLayer
  control() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 39:
          this.right = true;
          this.left = false;
          this.up = false;
          this.down = false;
          break;
        case 37:
          this.right = false;
          this.left = true;
          this.up = false;
          this.down = false;
          break;
        case 38:
          this.right = false;
          this.left = false;
          this.up = true;
          this.down = false;
          break;
        case 40:
          this.right = false;
          this.left = false;
          this.up = false;
          this.down = true;
          break;
        case 32:

          this.magicCast();
          break;
      }
      //     if (e.keyCode == 39) {
      //     // RIGHT

      //     this.right = true;
      //     this.left = false;
      //     this.up = false;
      //     this.down = false;
      //   }
      //   if (e.keyCode == 37) {
      //     //LEFT

      //     this.right = false;
      //     this.left = true;
      //     this.up = false;
      //     this.down = false;
      //   }
      //   if (e.keyCode == 38) {
      //     // UP

      //     this.right = false;
      //     this.left = false;
      //     this.up = true;
      //     this.down = false;
      //   }
      //   if (e.keyCode == 40) {
      //     // DOWN

      //     this.right = false;
      //     this.left = false;
      //     this.up = false;
      //     this.down = true;
      //   }

      //   if (e.keyCode == 32) {

      //     this.magicCast()

      //   }
    };
  }
}
let player = new Player();

///////////////ENEMY///////////////////

class Enemy {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.ctx = ctx;

    this.sizeW = 100;
    this.sizeH = 100;
    this.speed = 0.5;

    this.up = false;
    this.right = false;
    this.down = false;
    this.left = false;
    this.active = true;

    this.imgEnemy = new Image();
    this.imgEnemy.src = "./img/flame2.png";
    this.imgEnemy.frames = 4;
    this.imgEnemy.frameIndex = 0;
  }
  // Ir a por el jugador
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

  draw() {
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
    this.draw();
    if (framesCounter % 9 == 0) this.imgEnemy.frameIndex++;
    if (this.imgEnemy.frameIndex >= 4) this.imgEnemy.frameIndex = 0;
    this.chase();
  }
}

let enemy = new Enemy();

/////////////////MAGIC////////////////
let magicCounter = [];

class Magic {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.active = true;
    this.sizeW = w;
    this.sizeH = h;
    this.ctx = ctx;
    this.imgMagic = new Image();
    this.imgMagic.src = "./img/magic.png";
    this.imgMagic.frames = 3;
    this.imgMagic.frameIndex = 0;
  }

  init() {
    magicCounter.push(this);
  }

  draw() {
    if (this.active) {
      this.ctx.drawImage(
        this.imgMagic,
        this.imgMagic.frameIndex *
          Math.floor(this.imgMagic.width / this.imgMagic.frames),
        0,
        Math.floor(this.imgMagic.width / this.imgMagic.frames),
        this.imgMagic.height,
        this.x,
        this.y,
        this.sizeW,
        this.sizeH
      );
    }
    if (player.up) {
      this.y -= this.speed;
      console.log("up");
    }
    if (player.right) {
      this.x += this.speed;
      console.log("right");
    }
    if (player.down) {
      this.y += this.speed;
      console.log("down");
    }
    if (player.left) {
      this.x -= this.speed;
      console.log("left");
    }
  }

  animate() {
    if (player.up) {
      this.y -= this.speed;
      this.draw();
      if (framesCounter % 10 == 0) this.imgMagic.frameIndex++;
      if (this.imgMagic.frameIndex >= 3) this.imgMagic.frameIndex = 0;
    }
    if (player.right) {
      this.x += this.speed;
      this.draw();
      if (framesCounter % 10 == 0) this.imgMagic.frameIndex++;
      if (this.imgMagic.frameIndex >= 3) this.imgMagic.frameIndex = 0;
    }
    if (player.down) {
      this.y += this.speed;
      this.draw();
      if (framesCounter % 10 == 0) this.imgMagic.frameIndex++;
      if (this.imgMagic.frameIndex >= 3) this.imgMagic.frameIndex = 0;
    }
    if (player.left) {
      this.x -= this.speed;
      this.draw();
      if (framesCounter % 10 == 0) this.imgMagic.frameIndex++;
      if (this.imgMagic.frameIndex >= 3) this.imgMagic.frameIndex = 0;
    }
    if (this.x > w || this.y > h || this.x < 0 || this.y < 0) {
      this.active = false;
    }
    if (!this.active) {
      magicCounter.shift(this);
    }
  }

  
}

function drawMagic() {
    let counter = magicCounter.length
    for (var i = 0; i < counter; i++) {
        magicCounter[i].draw()
        magicCounter[i].animate()
    }
}

////////////////INTERVAL///////////////

setInterval(() => {
  framesCounter++;
  clearScreen();
  enemy.animate();
  player.animate();
  drawMagic()
}, 1000 / fps);

function clearScreen() {
  ctx.clearRect(0, 0, w, h);
}
