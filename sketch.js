var zenia,wall, wall2, Tourus, wall3, wall4, wall5, Cyclap;


var speed1, weight1, speed2, weight2, speed3, weight3; 
function setup() {
  createCanvas(1400, 1200);
    
    speed1=random(55,90)
    weight1=random(400,1500)
    wall3 = createSprite(700, height/3, 1400, 30)
    wall3.shapeColor = "white";
    zenia=createSprite(50, 200, 50,50);   
    zenia.velocityX = speed1;

    zenia.shapeColor=color(255);

    speed2 = random(45, 80)
    weight2 = random(500,1550)
    Tourus = createSprite(50, 600, 50, 50);
    Tourus.velocityX = speed2

    speed3 = random(40, 70);
    weight3 = random(600, 1800);
    Cyclap = createSprite(50, 1000, 50, 50);
    Cyclap.velocityX= speed3
  
    wall=createSprite(1300,200, 60, height/6)
    wall.shapeColor=color(80,80,80)
    wall2 = createSprite(1300, 600, 60, height/6)
    wall2.shapeColor= color(80, 80, 80)
    wall4 = createSprite(700, height/1.5, 1400, 30)
    wall4.shapeColor = "white"
    wall5 = createSprite(1300, 1000, 60, height/6)
    wall5.shapeColor = color(80, 80, 80)
}


function draw() {
  background(0);
  if(wall.x-zenia.x < (zenia.width+wall.width)/2)
  {
    zenia.velocityX=0;
    var deformation=0.5 * weight1 * speed1* speed1/22500;
    if(deformation>180)
    {
        zenia.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
        zenia.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
        zenia.shapeColor=color(0,255,0);
    }
  }
  if(wall2.x-Tourus.x < (Tourus.width+wall2.width)/2){
    Tourus.velocityX = 0;
    if(deformation>84){
      Tourus.shapeColor = color(0, 255, 0);
    }
    if(deformation<84 && deformation>10){
    Tourus.shapeColor = color(230, 230, 0);
    }
    if(deformation<100){
      Tourus.shapeColor = color(255, 0, 0);
    }
     }
   if(wall5.x-Cyclap.x < (Cyclap.width+wall5.width)/2){
     Cyclap.velocityX = 0;
     if(deformation>134){
       Cyclap.shapeColor = color(0, 255, 0);
     }
     if(deformation<134 && deformation>100){
      Cyclap.shapeColor = color(230, 230, 0);
     }
     if(deformation<100){
      Cyclap.shapeColor = color(255, 0, 0);
     }
   }
  
  drawSprites();
 
}


