
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player, eShip, eShipGroup, bship;
var score = 0
var gameState = "play" 

function preload()
{
	myShip = loadImage("myship.png");
	eShip = loadImage("enemyship.png");
	bShip = loadImage("bigenemyship.png");
	
  }
  
	

function setup() {
	createCanvas(displayWidth, displayHeight- 100);

	eShipGroup = new Group();

	engine = Engine.create();
	world = engine.world;

	//Create the sprites Here.
	player = createSprite(width/2, displayHeight - 150, 50,50);
    player.addImage(myShip);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  //moving the player left and right
  if(keyDown("left")){
    player.x = player.x - 10
  }

  if(keyDown("right")){
    player.x = player.x + 10
  }

	eShips();

  drawSprites();
 
}


function eShips() {
	//write code here to spawn the clouds
	if (frameCount % 60 === 0) {
	  eShip = createSprite(displayWidth/2,0,40,40);
	  eShip.x = random(100,displayWidth - 100);
	  eShip.velocityY = 3;
	  
	   //assign lifetime to the variable
	  eShip.lifetime = 500;
	  
	  //adjust the depth
	  eShip.depth = player.depth;
	  player.depth = player.depth + 1;
	  
	  //add each cloud to the group
	  eShipGroup.add(eShip);
	}
	
  }


