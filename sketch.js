// create namespaces for modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

// declare the variables
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;

// load the images/animations/sounds
function preload(){
	boy=loadImage("images/boy.png");
}

// set-up the basic layout of the game
function setup() {
	createCanvas(1300, 600);

	// fire up an artificial game world and engine to control the world
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);

	mango=new Mango(1000,300,40);
	
	stone = new Stone(1000 , 200 , 30);

	treeObj=new Tree(1050,580);
	
	groundObject=new Ground(width/2,600,width,20);
	
	// run the engine
	Engine.run(engine);
}

// code all the repetitive actions
function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango.display();

  //stone.display();

  groundObject.display();
}
