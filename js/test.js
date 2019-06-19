let startButton = document.querySelector(".btn")

startButton.onclick = function () {
let menu = document.querySelector(".menu")
menu.remove()
startGame()
}


function startGame() {

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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    //Limites Player
    if (this.y > h - 170) this.y = h - 170;
    if (this.y < 60) this.y = 60;
    if (this.x < 200) this.x = 200;
    if (this.x > w - 250) this.x = w - 250;
    this.control();
  }
  //Funcion de lanzar magia

  magicCast() {
    let magics = new Magic();
    damageToEnemy()
    magics.init();
  }

  //Control del PLayer
  control() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 39: // Go Right
          this.right = true;
          this.left = false;
          this.up = false;
          this.down = false;
          break;
        case 37: // Go Left
          this.right = false;
          this.left = true;
          this.up = false;
          this.down = false;
          break;
        case 38: // Go Up
          this.right = false;
          this.left = false;
          this.up = true;
          this.down = false;
          break;
        case 40: // Go Down
          this.right = false;
          this.left = false;
          this.up = false;
          this.down = true;
          break;
        case 32: // Attack (Space)
          if (mana.points > 15) {
            this.magicCast();
            mana.points -= 15;
          }
          // damageToEnemy()
          break;
      }
      
    };
  }
}
let player = new Player();





///////////////ENEMY///////////////////

class Enemy {
  constructor() {
    this.x = this.selectSide();
    this.y = randomIntFromInterval(150, h - 150);

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

  init() {
    enemyArr.push(this);
  }
  // Go to the player´s position
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

  //Random selector to appear on left or right side
  selectSide() {
    if (randomIntFromInterval(1, 10) < 5) {
      return 100;
    } else {
      return w - 100;
    }
  }

  draw() {
    if (this.active) {
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
  }

  animate() {
    this.draw();
    if (framesCounter % 9 == 0) this.imgEnemy.frameIndex++;
    if (this.imgEnemy.frameIndex >= 4) this.imgEnemy.frameIndex = 0;
    this.chase();

    if (!this.active) {
      magicCounter.shift(this);
    }
  }
}

let enemy2 = new Enemy();
let enemy = new Enemy();
let enemyArr = [enemy];

///////////////////////// MAGIC //////////////////////////
let magicCounter = [];

class Magic {
  constructor() {
    this.x = player.x;
    this.y = player.y;
    this.speed = 5;
    this.active = true;
    this.sizeW = 30;
    this.sizeH = 30;
    this.ctx = ctx;
    this.imgMagic = new Image();
    this.imgMagic.src = "./img/magic.png";
    this.imgMagic.frames = 3;
    this.imgMagic.frameIndex = 0;
  }

  init() {
    magicCounter.push(this);
    // this.damageToEnemy()
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
    if (player.up) { //Controlar la direccion de la magia
      this.y -= this.speed;
    }
    if (player.right) {
      this.x += this.speed;
    }
    if (player.down) {
      this.y += this.speed;
    }
    if (player.left) {
      this.x -= this.speed;
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

  damageToEnemy() {
    console.log(getDist(enemy.x, enemy.y, magics.x, magics.y));
    if (getDist(enemy.x, enemy.y, magics.x, magics.y) < 300) {
      enemy.active = false;
      // enemyArr.pop(this);
    }

}}

function drawMagic() {
  let counter = magicCounter.length;
  // damageToEnemy();
  for (var i = 0; i < counter; i++) {
    magicCounter[i].draw();
    magicCounter[i].animate();
  }
}
let magics = new Magic();




////////////////BACKGROUND//////////////
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.ctx = ctx;

    this.sizeW = w;
    this.sizeH = h;

    this.imgBack = new Image();
    this.imgBack.src = "./img/sandFloor.jpg";
    this.imgBack.frames = 1;
    this.imgBack.frameIndex = 0;

    this.imgWall = new Image();
    this.imgWall.src = "./img/brickWall.jpg";
    this.imgWall.frames = 1;
    this.imgWall.frameIndex = 0;

    this.imgGate = new Image();
    this.imgGate.src = "./img/Gate.png";
    this.imgGate.frames = 1;
    this.imgGate.frameIndex = 0;

    this.imgFireLeft = new Image();
    this.imgFireLeft.src = "./img/fireWallLeft.png";
    this.imgFireLeft.frames = 1;
    this.imgFireLeft.frameIndex = 0;

    this.imgFireRight = new Image();
    this.imgFireRight.src = "./img/fireWallRight.png";
    this.imgFireRight.frames = 1;
    this.imgFireRight.frameIndex = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.imgBack,
      this.imgBack.frameIndex *
        Math.floor(this.imgBack.width / this.imgBack.frames),
      0,
      Math.floor(this.imgBack.width / this.imgBack.frames),
      this.imgBack.height,
      this.x,
      this.y,
      this.sizeW,
      this.sizeH
    );

    this.ctx.drawImage(
      this.imgWall,
      this.imgWall.frameIndex *
        Math.floor(this.imgWall.width / this.imgWall.frames),
      0,
      Math.floor(this.imgWall.width / this.imgWall.frames),
      this.imgWall.height,
      0,
      h - 100,
      w,
      h - 100
    );

    this.ctx.drawImage(
      this.imgGate,
      this.imgGate.frameIndex *
        Math.floor(this.imgGate.width / this.imgGate.frames),
      0,
      Math.floor(this.imgGate.width / this.imgGate.frames),
      this.imgGate.height,
      0,
      0,
      w,
      100
    );

    this.ctx.drawImage(
      this.imgFireLeft,
      this.imgFireLeft.frameIndex *
        Math.floor(this.imgFireLeft.width / this.imgFireLeft.frames),
      0,
      Math.floor(this.imgFireLeft.width / this.imgFireLeft.frames),
      this.imgFireLeft.height,
      0,
      0,
      200,
      h
    );

    this.ctx.drawImage(
      this.imgFireRight,
      this.imgFireRight.frameIndex *
        Math.floor(this.imgFireRight.width / this.imgFireRight.frames),
      0,
      Math.floor(this.imgFireRight.width / this.imgFireRight.frames),
      this.imgFireRight.height,
      w - 200,
      0,
      200,
      h
    );
  }
}

let background = new Background();

//////////////////HP///////////////////
let hpCount = 0;

let health = {
  points: 100,
  reload: true
};
// HP recharges over time
function hpRecharger() {
  if (health.points < 100) {
    health.reload = true;
  }
  if (hpCount % 200 == 0) {
    health.points++;
  }
  if (health.points > 100) {
    health.points = 100;
    hpCount = 0;
    health.reload = false;
  }
  if (health.points < 0) {
    health.points = 0;
  }
}
//Draw the HP circle
function barHP() {
  hpRecharger();
  barHPBorder();
  die();
  ctx.fillStyle = "#8F210E";
  ctx.beginPath();
  ctx.arc(260, h - 50, health.points / 2.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.font = "17px Verdana";
  ctx.fillText("HP", 251, h - 45);
}

function barHPBorder() {
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.arc(260, h - 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function die() {
  if (health.points == 0) {
    alert("You Died...");
    location.reload();
  }
}

/////////////////MANA//////////////////
let manaCount = 0;

let mana = {
  points: 100,
  reload: true
};
// MP recharges over time
function manaRecharger() {
  if (mana.points < 100) {
    mana.reload = true;
  }
  if (manaCount % 50 == 0) {
    mana.points++;
  }
  if (mana.points > 100) {
    mana.points = 100;
    manaCount = 0;
    mana.reload = false;
  }
  if (mana.points < 0) {
    mana.points = 0;
  }
}
// Draw the MP circle
function barMP() {
  manaRecharger();
  barMPBorder();
  ctx.fillStyle = "#0A0B8F";
  ctx.beginPath();
  ctx.arc(380, h - 50, mana.points / 2.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.font = "17px Verdana";
  ctx.fillText("MP", 370, h - 45);
}

function barMPBorder() {
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.arc(380, h - 50, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

////////////////DISTANCE && DAMAGE////////////////
function distance(x1, y1, x2, y2) {
  if (!x2) x2 = 0;
  if (!y2) y2 = 0;
  return Math.floor(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));
}

//Distance between player and enemy
function getDist(x1, y1, x2, y2) {
  if (distance(x1, y1, x2, y2) >= 0) {
    // console.log(distance(x1,y1,x2,y2))
    return distance(x1, y1, x2, y2);
  }
}
//Do damage to the player´s HP when enemy is near
function damageToPlayer() {
  if (getDist(player.x, player.y, enemy.x, enemy.y) < 100) {
    health.points -= 0.3;
  }
}
//Do damage to enemy when magic touchs him
damageToEnemy =()=> {
  console.log(enemy.x, enemy.y, magics.x, magics.y)
  console.log(getDist(enemy.x, enemy.y, magics.x, magics.y));
  if (getDist(enemy.x, enemy.y, magics.x, magics.y) < 300) {
    enemy.active = false;
    enemyArr.pop(this);
  }
}
////////////////MANA BOTTLE////////////////////
let bottleCounter = 0

let bottles=[]

class ManaBottle {
  constructor() {
    this.x = randomIntFromInterval(200,w-200);
    this.y = randomIntFromInterval(200,h-200);

    this.ctx = ctx;
    this.active = true
    this.sizeW = 50;
    this.sizeH = 50;

    this.imgManaBottle = new Image();
    this.imgManaBottle.src = "./img/manaBottle.png";
    this.imgManaBottle.frames = 1;
    this.imgManaBottle.frameIndex = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.imgManaBottle,
      this.imgManaBottle.frameIndex *
        Math.floor(this.imgManaBottle.width / this.imgManaBottle.frames),
      0,
      Math.floor(this.imgManaBottle.width / this.imgManaBottle.frames),
      this.imgManaBottle.height,
      this.x,
      this.y,
      this.sizeW,
      this.sizeH
      )

      let bottle = new ManaBottle()
      bottles.push(this)
  }

  getBottle() {

  }

}



let manaBottle = new ManaBottle()

////////////////SOUNDS/////////////////
// function playAudio(){
//   let audio = new Audio("./img/gameBackGroundMusic.mp3"
//   );
//   audio.volume = 0.5
//   audio.play();
// }
// class Sounds {
//   constructor() {
  
//   backgroundMusic = new Sounds("/img/gameBackGroundMusic.mp3");
  
  
//   }
//   playBackgroundMusic() {
//     backgroundMusic.play();
//   }
// }

// let sounds = new Sounds()
////////////////INTERVAL///////////////

setInterval(() => {
  clearScreen();
  hpCount++;
  manaCount++;
  framesCounter++;
  bottleCounter++
  // playAudio()
  // sounds.playBackgroundMusic()
  background.draw();
  barHP();
  barMP();
  // manaBottle.appear()
  player.animate();
  enemy.animate();
  // enemy2.animate();
  drawMagic();
  // damageToPlayer();
}, 1000 / fps);

function clearScreen() {
  ctx.clearRect(0, 0, w, h);
}

}