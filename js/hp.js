let health = {
    points: 100,
    reload: true
  };
  
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
  
  function barHP() {
      barHPBorder();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(80, h - 250, health.points / 1.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "black"
    ctx.font = "20px Verdana";
      ctx.fillText("HP", 68, h -248);
  
    
  }
  
  function barHPBorder() {
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(80, h - 250, 67, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
  }