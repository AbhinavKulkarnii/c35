var ball;
var dataBase, position;
var gameState = 0
var playerCount = 0
var form,player,game 

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}



function draw(){
    background("white");
    
}

