
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 740);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = new wall(750,700,20,80);
	wall2 = new wall(600,700,20,80);
	wall3 = new wall(670,730,150,20);
	paper = new Paper(200,100,20);
  ground = new Ground(600,height,1200,20);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	  
	 }
   }



