var roof;
var bobObject1;
var rope1;
var bobObject2;
var rope2;
var bobObject3;
var rope3;
var bobObject4;
var rope4;
var bobObject5;
var rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(800, 200, 600, 50);
	bobObject1 = new Bob(700, 400, 20, 100);
	rope1 = new Rope(bobObject1.body, roof.body, -100, 0);
	bobObject2 = new Bob(750, 400, 20, 100);
	rope2 = new Rope(bobObject2.body, roof.body, -50, 0);
	bobObject3 = new Bob(800, 400, 100, 20);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	bobObject4 = new Bob(850, 400, 100, 20);
	rope4 = new Rope(bobObject4.body, roof.body, 50, 0);
	bobObject5 = new Bob(900, 400, 100, 20);
	rope5 = new Rope(bobObject5.body, roof.body, 100, 0);
  
}


function draw() {
  background("Gainsboro");
  rectMode(CENTER);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed()	{
	if (keyCode === UP_ARROW)	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-60, y:-60});
	}
}