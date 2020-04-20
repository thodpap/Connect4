let width = 320;
let height = 320;
var bg;

function setup() {
  // import image
  bg = loadImage('background.jpg');

  createCanvas(width, height); 

  console.log("WTF");
}

function draw() {
  background(bg);


}
function mousePressed(){
  console.log(mouseX,mouseY);
}
