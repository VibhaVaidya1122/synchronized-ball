var hypnoticBall, database;
var ball2, database;
var position;
var position2;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";

  ball2 = createSprite(300,300,10,10);
  ball2.shapeColor = "blue";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);

  var ball2Position = database.ref('ball2/position2');
  ball2Position.on("value")
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
      writePosition2(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
      writePosition2(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
      writePosition2(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
      writePosition2(0,+1);
    }

   // if(keyCode === 'W'){

    // }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y
  })
}

function writePosition2(x2,y2){
  database.ref('ball2/position2').set({
    'x': position2.x + x2,
    'y': position2.y + y2
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function readPosition2(data2){
  position2 = data2.val();
  console.log(position2.x);
  ball2.x = position2.x;
  ball2.y = position2.y;
}


function showError(){
  console.log("Error in writing to the database");
}
