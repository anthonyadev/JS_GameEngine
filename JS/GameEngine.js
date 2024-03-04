const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//time variables;
var startTime = new Date();
var totalTime = new Date();
var deltaTime = new Date();

var points = [new Vector2(0,0)];

//framerate
const sixtyFPS = 16.67;

//objects in scene
var sceneObjects = [];
var player = new GameObject(new Vector2(100, 100), 10, 10)
var line = new LineRenderer(player.position, mousePos)

var shotforce;
//Start Function
window.addEventListener("load", (event) => {
    startTime = Date.now()
    player.rigidBody.acceleration = new Vector2(1, 1)
    sceneObjects.push(player);
});

function Update(){
    //FIRST
    totalTime = Date.now() - startTime;
    //SECOND
    sceneObjects.forEach(sceneObj => sceneObj.Update());
    line.Update(player.position, mousePos);

    if(mouseDown)
    {
        mouseClickPos = new Vector2(500, 500)
       player.rigidBody.AddForce(mouseClickPos.Subtract(player.position).Normalize())
      
    }
    //LAST
    Draw();
}

function Draw(){
   //ALWAYS DO FIRST//
   ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
   //loop thru sceneObjects, draw them
    for (let i = 0; i < sceneObjects.length; i++) {
        if(sceneObjects[i].isDrawable){sceneObjects[i].Draw()}
    }
    if(mousePos != null)
    line.Draw();
    ctx.font = "10px Arial";
    ctx.fillText("PLAYERPOS: " + player.position.x.toFixed(2) + " " + player.position.y.toFixed(2), 10, 40);
    ctx.fillText("MOUSEPOSITION: " + mousePos.x + " " + mousePos.y, 10, 60);
    ctx.fillText("CURRENTCLICKPOSITION: " + mouseClickPos.x + " " + mouseClickPos.y, 10, 80);
    ctx.fillText("LASTCLICKEDPOSITION: " + lastClickedPos.x + " " + lastClickedPos.y, 10, 100);

   //FINAL THING, UPDATE DELTA TIME
   deltaTime = Date.now() - startTime - totalTime;
}setInterval(Update, sixtyFPS);