
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground1,mainGround;
var shooter,attach1;
var stoneImage,stone;

function preload()
{
	stoneImage = loadImage("stone.png");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(475,335,200,20);
	mainGround=new Ground(width/2,490,width,20);
    
	//Bottom Layer
	box1 = new Box(400,300,50,50);
	box2 = new Box(450,300,50,50);
	box3 = new Box(500,300,50,50);
	box4 = new Box(550,300,50,50);

	//Second Layer
	box5 = new Box(425,250,50,50);
	box6 = new Box(475,250,50,50);
	box7 = new Box(525,250,50,50);

	//Third Layer
	box8 = new Box(450,200,50,50);
	box9 = new Box(500,200,50,50);

	//Top Layer
	box10 = new Box(475,150,50,50);

	polygon = new Polygon(100,400,30,30);
	attach1 = new Attach(polygon.body,{x : 100, y : 400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  mainGround.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  polygon.display();

  attach1.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    attach1.detach();
}

