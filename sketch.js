
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width/2,height/4,width/7,20);

	bobDiameter = 40;
	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;

	bob1 = new bob(startBobPositionX - bobDiameter*2 ,startBobPositionY,bobDiameter);
	bob2 = new bob(startBobPositionX - bobDiameter ,startBobPositionY,bobDiameter);
	bob3 = new bob(startBobPositionX ,startBobPositionY,bobDiameter);
	bob4 = new bob(startBobPositionX + bobDiameter ,startBobPositionY,bobDiameter);
	bob5 = new bob(startBobPositionX + bobDiameter*2 ,startBobPositionY,bobDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	  rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*2,0);
	  rope2 = new Rope(bob2.body,roof1.body,-bobDiameter*1,0);
	  rope3 = new Rope(bob3.body,roof1.body,0,0);
	  rope4 = new Rope(bob4.body,roof1.body,bobDiameter*1,0);
	  rope5 = new Rope(bob5.body,roof1.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("lightgrey");
	
	roof1.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

