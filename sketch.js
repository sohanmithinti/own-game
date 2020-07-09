var bg, bg1;
var playbutton;
var gamestate="start";
var playership, enemyship, ship3;
var ship1, ship2;
var periscope, torpado1;
var d50, d100, d150, d200;
var switch1 = 0;

function preload(){
  bg = loadImage("images/oceanbg.gif");
  ship1 = loadImage("images/ship2.png");
  ship3 = loadImage("images/ship3.png");
  periscope = loadImage("images/periscope.png");
  d50 = loadImage("images/bg4.gif");
  d100 = loadImage("images/bg5.gif");
  d150 = loadImage("images/bg6.gif");
  d200 = loadImage("images/bg7.gif");
  torpado1 = loadImage("images/torpado.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //bg1 = createSprite(displayWidth/2, displayHeight/2, displayWidth ,displayHeight);
  //bg1.addImage(bg);
  playbutton = createButton("PLAY");
  playbutton.position(displayWidth-100, displayHeight/2);
  playbutton.style('font-size', '25px');
  playbutton.style('background-color','orange');
  playership = createSprite(displayWidth/3, displayHeight/2+100);
  playership.addImage(ship1);
  torpado = createSprite(displayWidth/3, displayHeight/2+100, 100, 10);
  torpado.addImage(torpado1);
  torpado.visible = false;
  }

function draw() {
  if(gamestate==="start"){
    textSize(30);
    background(bg);  
  fill("red");
  text("battle ship game",displayWidth/2-100, 150);
  }
  playbutton.mousePressed(()=>{
     gamestate = "play";
     playbutton.hide();
     playership.addImage(ship3);
     playership.rotation = -5;
  })
  if(gamestate === "play"){
    switch(switch1){
      case 1:background(bg);  
      break;
      case 2:background(d50);  
      break;
      case 3:background(d100);  
      break;
      case 4:background(d150);  
      break;
      case 5:background(d200);  
      break;
      case 6:background(bg);  
      break;
    }
     if(keyDown("1")){
       playership.addImage(periscope);
       switch1 = 1;
     }
     if(keyDown("2")){
      playership.addImage(ship3);
      switch1 = 2;
     }
     if(keyDown("3")){
     
       playership.addImage(ship3);
       switch1 = 3;
     }
     if(keyDown("4")){
      
       playership.addImage(ship3);
       switch1 = 4;
     }
     if(keyDown("5")){
      playership.addImage(ship3);
      switch1 = 5;
    }
    if(keyDown("right")){
      //playership.rotateToDirection = true;
      playership.rotation = playership.rotation +10
    }
    if(keyWentDown("6")){
      torpado.visible = true;
      torpado.velocityX = 20;
      playership.addImage(ship3);
      switch1 = 6;
    }
  }
  drawSprites();
}