let len = 100;
let bg;

function setup() {
	createCanvas(600, 600);
	background(0);
	frameRate(30);
	rectMode(CENTER);
	bg = color(200, 0, 58);
}

function  draw() {
	background(bg);
	noFill();
	strokeWeight(5);
	stroke(20,200, 140);
	
	circle(pmouseX, pmouseY, len)
  //height - mouseY mirrors the object along y axis
  	circle(pmouseX, height - pmouseY, len)
	//increase the lenght by 1px every frame
	len++;
	
	if(mouseIsPressed) {
		len = 0;  
		bg = color(89, 30, 33);
	}
}

