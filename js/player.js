class Player {
  constructor() {
    this.x = w2;
    this.y = h2;

    this.speed = 30;

    this.w = 50;
    this.h = 75;

    this.up = false;
    this.right = false;
    this.down = false;
    this.left = false;

    this.imgPlayerStand = new Image();
    this.imgPlayerStand.scr = "./img/playerStand.png";
    this.imgPlayerStand.frames = 1;
    this.imgPlayerStand.frameIndex = 0;

    this.imgPlayerRight = new Image();
    this.imgPlayerRight.src = "img/playerRight.png";
    this.imgPlayerRight.frames = 6;
    this.imgPlayerRight.frameIndex = 0;

    this.imgPlayerLeft = new Image();
    this.imgPlayerLeft.src = "img/playerLeft.png";
    this.imgPlayerLeft.frames = 6;
    this.imgPlayerLeft.frameIndex = 0;

    this.imgPlayerUp = new Image();
    this.imgPlayerUp.src = "img/playerUp.png";
    this.imgPlayerUp.frames = 6;
    this.imgPlayerUp.frameIndex = 0;

    this.setListeners()
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }





}



// function controlPlayer() {

//   window.onkeydown = function(e) {
//     console.log(e.keyCode);
//     switch (e.keyCode) {
//       case 39: //goes to the right

//         player.x += player.speed;
//         player.up = false;
//         player.right = true;
//         player.down = false;
//         player.left = false;
//         break;

//       case 37: //goes to the left
//         player.x -= player.speed;
//         player.up = false;
//         player.right = false;
//         player.down = false;
//         player.left = true;
//         break;

//       case 38: //goes up
//         player.y -= player.speed;
//         player.up = true;
//         player.right = false;
//         player.down = false;
//         player.left = false;
//         break;

//       case 40: //goes down
//         player.y += player.speed;
//         player.up = false;
//         player.right = false;
//         player.down = true;
//         player.left = false;
//         break;
//       case 32: //cast magic
//         // drawMagic();
//         // magicLogic();
//         if (mana.points > 15) {
//           createMagic();
//           mana.points -= 15;
//         }
//         break;
//     }
//   };
// }

//   let img = new Image();
//   img.onload = onImageLoad;
//   img.src = 'img/playerStand.png';

//  var onImageLoad = function() {
//   console.log("Image has loaded");
//   ctx.drawImage(img, 0, 0, 500, 500);
// };

// onImageLoad()

//   function drawStand () {
//     ctx.drawImage(
//       imgPlayerStand,
//       imgPlayerStand.frameIndex *
//         Math.floor(imgPlayerStand.width / imgPlayerStand.frames),
//       0,
//       Math.floor(imgPlayerStand.width / imgPlayerStand.frames),
//       imgPlayerStand.height,
//       player.x,
//       player.y,
//       player.w,
//       player.h
//     );
//   }

//   function drawRight() {
//     ctx.drawImage(
//       player.imgPlayerRight,
//       player.imgPlayerRight.frameIndex *
//         Math.floor(player.imgPlayerRight.width / player.imgPlayerRight.frames),
//       0,
//       Math.floor(player.imgPlayerRight.width / player.imgPlayerRight.frames),
//       player.imgPlayerRight.height,
//       player.x,
//       player.y,
//       player.w,
//       player.h
//     );
//   }
