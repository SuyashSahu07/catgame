var cat,catAnimation,catSleepImg,catWalkImg,catStandImg;
var mouse, mouseAnimation,mouseGiftImg,mouseHelloImg,mouseInspectImg;
var background, backgroundImg;
function preload() {
    catSleepImg=loadImage("cat1.png");
    catWalkImg=loadAnimation("cat2.png","cat3.png");
    catStandImg=loadImage("cat4.png");
    mouseInspectImg=loadImage("mouse4.png");
    mouseHelloImg=loadAnimation("mouse2.png","mouse3.png");
    mouseGiftImg=loadImage("mouse1.png");
    backgroundImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(0,0,1000,800);
    background.addImage(backgroundImg);
    cat = createSprite(20,50,100,100);
    cat.addImage.addImage(catSleepImg);
    mouse = createSprite(20,50,100,100);
    mouse.addImage.addImage(mouseInspectImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
