const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingShot;
var ground;



function setup(){
  var canvas = createCanvas(1400,800);
  engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1600,20);
    roof1 = new Ground(500,600,400,20);
    roof2 = new Ground(1000,280,400,20);
    block1 = new Block(350,500,80,80);
    block2 = new Block(450,551,80,80);
    block3 = new Block(550,520,80,80);
    block4 = new Block(600,550,80,80);
    block5 = new Block(850,200,80,80);
    block6 = new Block(930,200,80,80);
    block7 = new Block(1010,200,80,80);
    block8 = new Block(1090,200,80,80);
    block9 = new Block(1000,100,80,80);
    block10 = new Block(930,100,80,80);
  

    bird = new Bird(100,100);
  slingshot = new SlingShot(bird.body,{x:200, y:100});
  
  
}











function draw(){
  background(255);
  Engine.update(engine);
  
  strokeWeight(4);
  ground1.display();
  bird.display();
  roof1.display();
  roof2.display();
  block1.display();
  fill("yellow");
  block2.display();
  fill("red");
  block3.display();
  fill("green");
  block4.display();
  fill("blue");
  block5.display();
  fill("black");
  block6.display();
  fill("purple");
  block7.display();
  fill("white");
  block8.display();
  fill("orange");
  block9.display();
  fill("pink");
  block10.display();
  fill("grey");
 
  slingshot.display();
  
}



function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY });
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){

  }
}