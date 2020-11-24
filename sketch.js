var car,wall;


function setup() {
  createCanvas(800,400);

  wall=createSprite(1500,200,60,hight/2);
  wall.shapeColor="green"
  

  car=createSprite(50,200,50,50)
  car.shapeColor="green"
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);
  speed=random(55,90)
  weight=random(55,90)

if(wall.x-car.x<(car.width)/2)
{
car.velocityX=0;
var derformation=0.5 * weight * speed * speed/22509;
if (derformation>180)
{
  car.shapeColor=color(255,0,0)
}

if (derformation>180 &&deformation>100)
{
  car.shapecolor=color(230,230,0)
}
  if  (deformation<100)
  {
    car.shapeColor=color(0,255,0)
  }


}


  drawSprites();
}