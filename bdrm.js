var status="";
img="";
var objects=""
function preload(){
    img=loadImage("bdrm.jpg")
}
function setup(){
canvas=createCanvas(640,500);
canvas.center();
object_detector=ml5.objectDetector("cocossd",model_loaded);
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
        objects=results;
    }
}

function draw(){
    image(img,0,0,640,500 );
    if(status != ""){
        for(var i = 0;i<objects.length;i++){
            fill("red");
            stroke("red");
            noFill();
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+" % ",objects[i].x-265,objects[i].y-10);
        rect(objects[i].x-270,objects[i].y-25,objects[i].width,objects[i].height);

        }
        console.log("rect drawn");
    } 
    
}
