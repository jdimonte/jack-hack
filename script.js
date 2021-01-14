/* global createCanvas, image, createGraphics, mouseX, mouseY, keyCode, mouseIsPressed, background, colorMode, HSB, strokeWeight, fill, stroke, rect, color, width, height, line, DOWN_ARROW, UP_ARROW */

let back, h, num, bool;

function setup() {
  createCanvas(800, 800);
  back = createGraphics(800, 800);
  colorMode(HSB, 360, 100, 100);
  back.colorMode(HSB, 360, 100, 100);
  h = 0;
  num = 10;
  background("none");
  back.background(color('none'));
  bool = true;
}

function draw() {
  image(back, 0, 0);

  if (bool) {
    drawBar();

    stroke(color(0));
    strokeWeight(1);

    for (var i = 1; i < num; i++) {
      line((i * width) / num, 0, (i * width) / num, height);
    }
    for (var i = 1; i < num; i++) {
      line(0, (i * height) / num, width, (i * height) / num);
    }
    
    for(var x = 0; x<width; x+=width/num) {
      for(var y = 0; y<height; y+=height/num) {
        if(mouseX > x && mouseX < x+(width/num) && mouseY > y && mouseY < y+(height/num) && mouseY > width / (360 / 5)) {
          if(mouseIsPressed){
            back.stroke(color(h,80,90));
            back.fill(color(h,80,90));
            back.rect(x,y,width/num,height/num);
          }
        }
      }
    }
  }
}

function drawBar() {
  for (var i = 0; i < 360 / 5; i++) {
    strokeWeight(10);
    fill(i * 5, 80, 90);
    stroke(i * 5, 80, 90);
    rect(i * (width / (360 / 5)), 0, width / (360 / 5), 10);
    if (mouseIsPressed) {
      if (
        mouseX > i * (width / (360 / 5)) &&
        mouseX < i * (width / (360 / 5)) + width / (360 / 5) &&
        mouseY > 0 &&
        mouseY < 10
      ) {
        h = i * 5;
      }
    }
  }
}

function keyPressed() {
  //Up Arrow
  if (keyCode == UP_ARROW) {
    num += 1;
  }

  //Down Arrow
  if (keyCode == DOWN_ARROW) {
    num -= 1;
  }

  // 1-10
  if (keyCode == 49) {
    num = 1;
  }
  if (keyCode == 50) {
    num = 2;
  }
  if (keyCode == 51) {
    num = 3;
  }
  if (keyCode == 52) {
    num = 4;
  }
  if (keyCode == 53) {
    num = 5;
  }
  if (keyCode == 54) {
    num = 6;
  }
  if (keyCode == 55) {
    num = 7;
  }
  if (keyCode == 56) {
    num = 8;
  }
  if (keyCode == 57) {
    num = 9;
  }
  if (keyCode == 48) {
    num = 0;
  }

  if (keyCode == 8) {
    if (bool) {
      back.clear();
      bool = false;
    } else {
      bool = true;
    }
  }
}
