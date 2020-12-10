function setup() {
  createCanvas(800,400);
still = createSprite(400, 300, 50, 50);
still.shapeColor = "blue"
still.debug = true
//still.velocityX = -2
//still.velocityY = -2
moving = createSprite(400, 100, 50, 50);
moving.shapeColor = "red"
moving.debug = true
//moving.velocityX = 2
//moving.velocityY = 2
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX
  moving.y = World.mouseY
  if(isTouching(moving,still)){
moving.shapeColor = "red"
still.shapeColor = "red"
}
 
else{moving.shapeColor = "blue"
     still.shapeColor = "blue"}
//bounceOff(moving,still)
  

  drawSprites();
}



