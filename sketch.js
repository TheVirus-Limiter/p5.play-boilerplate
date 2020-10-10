var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  if (isCollidedWith(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green"; 
    movingRect.shapeColor = "green";
  }
  IsBouncingOff(movingRect,fixedRect);
  drawSprites();
}



/*var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
 movingRect = createSprite(400, 200, 80, 30);
 movingRect.shapeColor = "green";

 fixedRect = createSprite(200,200,60,80);
 fixedRect.shapeColor = "green";
 
gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor = "green";

gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor = "green";

gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor = "green";

gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor = "green";

}


function draw() {
  
  background(0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isCollidedWith(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
 else{
  gameObject1.shapeColor = "green"; 
  movingRect.shapeColor = "green";
 }

 if (isCollidedWith(movingRect,gameObject2)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
}
else{
  gameObject2.shapeColor = "green"; 
  movingRect.shapeColor = "green";
}
  drawSprites();
}

*/

