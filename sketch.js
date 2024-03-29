const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

var engine, world;
var ground, crazyBall,basketBall,box1,platform;

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

    var static_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,590,600,20,static_options);
    Composite.add(world,ground);
    platform = Bodies.rectangle(100,520,170,120,static_options);
    Composite.add(world,platform);

    var bb_options ={
        restitution: 0.5,
        
    }
    var cb_options ={
        restitution: 1.2
    }

    basketBall = Bodies.circle(100,100,30, bb_options);
    Composite.add(world,basketBall);
    crazyBall = Bodies.circle(190,100,15, cb_options);
    Composite.add(world,crazyBall);
    //box1 =  Bodies.rectangle(200,50,50,50);
    //Composite.add(world,box1);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,600,20);
    rect(platform.position.x,platform.position.y,170,120);
    
    fill("yellow");
    ellipseMode(RADIUS)
    ellipse(crazyBall.position.x, crazyBall.position.y, 15, 15);
    ellipse(basketBall.position.x, basketBall.position.y, 30, 30);
    
    //box1 display
    //fill("green");
    //rect(box1.position.x,box1.position.y,50,50);

    
}
