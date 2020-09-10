var box;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(200,300,50,50);
 

Engine.run(engine);
 createSprites()
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

box.display();


  drawSprites();
}