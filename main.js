moustacheX = 0;
moustacheY = 0;

function preload(){

    moustache_face = loadImage('https://i.postimg.cc/7hyvvKvy/moustache.png');

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){

    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(0,0,0);
    //circle(moustacheX,moustacheY,20);
    image(moustache_face,moustacheX,moustacheY,30,30);
}

function take_snapshot(){
    save('myMoustacheImage.png');
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX =  results[0].pose.nose.x - 15;
        noseY =  results[0].pose.nose.y - 15;
        console.log("moustache X = " + moustacheX);
        console.log("moustache Y = " + moustacheY );
    }
}