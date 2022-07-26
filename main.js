song = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound(""); //Add the musci here
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(VIDEO , modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image (video , 0 , 0 , 600 , 500);

    fill("red");
    stroke("white");

    circle(leftWristX ,leftWristX , 20);
    numberY = Number(leftWristY);
    removeDecemial = floor(numberY);

    circle(rightWristX , rightWristY ,20);
}

function gana(){
    /*song.play();

   song.setVolume(0.7);
    
    song.rate(1);*/
}