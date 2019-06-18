// window.onload = function() {
//     Game.init("#myCanvas");
//   };
  

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

function drawAll() {
  // background()
  // paintPlayer();
  // drawEnemy();
  // drawMagic()s
}

function logicAll() {
  // frameCount++
  // manaCount++
  // hpCount++
  // manaRecharger()
  // hpRecharger()
}

function moveAll() {
  // controlPlayer();
  // drawStand()
  // enemy.chase();
  // magicLogic()
  // drawMagic()
  
  // barMP()
  
  // barHP() 
  // damageToPlayer()
  // player(ctx)
  // draw()
  player.draw()
  
}

let fps = 60;

let frameCount = 0
let manaCount = 0
let hpCount = 0



setInterval(() => {
  clearScreen();
  logicAll()
  drawAll();
  moveAll();
}, 1000 / fps);

function clearScreen() {
  ctx.clearRect(0, 0, w, h);
}
