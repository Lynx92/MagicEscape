//Selector Canvas
let startButton = document.querySelector(".btn");

//Selector Bton (elimina el menu y da paso a arrancar el juego)
startButton.onclick = () => {
  let menu = document.querySelector(".menu");
  menu.remove();
  startGame();
};

//Arranca el juego
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
  const fps = 60; //FPS

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /////////////////////////PLAYER/////////////////////////
  class Player {
    constructor() {
      this.x = w2;
      this.y = h2;

      this.ctx = ctx;
      this.speed = 2;

      this.w = 75;
      this.h = 90;

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
        if (this.imgPlayerLeft.frameIndex >= 6)
          this.imgPlayerLeft.frameIndex = 0;
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
      if (this.y > h - 180) this.y = h - 180;
      if (this.y < 60) this.y = 60;
      if (this.x < 200) this.x = 200;
      if (this.x > w - 250) this.x = w - 250;
      this.control();
    }
    //Funcion de lanzar magia
    magicCast() {
      magicCounter.push(new Magic());
      // damageToEnemy();
      //magics.init();
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
              attackSound();
            }

            break;
        }
      };
    }
  }
  let player = new Player();

  ///////////////ENEMY///////////////////

  class Enemy {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;

      this.ctx = ctx;

      this.sizeW = 100;
      this.sizeH = 100;
      this.speed = speed;

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
      enemyArr.push(enemy);
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
      //Limites Enemigo
      if (this.y > h - 180) this.y = h - 180;
      if (this.y < 60) this.y = 60;
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
    }
  }

  //Random selector to appear on left or right side
  function selectSide() {
    if (randomIntFromInterval(1, 10) < 5) {
      return 100;
    } else {
      return w - 100;
    }
  }
  ///////ENEMIES STAGES////////

  ////////////STAGE 1/////////////
  stageCounter = 0;

  let enemies = [
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1.5)
  ];

////////////////STAGE 2///////////////
  let enemies2 = [
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 0.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1.5),
    new Enemy(selectSide(), randomIntFromInterval(200, h - 200), 1.5)
  ];

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
      // magicCounter.push(this);
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
      if (player.up) {
        //Controlar la direccion de la magia
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
        magicCounter = [];
      }
    }

    damageToEnemy() {
      // console.log(enemy.x, enemy.y)
      // console.log(magicCounter[0].x, magicCounter[0].y)
      // console.log(getDist(enemies[0].x, enemies[0].y, magicCounter[0].x, magicCounter[0].y));

      if (
        getDist(
          enemies[0].x,
          enemies[0].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[0].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[1].x,
          enemies[1].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[1].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[2].x,
          enemies[2].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[2].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[3].x,
          enemies[3].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[3].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[4].x,
          enemies[4].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[4].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[5].x,
          enemies[5].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[5].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[6].x,
          enemies[6].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[6].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[7].x,
          enemies[7].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[7].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[8].x,
          enemies[8].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[8].active = false;
        score += 5;
      }
      if (
        getDist(
          enemies[9].x,
          enemies[9].y,
          magicCounter[0].x,
          magicCounter[0].y
        ) < 80
      ) {
        enemies[9].active = false;
        score += 5;
      }

    if (
      getDist(
        enemies2[0].x,
        enemies2[0].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[0].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[1].x,
        enemies2[1].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[1].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[2].x,
        enemies2[2].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[2].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[3].x,
        enemies2[3].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[3].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[4].x,
        enemies2[4].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[4].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[5].x,
        enemies2[5].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[5].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[6].x,
        enemies2[6].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[6].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[7].x,
        enemies2[7].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[7].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[8].x,
        enemies2[8].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[8].active = false;
      score += 5;
    }
    if (
      getDist(
        enemies2[9].x,
        enemies2[9].y,
        magicCounter[0].x,
        magicCounter[0].y
      ) < 80
    ) {
      enemies2[9].active = false;
      score += 5;
    }
  }
  }

  function drawMagic() {
    let counter = magicCounter.length;

    for (var i = 0; i < counter; i++) {
      magicCounter[i].draw();
      magicCounter[i].animate();

      if (magicCounter.length > 0) magicCounter[i].damageToEnemy();
    }
  }

  ////////////////////////////////BACKGROUND////////////////////////
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
    ctx.font = "17px Rye";
    ctx.fillText("HP", 247, h - 45);
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
    ctx.font = "17px Rye";
    ctx.fillText("MP", 365, h - 45);
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
      return distance(x1, y1, x2, y2);
    }
  }
  //Do damage to the player´s HP when enemy is near
  function damageToPlayer() {
    if (
      getDist(player.x, player.y, enemies[0].x, enemies[0].y) < 100 &&
      enemies[0].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[1].x, enemies[1].y) < 100 &&
      enemies[1].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[2].x, enemies[2].y) < 100 &&
      enemies[2].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[3].x, enemies[3].y) < 100 &&
      enemies[3].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[4].x, enemies[4].y) < 100 &&
      enemies[4].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[5].x, enemies[5].y) < 100 &&
      enemies[5].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[6].x, enemies[6].y) < 100 &&
      enemies[6].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[7].x, enemies[7].y) < 100 &&
      enemies[7].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[8].x, enemies[8].y) < 100 &&
      enemies[8].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies[9].x, enemies[9].y) < 100 &&
      enemies[9].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[0].x, enemies2[0].y) < 100 &&
      enemies2[0].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[1].x, enemies2[1].y) < 100 &&
      enemies2[1].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[2].x, enemies2[2].y) < 100 &&
      enemies2[2].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[3].x, enemies2[3].y) < 100 &&
      enemies2[3].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[4].x, enemies2[4].y) < 100 &&
      enemies2[4].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[5].x, enemies2[5].y) < 100 &&
      enemies2[5].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[6].x, enemies2[6].y) < 100 &&
      enemies2[6].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[7].x, enemies2[7].y) < 100 &&
      enemies2[7].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[8].x, enemies2[8].y) < 100 &&
      enemies2[8].active == true
    ) {
      health.points -= 0.3;
    }
    if (
      getDist(player.x, player.y, enemies2[9].x, enemies2[9].y) < 100 &&
      enemies2[9].active == true
    ) {
      health.points -= 0.3;
    }
  }
  //Do damage to enemy when magic touchs him
  // damageToEnemy = () => {

  //   if (getDist(enemies.x, enemy.y, magicCounter[0].x, magicCounter[0].y) < 100) {
  //     enemies.active[0] = false;
  //     enemyArr.pop(enemies);
  //   }
  // };
  ////////////////MANA BOTTLE////////////////////
  let bottleCounter = 0;

  class ManaBottle {
    constructor() {
      this.x = 300;
      this.y = 500;
      this.ctx = ctx;
      this.active = false;
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
      );
    }

    //Controls when mana bottle appears and how much time the bottle stays
    appear() {
      this.getBottle();
      if (this.active) {
        if (bottleCounter > 200 && bottleCounter < 600) {
          this.draw();
          potionSound();
        }
      }

      if (bottleCounter > 700) {
        bottleCounter = 0;
        this.x = selectPos();
        this.y = selectPos();
        this.active = true;
      }
    }

    getBottle() {
      if (getDist(manaBottle.x, manaBottle.y, player.x, player.y) < 100) {
        this.active = false;
        mana.points += 5;
        // console.log("Ñam");
      }
    }
  }

  let manaBottle = new ManaBottle();

  function selectPos() {
    return randomIntFromInterval(300, 800);
  }

  ////////////////SOUNDS/////////////////
  function playAudio() {
    let audio = new Audio("./img/gameBackGroundMusic.mp3");
    audio.volume = 0.1;
    audio.play();
  }

  function attackSound() {
    let audio = new Audio("./img/attackSound.mp3");
    audio.volume = 0.7;
    audio.play();
  }
  function potionSound() {
    let audio = new Audio("./img/potion.mp3");
    audio.volume = 0.7;
    audio.play();
  }

  playAudio();

  //////////////////CHANGE LEVEL////////////
  function firstStage(){
      enemies[0].animate();
      enemies[1].animate();
      enemies[2].animate();
      enemies[3].animate();
      enemies[4].animate();
      if(stageCounter > 600){
      enemies[5].animate();
      enemies[6].animate();
      enemies[7].animate();
      enemies[8].animate();
      enemies[9].animate();}
      nextStage()
  }



  function nextStage() {
    
    if (stageCounter > 1100) {
      stage = 2
      enemies2[0].animate();
      enemies2[1].animate();
      enemies2[2].animate();
      enemies2[3].animate();
      enemies2[4].animate();
      enemies2[5].animate();
      enemies2[6].animate();
      enemies2[7].animate();
      enemies2[8].animate();
      enemies2[9].animate();
    }
  }
  //////////////////SCORE////////////////////
  let score = 0;
  let stage = 1

  function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "30px Rye";
    ctx.fillText(score, w - 310, h - 45);
  }

  function drawStage() {
    ctx.fillStyle = "white";
    ctx.font = "35px Rye";
    ctx.fillText(`Stage ${stage}`, w2, h - 45);
  }

  //////////////WIN///////////////
  function winGAme() {
    if (
      enemies2[0].active == false &&
      enemies2[1].active == false &&
      enemies2[2].active == false &&
      enemies2[3].active == false &&
      enemies2[4].active == false &&
      enemies2[5].active == false &&
      enemies2[6].active == false &&
      enemies2[7].active == false &&
      enemies2[8].active == false &&
      enemies2[9].active == false
    ) {
      alert(`You Win! Score: ${score}`);
      location.reload();
    }
  }

  //////////////////////INTERVAL/////////////////////

  setInterval(() => {
    clearScreen();
    hpCount++;
    manaCount++;
    framesCounter++;
    bottleCounter++;
    stageCounter++;
    background.draw();
    barHP();
    barMP();
    manaBottle.appear();
    drawScore();
    drawStage()
    player.animate();
    drawMagic();
    firstStage();
    // damageToPlayer();
    winGAme();
  }, 1000 / fps);

  function clearScreen() {
    ctx.clearRect(0, 0, w, h);
  }
}
