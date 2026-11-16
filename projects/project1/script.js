let buffer;
let brightness2D = []; // brightness2D[x][y] is how bright the word is at one pixel of the buffer

async function setup() {
    createCanvas(windowWidth, windowHeight);

    // a small invisible canvas: the word is drawn on it once, and only used as data
    buffer = createGraphics(120, 60);
    buffer.background(0);
    buffer.fill(255);
    buffer.textStyle(BOLD);
    buffer.textAlign(CENTER, CENTER);
    buffer.textSize(40);
    buffer.text("Type", buffer.width / 2, buffer.height / 2);

    // blur the word, so the edges of the letters become soft slopes instead of hard steps
    // filter() is asynchronous in p5.js 2.x, so await it before reading pixels
    await buffer.filter(BLUR, 1.2);

    // read the brightness of every pixel once: [0] is the red channel, 0 for black and 255 for white
    for (let x = 0; x < buffer.width; x++) {
        brightness2D[x] = [];
        for (let y = 0; y < buffer.height; y++) {
            brightness2D[x][y] = buffer.get(x, y)[0];
        }
    }
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    noFill();

    let stepX = width / buffer.width;   // distance between two points of a line
    let stepY = height / buffer.height; // distance between two lines

    // mouseX sets how high the word is pushed up, mouseY sets how strongly the lines wobble
    let amount = map(mouseX, 0, width, 0, 40);
    let wobble = map(mouseY, 0, height, 0, 20);

    // one line for every row of the buffer
    for (let y = 0; y < buffer.height; y++) {
        beginShape();
        for (let x = 0; x < buffer.width; x++) {
            // bright pixels (the letters) push the line upward
            let lift = brightness2D[x][y] / 255 * amount;

            // smaller steps in noise() make the wobble slower and smoother
            lift += noise(x * 0.05, y * 0.05, frameCount * 0.01) * wobble;

            vertex(x * stepX, y * stepY - lift);
        }
        endShape();
    }
}