const canvas = document.querySelector('#draw');
canvas.width = 1000;
canvas.height = 600;
const ctx = canvas.getContext('2d');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = '#000';


let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  // stop the function if they are not mouse down
  if (!isDrawing) return;
  //listen for mouse move event
  //console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function colorMenu() {
  document.getElementById("myDropdown").classList.toggle("palette-show");
}

function settingsMenu() {
  document.getElementById("settingsDropdown").classList.toggle("settings-show");
}

var palette = document.querySelector("#palette");
var eraser = document.querySelector("#eraser");
var settings = document.querySelector("#settings");

var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var orange = document.querySelector("#orange");
var pink = document.querySelector("#pink");
var gray = document.querySelector("#gray");
var white = document.querySelector("#white");
var black = document.querySelector("#black");


palette.onclick = () => {
  canvas.classList.remove('eraser');
  canvas.classList.add('pen');
  colorMenu();
  ctx.lineWidth = 10;
};

red.onclick = () => {
  ctx.strokeStyle = "#FF4444";
};
green.onclick = () => {
  ctx.strokeStyle = "#5CFF40";
};
blue.onclick = () => {
  ctx.strokeStyle = "#347EFF";
};
orange.onclick = () => {
  ctx.strokeStyle = "#FA9C39";
};
pink.onclick = () => {
  ctx.strokeStyle = "#FF86FA";
};
gray.onclick = () => {
  ctx.strokeStyle = "#979797";
};
white.onclick = () => {
  ctx.strokeStyle = "#FFFFFF";
};
black.onclick = () => {
  ctx.strokeStyle = "#000000";
};

eraser.onclick = () => {
  canvas.classList.remove('pen');
  canvas.classList.add('eraser');
  ctx.lineWidth = 50;
  ctx.strokeStyle = "#FFFEE1";

};



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
