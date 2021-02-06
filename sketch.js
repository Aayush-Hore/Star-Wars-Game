var gameState = 0, playerCount, gameObject, intro, player;
var database;
var enemyBotImg, friendBotImg, playImg, playerImg, playerGunImg, gunImg;
var rebel, soldier;


function preload() {
    enemyBotImg = loadImage("enemy npc robot.png");
    friendBotImg = loadImage("friendly npc robot.png");
    gunImg = loadImage("npc gun.png");
    playImg = loadImage("play button.png");
    playerImg = loadImage("player.png");
    playerGunImg = loadImage("player gun.png");

}


function setup() {
    createCanvas(1600, 800);
    database = firebase.database();
   
    gameObject = new Game();
    x = gameObject.start(); 
    player.update(x);
    player.choice = x;

    // start() function from Game class
}

function draw() 
{
    // clear();

    
    //console.log(player.choice);
    drawSprites();
}
