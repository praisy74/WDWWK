var canvas,gra,grb,grc,grd,ball;
var music;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     gra=createSprite(100,580,180,20);
     grb=createSprite(300,580,180,20);
     grc=createSprite(500,580,180,20);
     grd=createSprite(700,580,180,20);
     ball=createSprite(500,400,20,20);
     gra.shapeColor="orange";
     grb.shapeColor="green";
     grc.shapeColor="blue";
     grd.shapeColor="purple";
    ball.shapeColor="white";
   // ball.velocityY=5;
    //create box sprite and give velocity

}

function draw() {
    background(255, 204, 204);
    //create edgeSprite
    ball.y=mouseY;
    ball.x=mouseX;

    console.log(ball.height/2+gra.height/2);
    
    
    if(to(gra,ball)){
        ball.shapeColor="orange";
    }else{
        ball.shapeColor="white";
    }
     

    if(to(grb,ball)){
    ball.shapeColor="green";

    }else{
        ball.shapeColor="white";
    }


     if(to(grc,ball)){
        ball.shapeColor="blue";
     }else{
        ball.shapeColor="white";
     }


   if(to(grd,ball)){
        ball.shapeColor="purple";
    }else{
        ball.shapeColor="white";
    }
     
    
   /* if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
        fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
    {*/

    //add condition to check if box touching surface and make it box
    drawSprites();
}

function to(obe,obd){
    if(obe.y-obd.y<obe.height/2+obd.height/2 && obd.y-obe.y<obd.height/2+obe.height/2
        && obe.x-obd.x<obe.width/2+obd.width/2&&obd.x-obe.x<obe.width/2+obd.width/2){
    return true
    }else{
    return false 
    } 
}
