var world1;
var ali;
var aliImg;


function preload() {

 world1 = loadImage("assets/map2.png");

 aliImg = loadImage("assets/aliidle.png");

}

function setup() {

  createCanvas(1200, 600);

  ali = createSprite(250,400,20,20);
  ali.addImage("frente",aliImg);
  ali.scale = 0.2;

}

function draw() {

  background("white");

  image(world1,0,0,1500,1100);
  fill("black");
  text(mouseX+ ","+ mouseY, mouseX, mouseY);

  controles();

  drawSprites();

}

function controles(){

  if (keyIsDown (RIGHT_ARROW)|| keyIsDown(68)){

    ali.x += 7;

  }

  if (keyIsDown (LEFT_ARROW)|| keyIsDown(65)){

    ali.x += -7;

  }

  if (keyIsDown (UP_ARROW)|| keyIsDown(87)){

    ali.y += -7;

  }

  if (keyIsDown (DOWN_ARROW)|| keyIsDown(83)){

    ali.y += 7;

  }

  camera.x = ali.x;
  camera.y = ali.y;

  console.log(ali.x +","+ali.y);

  if(ali.x<610){

    camera.x = 610;

  }

  else if(ali.x>900){

    camera.x = 900;

  }

  if(ali.y>795){

    camera.y = 795;

  }

  else if(ali.y<305){

    camera.y = 305;

  }


}