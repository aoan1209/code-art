var circleX= 0
function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  fill(48,60,82);
  ellipse(circleX,1000,300,100,100);
  fill(45,232,84);
  ellipse(circleX,900,200,100,100);
  fill(202,165,232);
  ellipse(circleX,800,100,100,100);
  fill(232,140,114);
  ellipse(circleX,700,50,100,100);
  fill(255,138,49);
  ellipse(circleX,200,400,100,100);
  fill(82,18,66);
  ellipse(circleX,300,300,100,100);
  fill(123,148,232);
  ellipse(circleX,400,200,100,100);
  fill(232,104,12);
  ellipse(circleX,500,50,100,100);
  fill(179,12,232);
  ellipse(circleX,600,100,100,100);
  circleX= circleX+10
  if (mouseIsPressed){
  noStroke();
  fill(18,20,82);
  ellipse(mouseX,mouseY,400,400,100,100);
  fill(0);
  ellipse(640,620,50,50);
  fill(0);
  ellipse(580,620,50,50);
  fill(0);
  arc(600,460,200,200,0,PI);
  }
  else {
  noStroke();
  fill(232,207,20);
  ellipse(mouseX,mouseY,400,400,100,100);
  fill(0);
  ellipse(635,500,50,50);
  fill(0);
  ellipse(540,500,50,50);
  fill(0);
  arc(600,600,200,200,0,PI);
}
  if(keyIsPressed){
  noStroke();
  fill(255,247,238);
  ellipse(mouseX,mouseY,400,400,100,100);
  fill(0);
  ellipse(635,500,50,50);
  fill(0);
  ellipse(540,500,50,50);
  fill(0);
  arc(600,600,200,200,0,PI);
  }
}