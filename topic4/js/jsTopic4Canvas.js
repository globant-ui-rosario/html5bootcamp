
function init(){
  drawAnimation(); 
  draw(); 
  draw2(); 
  drawRectangle(0,75);
  animateRectangle();
}

function color(){
  let r = Math.round(Math.random()*255);
  let g = Math.round(Math.random()*255);
  let b = Math.round(Math.random()*255);
  let a = 1; //transparencia entre 0 a 1
  return this.rgba = "rgba("+r+", "+g+", "+b+", "+a+")";
}

let requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.requestAnimationFrame || 
                            window.msRequestAnimationFrame;

let requestTimeFrame = 5;
                          
let angle = 0;

function draw(){
  let canvas2 = document.getElementById('canvas2');
  let context = canvas2.getContext('2d');
  context.beginPath();
  context.rect(50, 50, 100, 130);
  context.fillStyle = color();
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = color();
  context.stroke();
}

function draw2(){
  let canvas = document.getElementById('canvas3');
  let context3 = canvas.getContext('2d');
  let centerX3 = canvas.width / 2;
  let centerY3 = canvas.height / 2;
  let radius3 = 70;
  context3.beginPath();
  context3.arc(centerX3, centerY3, radius3, 0, 2 * Math.PI, false);
  context3.fillStyle = color();
  context3.fill();
  context3.lineWidth = 5;
  context3.strokeStyle = color();
  context3.stroke();
}


function drawAnimation(){
  let canvas = document.getElementById('canvas1');
  let context = canvas.getContext('2d');
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
  let radius = 20 + 70 * Math.abs(Math.cos(angle += Math.PI / 64));
  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;


  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.closePath();
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = "mediumslateblue";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "mediumslateblue";
  context.stroke();
  context.closePath();

  requestAnimationFrame(drawAnimation);
}

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.oRequestAnimationFrame || 
  window.msRequestAnimationFrame ||
  function(callback) {
    window.requestTimeFrame(callback, 1000 / 60);
  };
})();

let rectangleData = {
  posX: 0,
  posY: 75,
  width: 100,
  height: 50
}

let animIncrease = {
  x: 1,
  y: 1
}

function drawRectangle() {
  let canvas4 = document.getElementById('canvas4');
  let context = canvas4.getContext('2d');
  context.beginPath();
  context.rect(rectangleData.posX, rectangleData.posY, rectangleData.width, rectangleData.height);
  context.fillStyle = color();
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = color();
  context.stroke();
}

function animateRectangle() {
  let canvas = document.getElementById('canvas4');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  rectangleData.posX += animIncrease.x;
  rectangleData.posY += animIncrease.y;

  if(animIncrease.x == 1){
    if(rectangleData.posX + rectangleData.width >= canvas.width) {
      animIncrease.x = -1;
    }
  }
  else {
    if(rectangleData.posX <= 0){
      animIncrease.x = 1;
    }
  }

  if(animIncrease.y == 1){
    if(rectangleData.posY + rectangleData.height >= canvas.height) {
      animIncrease.y = -1;
    }
  }
  else {
    if(rectangleData.posY <= 0){
      animIncrease.y = 1;
    }
  }

  drawRectangle();
  requestAnimationFrame(animateRectangle);
}







