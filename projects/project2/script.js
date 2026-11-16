let table;

let labels = [];   // labels[sample] is the name of a point in time, like "Jan 2022"
let values = [];   // values[layer][sample] is the height of one layer at one point in time

// vivid colors on a white background
let colors = [
    "#ff3366", "#ff7a00", "#ffd400", "#7cff4f", "#00e5a0",
    "#00c2ff", "#3d5aff", "#9b5cff", "#ff4fd8", "#111111",
];

let margin = 80;                  // the space left and right of the chart
let handleRadius = 10;            // half the size of a handle
let chartTop;                     // the top of the chart
let chartBottom;                  // the baseline of the chart
let sliderY;                      // the height of the time slider
let sliderLeft, sliderRight;      // where the slider starts and ends, and also the left and right edge of the chart
let handleX1, handleX2;           // the x-positions of the two handles
let dragging = 0;                 // 0 = no handle, 1 = left handle, 2 = right handle
let maxTotal = 0;                 // the highest stack of all layers, to scale the chart

async function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    table = await loadTable("layers.csv", ",", "header");

    // the first column holds the labels, every other column is one layer
    let sampleCount = table.getRowCount();
    let layerCount = table.getColumnCount() - 1;

    for (let sample = 0; sample < sampleCount; sample++) {
        labels.push(table.getString(sample, 0));
    }

    for (let layer = 0; layer < layerCount; layer++) {
        values[layer] = [];
        for (let sample = 0; sample < sampleCount; sample++) {
            values[layer].push(table.getNum(sample, layer + 1));
        }
    }

    // find the highest stack, so the tallest sample fills the chart
    for (let sample = 0; sample < sampleCount; sample++) {
        let total = 0;
        for (let layer = 0; layer < layerCount; layer++) {
            total += values[layer][sample];
        }
        maxTotal = max(maxTotal, total);
    }

    chartTop = 60;
    sliderY = height - 90;
    chartBottom = sliderY - 50;
    sliderLeft = margin;
    sliderRight = width - margin;
    handleX1 = sliderLeft;
    handleX2 = sliderRight;
}

function draw() {
    background(255);

    let sampleCount = labels.length;
    let pixelsPerUnit = (chartBottom - chartTop) / maxTotal; // how many pixels one unit of data is high

    // the handles decide which samples are shown
    let first = floor(map(handleX1, sliderLeft, sliderRight, 0, sampleCount));
    let last = floor(map(handleX2, sliderLeft, sliderRight, 0, sampleCount));
    first = min(first, sampleCount - 2);
    last = max(last, first + 2); // always show at least two samples

    // sums[sample] is the height of all layers drawn so far
    let sums = [];
    for (let sample = 0; sample < sampleCount; sample++) {
        sums.push(0);
    }

    // draw the layers from bottom to top
    for (let layer = 0; layer < values.length; layer++) {
        fill(colors[layer % colors.length]);
        beginShape();

        // the top edge, from left to right
        for (let sample = first; sample < last; sample++) {
            let x = map(sample, first, last - 1, sliderLeft, sliderRight);
            vertex(x, chartBottom - (sums[sample] + values[layer][sample]) * pixelsPerUnit);
        }

        // the bottom edge, from right to left
        for (let sample = last - 1; sample >= first; sample--) {
            let x = map(sample, first, last - 1, sliderLeft, sliderRight);
            vertex(x, chartBottom - sums[sample] * pixelsPerUnit);
        }

        endShape(CLOSE);

        // the next layer sits on top of this one
        for (let sample = first; sample < last; sample++) {
            sums[sample] += values[layer][sample];
        }
    }

    drawSlider();
    fill(0);
    textSize(18);
    textAlign(LEFT, TOP);
    text(labels[first], sliderLeft, sliderY + 25);
    textAlign(RIGHT, TOP);
    text(labels[last - 1], sliderRight, sliderY + 25);
}

function drawSlider() {
    // the track, and the selected part
    stroke(220);
    strokeWeight(4);
    line(sliderLeft, sliderY, sliderRight, sliderY);
    stroke(0);
    line(handleX1, sliderY, handleX2, sliderY);
    noStroke();

    // the handles
    fill(0);
    circle(handleX1, sliderY, handleRadius * 2);
    circle(handleX2, sliderY, handleRadius * 2);
}

function mousePressed() {
    // which handle is under the mouse?
    if (dist(mouseX, mouseY, handleX1, sliderY) < 15) {
        dragging = 1;
    } else if (dist(mouseX, mouseY, handleX2, sliderY) < 15) {
        dragging = 2;
    }
}

function mouseDragged() {
    // a handle can't leave the slider, or pass the other handle
    if (dragging == 1) {
        handleX1 = constrain(mouseX, sliderLeft, handleX2 - 20);
    }
    if (dragging == 2) {
        handleX2 = constrain(mouseX, handleX1 + 20, sliderRight);
    }
}

function mouseReleased() {
    dragging = 0;
}
