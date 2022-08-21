var canvas;
var backgroundImage, doggie1_img, doggie2_img;
var chocolateImage, watermelonImage;

var database, gameState;
var form, player, playerCount;
var allPlayers, doggie1, doggie2, chocolate, watermelon;
var invisibleGround;
var sick;

var doggies = [];


var score = 0;

function preload() {
  backgroundImage = loadImage("assets/background.png");
  doggie1_img = loadImage("assets/doggie1.png");
  doggie2_img = loadImage("assets/doggie2.png");
  chocolateImage = loadImage("assets/chocolate.png");
  watermelonImage = loadImage("assets/watermelon.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  invisibleGround = createSprite(200,190,340,10);
  invisibleGround.visible = false;

  invisibleGround.x = invisibleGround.width/2; 
  invisibleGround.velocityX = -10;
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
