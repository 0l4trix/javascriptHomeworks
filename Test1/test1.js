const img = new Image();

img.src = "gamebackground.jpg";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30;
const scale = 1;
const y = -4.5; // vertical offset - ??? the hell is this for? smaller images?

let dx = 10; //higher faster, also - to turn around direction
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;  
  imgH = img.height * scale;

  /*
  if (imgW > canvasXSize) {
    x = canvasXSize - imgW;
  }
  */

  // Check if image dimension is larger than canvas
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  ctx = document.querySelector("canvas").getContext("2d");

  //return setInterval(draw, speed);
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowLeft':
        draw();
        break;
      case 'ArrowRight':
        drawReverse();
    }
  })

  drawReverse(); //make them return coordinates instead and draw that to not be one step late?
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY);

  /*if (imgW <= canvasXSize) {
    // Reset, start from beginning
    
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // Draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    // Draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {*/
  // Reset, start from beginning
  if (x > canvasXSize) {
    x = canvasXSize - imgW;
  }

  // Draw additional image
  if (x > canvasXSize - imgW) {
    ctx.drawImage(img, x - imgW, y, imgW, imgH);
  }
  //}

  ctx.drawImage(img, x, y, imgW, imgH);

  x += dx;
}

function drawReverse() {
  ctx.clearRect(0, 0, clearX, clearY);

  // Reset, start from beginning
  if (Math.abs(x) > canvasXSize - 100) { //solved, but what's with the number???
    x = -canvasXSize + imgW + 100;
  }

  // Draw additional image
  if (Math.abs(x) > canvasXSize - imgW) {
    ctx.drawImage(img, x - imgW, y, imgW, imgH);
  }

  ctx.drawImage(img, x, y, imgW, imgH);

  x -= dx;
}