var background, bg, sleep, brush, gym, eat, drink, move;
var astronaut;


function preload(){
  bg = loadImage("images/iss.png")
  sleep = loadImage("images/sleep.png")
  brush = loadImage("images/brush.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png") 
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadImage("images/drink1.png","images/drink2.png")
  move = loadImage("images/move1.png")

}

function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300,230,10,10);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  background = createSprite(200,200,10,10);
  background.addAnimation("Back",bg);
}

function draw() {
  background(220);
  drawSprites();
}