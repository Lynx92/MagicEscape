let enemy = {
  x: 0,
  y: h2,
  sizeW: 100,
  sizeH: 100,
  speed: 0.8,
  orientation: {
    up: false,
    right: false,
    down: false,
    left: false
  },
  chase: function() {
    if (enemy.y < player.y) {
      enemy.y += enemy.speed;
    }
    if (enemy.y > player.y) {
      enemy.y -= enemy.speed;
    }
    if (enemy.x < player.x) {
      enemy.x += enemy.speed;
    }
    if (enemy.x > player.x) {
      enemy.x -= enemy.speed;
    }
  }
};

function drawEnemy() {
  ctx.fillStyle = "purple";
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, enemy.sizeW, enemy.sizeH);
  ctx.fill();
  ctx.closePath();
}
