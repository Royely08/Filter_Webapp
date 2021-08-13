function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200,200);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){

    image(video,0,0,300,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(){
    if(results.length>0){
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}