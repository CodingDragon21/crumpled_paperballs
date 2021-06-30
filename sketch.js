
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var t1
var t2

var ball

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		restitution: 0.1,
	density : 1.2,
friction : 0}
	fill("yellow")
    ball = Bodies.circle(100, 550 , 15 , options)
	World.add(world, ball)

    ground = new Block(400, 590 , 800 , 20)
    t1 = new Block(600 , 570 , 10 , 100)
	t2  = new Block(510 , 570 , 10, 100)


	
  
}


function draw() {

  
	rectMode(CENTER)
  background("black");

  Engine.update(engine)
  ellipse(ball.position.x , ball.position.y , 23,23)

  ground.show()
  t1.show()
  t2.show()
 
 



  
 drawSprites()
 fill("white")
 textSize(17)
 textFont("Times New Roman")
 text("This project is to show that it is important to throw away trash/waist", 20, 30)
 text("There is a lot of trash that is going to the oceans and polluting the waters", 20, 50)
 text("Also, the trash in the water is hurting aquatic life and destroying habitats" , 20, 70)
 text("That is why everyone should help pickup trash and save the WORLD! " , 20 , 90)
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(ball,{x:0,y:0}, { x:27 ,y: -35})
	 }
 }


