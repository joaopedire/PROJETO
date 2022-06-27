 var sea,shipImg,ship,seaImg,ground;

function preload(){
seaImg= loadImage("sea.png");
shipImg= loadAnimation("ship-2.png");
}

function setup(){
  createCanvas(600,400);
 
  var sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX= -5;

 // var ground = createSprite(300,350,600,10)
  //ground.visible=false;

  var ship =createSprite(130,310,30,30)
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.2
  

  

    
   
  }
  

function draw() {
  background("blue");
 
  if(keyDown(RIGHT_ARROW)){
    ship.velocityX=+2
  }

  if(keyDown(LEFT_ARROW)){
    ship.velocityX=-2
  }

  








    drawSprites()
}