
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ploygon, slingshot;
var platform1, platform2;
var wall1, wall2, wall3, wall4;

var box1;
var box2, box3, box4
var box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16;

var box17;
var box18, box19, box20;
var box21, box22, box23, box24, box25;

var score = 0;
//var backgroundImg = [];
var backgroundImg = "blue";

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ploygon = new Ploygon(150,275);
	slingshot = new SlingShot(ploygon.body,{x:150,y:250});

	platform1 = new Platform(450,395,230,10);
  platform2 = new Platform(800,295,230,10);
  
  wall1 = new Platform(500,510,1000,20);
  wall2 = new Platform(-10,250,20,500);
  wall3 = new Platform(500,-10,1000,20);
  wall4 = new Platform(1010,250,20,500);

	box1 = new Box(450,215);
	
	box2 = new Box(420,265);
	box3 = new Box(450,265);
	box4 = new Box(480,265);

	box5 = new Box(390,315);
	box6 = new Box(420,315);
	box7 = new Box(450,315);
	box8 = new Box(480,315);
	box9 = new Box(510,315);

	box10= new Box(360,365);
	box11= new Box(390,365);
	box12= new Box(420,365);
	box13= new Box(450,365);
	box14= new Box(480,365);
	box15= new Box(510,365);
	box16= new Box(540,365);


	box17= new Box(800,165);

	box18= new Box(770,215);
	box19= new Box(800,215);
	box20= new Box(830,215);

	box21= new Box(740,265);
	box22= new Box(770,265);
	box23= new Box(800,265);
	box24= new Box(830,265);
  box25= new Box(860,265);

  getTime();
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  textSize(20);
  fill(255);
  text("Score: "+ score,30,30);

  if(score === 25){
    textSize(100);
    text("GAME OVER",200,250)
  }

  ploygon.display(); 
  slingshot.display();

  platform1.display();
  platform2.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();


  box17.display();
  
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

}

function mouseDragged(){
    Matter.Body.setPosition(ploygon.body,{x:mouseX,y:mouseY})
}
 
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ploygon.body,{ x:200,y:50});
    slingshot.attach(ploygon.body);
  }
}

async function getTime(){
    
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    //console.log(responseJson);

    var dt = responseJson.datetime;
    //console.log(dt);

    var hour = dt.slice(11,13);
    if(hour>=0600 && hour<=1800){
      backgroundImg = "lightblue";
      
      /*backgroundImg.push(102);
      backgroundImg.push(211);
      backgroundImg.push(244);*/
      
      //102,211,244 < color code
    }
    else{
      backgroundImg = "black";
      
      /*backgroundImg.push(42);
      backgroundImg.push(0);
      backgroundImg.push(67);  */
      
      //42,0,67 < color code
    }
    console.log(backgroundImg);
}