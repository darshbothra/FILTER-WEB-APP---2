function preload(){

}

function setup(){
canvas=createCanvas(250,250);
canvas.center();
video=createCapture(VIDEO);
video.size(250,250);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    console.log("nose x= " + results[0].pose.nose.x);
    console.log("nose y= " + results[0].pose.nose.y); 
}
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw()
 { 
 image(video, 0, 0, 250, 250);
}

function takeSnapshot(){
save('Project.png');
}