var fixedRect, movingRect;
var GO1, GO2, GO3, GO4, GO5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
  GO1 = createSprite(100,100,50,50);
  GO1.shapeColor =" pink"
  GO2 = createSprite(200,100,50,50);
  GO2.shapeColor =" pink"
  GO3 = createSprite(300,100,50,50);
  GO3.shapeColor =" pink"
  GO4 = createSprite(400,100,50,50);
  GO4.shapeColor =" pink"
  GO5 = createSprite(500,100,50,50);
  GO5.shapeColor =" pink"
}

function draw() {
  background(255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, GO2)){
    movingRect.shapeColor ="black";
    GO2.shapeColor ="black";
  }
  else{
    movingRect.shapeColor ="green";
    GO2.shapeColor ="pink";
  }
bounceOff(movingRect,fixedRect);
  drawSprites();
}
