var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  paper,dustbin1,db,chain;

function preload()
{
	db = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Box(width/2,380,width,20)
	paper = new Paper(150,100)
	dustbin1 = new Dustbin(935,280,20,140)
	dustbin2 = new Dustbin(815,280,20,140)
	dustbin3 = new Dustbin(875,360,150,20)
	chain = new Sling(paper.body,{x:250,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  chain.display();
  //dustbin3.display();
  imageMode(CENTER);
  //console.log(dustbin2.x +(dustbin1.x-dustbin2.x )/2 ,dustbin2.y +dustbin3.height/2,150, 140)
  image(db,dustbin2.x +(dustbin1.x-dustbin2.x) /2 ,dustbin2.y +dustbin3.height/2 ,150, 160)
  
  ground.display();
  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}



