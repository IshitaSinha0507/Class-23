const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground,box;
var box2;




function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  box = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

  ground = new Ground(200,390,400,10);

}

function draw() {
  background(0);  

  Engine.update(myEngine);
  box.display();
  box2.display();
  ground.display();
}