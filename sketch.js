function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();

  let myColorArray = ["#f7582a", "#ffc802", "#00b774", "#f082ea", "#770be8"];
  let myOtherColorArray = ["#000000", "#ffffff"];
  let a = int(random(5));
  let b = int(random(5));
  let c = int(random(5));

  while (a == b || a == c || b == c) {
    a = int(random(5));
    b = int(random(5));
    c = int(random(5));
  }
  console.log(a, b, c);

  let myRandomColor_bg;
  let myRandomColor_fill;
  let myRandomColor_fill2;
  if (mouseIsPressed) {
    let MyMapped_Ypos = map(mouseY, 0, windowHeight, 10, 30);
    let MyMapped_Xpos = map(mouseX, 0, windowWidth, 0, 1);

    frameRate(MyMapped_Ypos);
    for (let x = 0; x <= windowWidth; x += windowWidth / 51) {
      for (let y = 0; y <= windowHeight; y += windowWidth / 51) {
        //let myRandomColor = random(myOtherColorArray);
        rect(x, y, windowWidth / 51);
        //fill(color(myRandomColor));
        if (random() > MyMapped_Xpos) {
          fill(color(myOtherColorArray[1]));
        } else {
          fill(myOtherColorArray[0]);
        }
      }
    }
  } else {
    myRandomColor_bg = myColorArray[a];
    myRandomColor_fill = myColorArray[b];
    myRandomColor_fill2 = myColorArray[c];
    frameRate(5);
    fill(myRandomColor_fill);
    background(myRandomColor_bg);

    for (let x = 0; x < windowWidth; x += windowWidth / 25.5) {
      for (let y = 0; y < windowHeight; y += windowWidth / 25.5) {
        rect(x, y, windowWidth / 51);
      }
    }

    for (let x = 0; x < windowWidth; x += windowWidth / 25.5) {
      for (let y = 0; y < windowHeight; y += windowWidth / 25.5) {
        fill(myRandomColor_fill2);
        rect(
          x + windowWidth / 25.5 / 2,
          y + windowWidth / 25.5 / 2,
          windowWidth / 51
        );
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
