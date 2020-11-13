var bullet, wall;
var speed, weight; 
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52)
   thickness = random(22, 83)

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "blue";
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if (wall.x - bullet.x < (bullet.width + wall.width)/2 ){
     bullet.velocityX = 0;
     damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness); 
     
     if (damage < 10){
        wall.shapeColor = "green";
        textSize(50);
        text("Your wall is effective against bullet!", 600, 100);
     }
     else{
        wall.shapeColor = "red";
        textSize(50);
        text("Your wall is not effective against bullet!",600, 100);
     }
  }
  drawSprites();
}