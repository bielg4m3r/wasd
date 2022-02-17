var barco, barcoimg
var mar, marimg


marimg = loadImage("sea.png");
barcoimg = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");

barco = createSprite(40, 200, 30, 30);
mar = createSprite(300, 300, 30, 30);

mar.addImage(marimg);

function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  if (mar.X < 0){
    mar.x = mar.width/2;
  }
  background("blue");
    drawSprites();

 
}
