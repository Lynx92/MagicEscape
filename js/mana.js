let mana = {
  points: 50,
  reload: true
};

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

function barMP() {
  barMPBorder();
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(80, h - 80, mana.points / 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.font = "20px Verdana";
  ctx.fillText("MP", 68, h - 73);
}

function barMPBorder() {
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.arc(80, h - 80, 67, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}
