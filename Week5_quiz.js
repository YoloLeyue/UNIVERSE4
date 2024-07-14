let svg = document.getElementById("basesvg");
let width = 800;
let height = 800;
svg.setAttribute("width", width);
svg.setAttribute("height", height);



//BACKGROUN time line
// creat a group of background line
let backgroundLinesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
svg.appendChild(backgroundLinesGroup);

const lineLength = 5; // length of initial line
const linesPerClick = 10; // add the number of lines when click
const svgWidth = svg.clientWidth;
let lineCounter = 0; // trace the lines added

const stepInterval = 1000; // define the time

// DEFINE BACKGROUND LINE
function addLines() {
    let newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newSVG.setAttribute("width", width);
    newSVG.setAttribute("height", height);
  
    for (let i = 0; i < linesPerClick; i++) {
      const lineSpacing = Math.random() * 5 + 2;
      const newLine = createLine(
        lineCounter * (lineSpacing + lineLength) + lineSpacing,
        lineSpacing,
        lineCounter * (lineSpacing + lineLength) + lineSpacing,
        svg.clientHeight - lineSpacing,
        getRandomColor()
      );
  
      if (newLine.getAttribute("x2") >= svgWidth) {
        lineCounter = 0;
        break;
      }
  
      newSVG.appendChild(newLine);
      lineCounter++;
    }
  
    backgroundLinesGroup.appendChild(newSVG);
  }
  
  svg.addEventListener("click", addLines);



// This function draws some text at position x, y
function drawText(x, y, text) {
  let newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  newText.setAttribute("x", x);
  newText.setAttribute("y", y);
  newText.innerHTML = text;
  svg.appendChild(newText);
}
// DEFINE X Y and size of Clock（blackhole）
let clockX = width / 2;
let clockY = height * 6 / 7;
let clockSize = width * 3 / 4;
// define the hourhand
const TWO_PI = 2 * Math.PI;
let angleOffset = -Math.PI / 2;
let counter = 0;
let hourHand = null; 

function drawHourHand() {
  // remove the hourhand if it exist before
  if (hourHand) {
    svg.removeChild(hourHand);
  }

  let angle = angleOffset + (TWO_PI / 12) * counter;
  let hourHandLength = clockSize / 8;
  let x2 = clockX + Math.cos(angle) * hourHandLength;
  let y2 = clockY + Math.sin(angle) * hourHandLength;

  hourHand = createLine(clockX, clockY, x2, y2, 3, 255, 255,255); // use random colour
  svg.appendChild(hourHand);
}

// creat clocknumber
function drawClockNumbers() {
  for (let i = 1; i <= 12; i++) {
    let angle = angleOffset + (TWO_PI / 12) * i;
    let numberRadius = clockSize * 0.8;
    let x = clockX + Math.cos(angle) * numberRadius;
    let y = clockY + Math.sin(angle) * 90;

    drawText(x, y, i);
  }
}




drawClock();



// creat the blackhole
function createEllipse(cx, cy, rx, ry, fill) {
  let newEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  newEllipse.setAttribute("cx", cx);
  newEllipse.setAttribute("cy", cy);
  newEllipse.setAttribute("rx", rx);
  newEllipse.setAttribute("ry", ry);
  newEllipse.setAttribute("fill", `url(#${fill})`); // use radient
  return newEllipse;
}

// make the hourhand rotate automatically
function autoClock() {
  counter++;
  drawHourHand();
}
setInterval(autoClock, stepInterval);



// random planet
// Store the circles in an array
const circles = [];
// Function to create a random circle with a random position and radius
function createRandomCircle() {
  if (circles.length >= 6) {
    // If there are already 6 circles, remove the oldest one
    const oldestCircle = circles.shift();
    svg.removeChild(oldestCircle);
  }

  const circleRadius = Math.random() * 80 + 20; // Random radius between 20 and 80
  const circleXPos = Math.random() * (width - circleRadius * 2) + circleRadius; // Random X position within SVG
  const circleYPos = Math.random() * (height - circleRadius * 2) + circleRadius; // Random Y position within SVG
  const circleColor = getRandomColor(); // Random fill color

  const newCircle = createCircle(circleXPos, circleYPos, circleRadius, circleColor, "none", "0");
  svg.appendChild(newCircle);

  // Add the new circle to the array
  circles.push(newCircle);
}



// Function to generate a random color to background line
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// Interval in milliseconds for creating random circles
const randomCircleInterval = 1000; //  every 1 seconds



// Set an interval to create random circles
setInterval(createRandomCircle, randomCircleInterval);



// Text
let textElement1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement1.setAttribute("x", "100"); 
textElement1.setAttribute("y", "120"); 
textElement1.setAttribute("fill", "black"); 
textElement1.setAttribute("font-size", "30"); 
textElement1.setAttribute("font-family", "Arial Black");
textElement1.setAttribute("opacity", "1");
textElement1.textContent = "Compose Song of Time for Black Hole"
svg.appendChild(textElement1);
