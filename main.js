var song1 = "";
var song2 = "";
leftWristY = "";
leftWristX = "";
rightWristY = "";
rightWristX = "";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    machine = ml5.poseNet(camera, loadModal);
    machine.on("pose", gotResult);
}
function loadModal(){
    console.log("Modal is loaded");
}
function gotResult(result){
    if(result.length > 0){
        console.log(result)
        leftWristY = result[0].pose.leftWrist.y;
        leftWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        rightWristX = result[0].pose.rightWrist.x;
        console.log("leftWristY = " + leftWristY);
        console.log("leftWristX = " + leftWristX);
        console.log("rightWristY = " + rightWristY);
        console.log("rightWristX = " + rightWristX);
}
}
function draw(){
    image(camera, 0, 0, 600, 500);
}