let magicCounter = [];
function magic() {
  this.x = player.x;
  this.y = player.y;
  this.speed = 10;
  this.active = true;
  this.sizeW = 15;
  this.sizeH = 15;
  this.color = "green";

  this.init = function() {
    magicCounter.push(this);
  };

  this.render = function() {
    if (this.active) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.sizeW, this.sizeH);
      ctx.fill();
      ctx.closePath();
    }
    if (player.orientation.up) {
        this.y -= this.speed;
        console.log("up");
      }
      if (player.orientation.right) {
        this.x += this.speed;
        console.log("right");
      }
      if (player.orientation.down) {
        this.y += this.speed;
        console.log("down");
      }
      if (player.orientation.left) {
        this.x -= this.speed;
        console.log("left");
      }
  };

  if (this.active) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.sizeW, this.sizeH);
    ctx.fill();
    ctx.closePath();
  }

  this.update = function() {
    if (this.active) {    

    }
    if (this.x > w || this.y > h || this.x < 0 || this.y < 0) {
      this.active = false;
      
    }if (!this.active) {
      // magicCounter.filter(this.active)
        // magicCounter.splice(this,1)
    }
  };
}

function magicLogic() {
  if (player.orientation.up) {
    magic.y -= magic.speed;
    console.log("up");
  }
  if (player.orientation.right) {
    magic.x += magic.speed;
    console.log("right");
  }
  if (player.orientation.down) {
    magic.y += magic.speed;
    console.log("down");
  }
  if (player.orientation.left) {
    magic.x -= magic.speed;
    console.log("left");
  }
}

function createMagic() {
  magics = new magic();
  magics.init();
}

function drawMagic() {
    let counter = magicCounter.length
  for (var i = 0; i < counter; i++) {
    magicCounter[i].update();
    magicCounter[i].render();
  }
}
