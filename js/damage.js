function distance(x1, y1, x2, y2) {
  if (!x2) x2 = 0;
  if (!y2) y2 = 0;
  return Math.floor(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));
}

function getDist(x1, y1, x2, y2) {
  if (distance(x1, y1, x2, y2) >= 0) {
    // console.log(distance(x1,y1,x2,y2))
    return distance(x1, y1, x2, y2);
  }
}

function damageToPlayer() {
  if (getDist(player.x, player.y, enemy.x, enemy.y) < 100) {
    health.points -= 0.3;
  }
}


function damageToEnemy() {
  if (getDist(enemy.x, enemy.y, magics.x, magics.y) < 100) {
     enemy.active = false;
  }
}
