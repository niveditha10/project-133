status="";
objects=[];
function preload(){
   img=loadImage("image.jpg");}

function setup(){
    canvas=createCanvas(350,400);
    canvas.position(450,140);

    detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:indentifying objects";

}

function modelLoaded(){
    console.log("cocossd is loaded");
    status=true;
   
    
}
function draw(){
    image(img,0,0,350,400);
    if(status!=""){
        detector.detect(img,gotResults);
   
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status:objects detected";
          
            percentage=floor(objects[i].confidence*100);
            fill(0,0,255);
            text(objects[i].label+" "+percentage+"%",objects[i].x+15,objects[i].y+15);
         noFill();
         stroke(0,0,255);
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    
    }

}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}





