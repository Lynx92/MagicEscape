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

      animate() {
        if (this.left) {
          this.drawStand();
          this.x -= this.speed;
        }
        if (this.right) {
          this.drawStand();
          this.x += this.speed;  
        }
        if (this.up) {
          this.drawStand();
          this.y -= this.speed;
        }
        if (this.down) {
          this.drawStand();
          this.y += this.speed;
        }
        if (!this.left && !this.right && !this.down && !this.up) {
          this.drawStand();
        }
}  
}