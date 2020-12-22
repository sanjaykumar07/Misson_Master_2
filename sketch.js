var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bg,bgImage;
var packageBody,ground,box1Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgImage=loadImage("bg2.jpg")

	
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bg = createSprite(400,height/2);
	bg.addImage(bgImage)
	bg.scale = 1.7;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	box1Body = Bodies.rectangle(400,650,200,50,{isStatic:true});
	World.add(world, box1Body);

	box1Sprite = createSprite(400,650,200,20);
	box1Sprite.shapeColor = "red";
   
	
	box2Sprite = createSprite(290,610,20,100)
	box2Body = Bodies.rectangle(290,610,20,100);
	box2Sprite.shapeColor = "red";
    World.add(world, box2Body);

	box3Sprite = createSprite(500,610,20,100)
	box3Body = Bodies.rectangle(500,20);
	World.add(world, box3Body);
	box3Sprite.shapeColor = "red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(packageSprite.isTouching(box1Sprite)){

  }
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
  }
}



