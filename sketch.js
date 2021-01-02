var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(100,100,50,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <
    fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <
    fixedRect.width/2 + movingRect.width/2){
      
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}