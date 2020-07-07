var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  speed = random(223, 321);
  weight = random(30,52);
  
  fill("white");
  bullet = createSprite(50,200,30,10);
 

  fill(80,80,80);
  wall = createSprite(1500,200,thickness,200)
  wall.debug = true;
  bullet.debug = true;
}

function draw() {
  background(0,0,0); 
  
  bullet.velocityX = speed;
  
  collide(bullet, wall);

  damage = (0.5*weight*speed*speed/(thickness*thickness*thickness));
      fill("white");
      text(("Weight: " + Math.round(weight)),200,100);
      text(("Speed: " + Math.round(speed)),400,100);
      text(("Thickness: " + Math.round(thickness)),600,100);
      text(("Damage: " + damage),800,100);

  if(damage < 10){
      fill("limegreen");
      text("Sufficient",650,200);
  }
  
  if(damage > 10){
    fill("red");
    text("Not Sufficient",650,200);
  }

  drawSprites();  
}

function collide(obj1, obj2){
  if((obj1.x - obj2.x < (obj2.width + obj1.width)/2)&&(obj2.x - obj1.x < (obj1.width + obj2.width)/2)){
      obj1.velocityX = 0;
      obj2.velocityX = 0;
  }
  
}