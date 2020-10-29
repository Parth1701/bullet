var thi,wall;
var bull,speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
weight=random(30,52);
thi=random(22,83);
wall=createSprite(1200,200,thi,height/2)
wall.shapeColor=color(80,80,80);
car=createSprite(50, 200, 50, 50);

}

function draw() {
  background("black");  
 car.velocityX=speed;
  boom();
  drawSprites();
}
function boom(){
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var d=0.5 * weight * speed * speed/(thi*thi*thi);
  if(d>10){
  car.shapeColor=color(255,0,0);
  }
  
   if(d<10){
  car.shapeColor=color(0,255,0);
  }
  }
}
