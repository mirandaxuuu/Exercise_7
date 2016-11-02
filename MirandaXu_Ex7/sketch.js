var font1, font2;
var forest, house, inhouse, smallwitch, witch, pot, stirring;
var wolves, skull, stars;
var picture = 0;
var picture1 = true;
var picture2 = true;


function preload() {
  font1 = loadFont('data/MYBLS___.ttf');
  font2 = loadFont('data/StraightToHellBB.ttf');

  forest = loadImage('data/forest.jpg');
  house = loadImage('data/house.jpg');
  inhouse = loadImage('data/inhouse.png');
  smallwitch = loadImage('data/smallwitch.png');
  witch = loadImage('data/witch.jpg');
  pot = loadImage('data/pot.jpg');
  stirring = loadImage('data/stirring.jpg');

  wolves = loadImage('data/wolves.jpg');
  skull = loadImage('data/skull.jpeg');
  stars = loadImage('data/stars.jpg');

}

function setup() {
  frameRate(60);
  createCanvas(800, 800);
  background(0);
}

function draw() {
  if (frameCount < 80) { //introduction & title
    strokeWeight(2);
    stroke(255);
    textFont(font1, 40);
    textAlign(CENTER);
    text('Are you ready for an adventure?', width / 2, height / 2);
  } //if <80

  if ((frameCount > 80) && (frameCount < 180)) {
    background(0);
    image(forest, 0, 150);
  } //if 80-160

  if (frameCount > 180) { //shows the house
    background(0);
    image(house, 0, 0);

    fill(0);
    textFont(font2, 50);
    text('COME IN HERE...', 250, 200);
    fill(255, 0, 0, 150);
    textFont(font2, 25);
    stroke(0);
    text('click on the house to enter', 250, 250);

    if (frameCount % 10 === 0) { //makes the text flash
      fill(255, 0, 0);
      textFont(font2, 50);
      text('COME IN HERE...', 250, 200);
    } //if framecount
    
    if ((picture1 == true) && (mouseIsPressed) && (mouseX > 420) && (mouseX < 800) && (mouseY > 150) && (mouseY < 510)) {
      picture = 1;
    }
    if (picture == 1) {
      background(0);
      image(inhouse, 0, 70);
      fill(255, 255, 255, 170);
      textFont(font1, 35);
      text('welcome...', 180, 200);
      text('try to find me...', 180, 250);
      push();
      scale(1 / 8);
      image(smallwitch, 6000, 3000);
      pop();
      picture1 = false;


      if ((picture2 == true) && (mouseIsPressed) && (mouseX > 750) && (mouseX < 790) && (mouseY > 375) && (mouseY < 435)) {
        picture = 2;
      }
      

    } //if picture==1

    if (picture == 2) {
      background(0);
      push();
      scale(1 / 2);
      image(witch, 150, 0);
      pop();
      stroke(255, 0, 0, 170);
      fill(255, 255, 255, 150);
      textFont(font1, 35);
      text('wanna make some magical potions?', width / 2, 50);
      fill(255, 255, 255, 170);
      textFont(font2, 15);
      text('click on the pot below', 180, 450, 80, 80);
      picture2 = false;

      if ((mouseIsPressed) && (mouseX > 80) && (mouseX < 300) && (mouseY > 550)) {
        picture = 3;
      }

    } // if picture==2

    if (picture == 3) {
      background(0);
      push();
      scale(1 / 2);
      image(pot, 0, 250);
      pop();

      if ((mouseIsPressed) && (mouseX > 50) && (mouseX < 120) && (mouseY > 166) && (mouseY < 453)) {
        image(wolves, mouseX, mouseY, 140, 100);
      } // left bottle

      if ((mouseIsPressed) && (mouseX > 120) && (mouseX < 203) && (mouseY > 230) && (mouseY < 442)) {
        image(skull, mouseX, mouseY, 150, 100);
      } // middle bottle

      if ((mouseIsPressed) && (mouseX > 206) && (mouseX < 293) && (mouseY > 193) && (mouseY < 470)) {
        image(stars, mouseX, mouseY, 150, 90);
      } // right bottle


      if ((mouseIsPressed) && (mouseX < 280) && (mouseY > 453) && (mouseY < 560)) {
        picture = 4;
      } // book

    } // if picture == 3

    if (picture == 4) {
      background(0);
      strokeWeight(2);
      stroke(255);
      textFont(font1, 65);
      textAlign(CENTER);
      text('Happy Halloween!', width / 2, height / 2 - 70);
      textFont(font2, 30);
      text('by Miranda Xu', width / 2, height / 2 + 80);
    }

  } //if >180

} //end