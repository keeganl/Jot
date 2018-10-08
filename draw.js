//function getCoordinates() {
  // var x = event.clientX
  // var y = event.clientY
  // var coords = "X: " + x + "Y: " + y
  // document.querySelector('#display').innerHTML = coords
  // console.log('Test')
   // onMouseDown(e)
//}

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
  console.log(e);
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