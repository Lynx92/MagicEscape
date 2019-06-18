let Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    SPACE: 32
  },

  init: function(canvasId) {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector(canvasId);

    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");

    // ScoreBoard.init(this.ctx);

    this.canvas.setAttribute("height", window.innerHeight);
    this.canvas.setAttribute("width", window.innerWidth);

    this.start();
  },

    start: function() {
      this.fps = 60;

  //   this.reset();

  this.interval = setInterval(() => {
    // this.clear();

    // this.framesCounter++;

    // controlamos que frameCounter no sea superior a 1000
    // if (this.framesCounter > 1000) {
    //   this.framesCounter = 0;
    // }

    // controlamos la velocidad de generación de enemigos
    // if (this.framesCounter % 50 === 0) {
    //   this.generateEnemies();
    // }

  //   this.score += 1;

    // this.moveAll()
    // this.drawAll()

  // eliminamos enemigos destruidos del canvas
  // this.clearEnemies();

  //       if (this.isCollision()) {
  //         this.gameOver();
  //       }
      }, 1000 / this.fps);
     },

  //   stop: function() {
  //     clearInterval(this.interval);
  //   },

  //   //fin de juego
  //   gameOver: function() {
  //     this.stop();

  //     if (confirm("You died...")) {
  //       this.reset();
  //       this.start();
  //     }
  //   },

  //   reset: function() {
  //     this.background = new Background(
  //       this.canvas.width,
  //       this.canvas.height,
  //       this.ctx
  //     );
  //     this.player = new Player(
  //       this.canvas.width,
  //       this.canvas.height,
  //       this.ctx,
  //       this.keys
  //     );
  //     this.scoreBoard = Score;
  //     this.framesCounter = 0;
  //     this.enemies = [];
  //     this.score = 0;
  //   },

  //   isCollision: function() {
  //     return this.enemies.some(enemy => {
  //       return (
  //         this.player.x + this.player.w >= enemy.x &&
  //         this.player.x < enemy.x + enemy.w &&
  //         this.player.y + (this.player.h - 20) >= enemy.y
  //       );
  //     });
  //   },

  //   clearEnemies: function() {
  //     this.enemies = this.enemies.filter(function(enemy) {
  //       return enemy.x >= 0;
  //     });
  //   },

  //   generateEnemies: function() {
  //     this.enemies.push(
  //       new Enemy(this.canvas.width, this.player.y0, this.player.h, this.ctx)
  //     );
  //   },

    clear:function() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    },

    drawAll: function() {
      // this.background.draw();
      // this.Player.draw(this.framesCounter);
      // this.enemies.forEach(function(enemy) {
        // enemy.draw();
      // });
      // this.drawScore();
    },

    moveAll: function() {
        // this.background.move()
        // this.player.move()
    //     this.enemies.forEach(function(enemy) {
    //       enemy.move();
    // })
  },
  // drawScore: function() {
  //     this.scoreBoard.update(this.score)
  // },
};

console.log("Game OK");
