var ball;
var dataBase, position;
function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var node = dataBase.ref("ball/position");
    node.on("value",readPosition,showError);

}

function readPosition(data){
    position = data.val()
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("Error while reading from the database");
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   dataBase.ref("ball/position").set({
       x: position.x + x,
       y: position.y + y
   })

}
