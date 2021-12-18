var spaceship,spaceshipImg;
var spaceImg,space;
var asteroid1,asteroid1Img,asteroids1Group


function preload(){
spaceshipImg=loadImage("spaceship.png");
spaceImg=loadImage("space.jpg");
}

function setup() {
createCanvas(600, 600);
space = createSprite(300,300);
space.addImage("space",spaceImg);
space.scale=0.2
space.velocityY=1;
spaceship = createSprite(300,300);
spaceship.addImage("spaceship",spaceshipImg);
spaceship.scale=0.1


}

function draw(){
background(0);
if(space.y > 400){
space.y = 300
}
if(keyDown("right")){
spaceship.velocityX=1; 
 }
if(keyDown("left")){
spaceship.velocityX=-1; 
}


drawSprites();
}






