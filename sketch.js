var cat;
var catImage;
var mouseImage;
var cat_running;
var mouse;
var mouse_running;
var garden;
var gardenImage;
var cat_running
function preload() {
    //load the images here
    cat_running = loadAnimation("images/cat2.png","images/cat3.png");
    mouse_running = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImage = loadImage("images/cat4.png");
    mouseImage = loadImage("images/mouse1.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,500,400,400);
    cat.addAnimation("moving",cat_running);
    cat.scale = 0.2;
  
    mouse = createSprite(250,550,200,200);
    mouse.addAnimation("mouse",mouse_running);
    mouse.scale = 0.2;

    garden = createSprite(500,400,10,10);
    garden.addImage("garden",gardenImage);
    garden.scale = 1.1;
}

function draw() {
  cat.depth=mouse.depth;
  mouse.depth+=1;

  stroke("blue");
  fill("pink");
  textSize(40);
  text("Ohh my god cat is comming to eat me I m living ypu My dear friends for now byee..",400,100);

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addImage("cat",catImage);
    cat.changeImage("cat",catImage);
    cat.velocityX = 0;

    mouse.addImage("mouse",mouseImage);
    mouse.changeImage("mouse",mouseImage);
    mouse.velocityX = 2;

  }

    drawSprites()

}

function keyPressed(){
 //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  cat.velocityX = -6;
  cat.addAnimation("cat_running",catImag2);
  cat.changeAnimation("cat_running");
}

}
