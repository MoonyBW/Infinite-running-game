var jake, path, leftBoundary, rightBoundary;
var jakeImg, pathImg;

function preload(){

jakeImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png");
pathImg = loadImage("path.png");

}

function setup() {
 
  createCanvas(400,400);
path = createSprite(200, 20, 200, 200);
path.addImage(pathImg);
path.velocityY = 2;
path.scale = 1.3;

jake = createSprite(210, 300, 200, 200);
jake.addAnimation("jake", jakeImg);
jake.scale=1;
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(0,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background("black");
  path.velocityY = 10;
  if(path.y > 400){
    path.y = path.height/8;
  }
  if(keyDown("right")){
    jake.x = jake.x +5;
  }
  if(keyDown("left")){
      jake.x = jake.x -5;
  }

  
  drawSprites();
  
 
}
