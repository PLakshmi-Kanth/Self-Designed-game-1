var backgroundImage;

function preload(){
 backgroundImage=loadImage("bg3.jpg");
  
}

function setup() {
  createCanvas(1200, 600);
  
  ground=createSprite(200,265,1000,100);
  ground.addImage("bgmars",backgroundImage);
  ground.x=ground.width/2;
  ground.velocityX=-2;
  
}

function draw() {
  
  background(0);
 
 if(ground.x<0){
   ground.x=ground.width/2;
 } 
  
  
  drawSprites();
}



