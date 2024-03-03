var mousePos = new Vector2(0, 0);
var mouseClickPos= new Vector2(0, 0);
var lastClickedPos= new Vector2(0, 0);

var mouseDown;
var mouseUp;

document.addEventListener('mousemove', (event) => {
    mousePos = new Vector2(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

document.addEventListener('mousedown', (event) => {
    mouseUp = false;
    mouseDown = true;
    mouseClickPos = mousePos;
})

document.addEventListener('mouseup', (event) => {
    mouseUp = true;
    mouseDown = false;
    lastClickedPos = mouseClickPos;
    mouseClickPos = new Vector2(0, 0);
})

