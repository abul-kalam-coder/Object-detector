var status="";
img="";
function preload(){
    img=loadImage("bdrm.jfif")
}
function setup(){
canvas=createCanvas(640,500);
canvas.center();
object_detector=ml5.objectDetector("cocossd",model_loaded);
document.getElementById("status").innerHTML="status:Object detected";
}
function model_loaded (){
    status=true;
    console.log("model_loaded");
    object_detector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
console.error(error);
    }else{
        console.log(results);
    }
}

function draw(){
    image(img,0,0,640,500 );
}
