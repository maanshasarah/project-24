const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4, rubber5, rubber6, rubber7, rubber8;
var stone1;
var iron1

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(600,550,7);
    rubber2 = new Rubber(610,550,7);
    rubber3 = new Rubber(620,550,7);
    rubber4 = new Rubber(630,550,7);
    rubber5 = new Rubber(640,550,7);
    rubber6 = new Rubber(650,550,7);
    rubber7 = new Rubber(660,550,7);
    rubber8 = new Rubber(670,550,7);
    stone1= new Stone(700,550);
    iron1 = new Iron(200,550);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    stone1.display();
    iron1.display();

    
 
}