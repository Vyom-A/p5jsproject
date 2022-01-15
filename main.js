function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    
    square(15,15,400,370);
    stroke(0,0,255);
    strokeWeight(8);

    image(video,25, 25, 380, 350);
    
    circle(390, 33, 60);
    fill(255, 0, 0);
    stroke(0, 0, 255);
    strokeWeight(8);
    
    circle(35, 33, 60);
    fill(255, 0, 0);
    stroke(0, 0, 255);
    strokeWeight(8);

    circle(35, 360, 60);
    fill(255, 0, 0);
    stroke(0, 0, 255);
    strokeWeight(8);

    circle(390, 360, 60);
    fill(255, 0, 0);
    stroke(255, 255, 0);
    strokeWeight(16);
}

function take_snapshot() {
    save("myPhoto.png");
}