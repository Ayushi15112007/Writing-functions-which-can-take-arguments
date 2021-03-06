var rect1, rect2;
var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  rect1 = createSprite(700,200,50,80);
  rect1.shapeColor="purple";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if( isTouching(movingRect,fixedRect)) {
  movingRect.shapeColor= "red";
  fixedRect.shapeColor= "red";
 }

 else if (isTouching(movingRect,rect1)){
   rect1.velocityX= 7; 
   movingRect.shapeColor= "red";
   rect1.shapeColor= "red";
 }
 
 else {
   movingRect.shapeColor= "green";
   fixedRect.shapeColor= "green";
   rect1.shapeColor= "purple";
 }

  drawSprites();
}

