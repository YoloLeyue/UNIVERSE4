
//A function to create a random rounded value
function randomRoundedValue(maxValue){
    return Math.round(Math.random() * maxValue);
}

//A function to create a random colour
function makeRGB(redInputValue, greenInputValue, blueInputValue){
    //lets check if there are values assigned to the input
    //if not we will give them defaults. The default values will be random ints between 0 and 255
    let redOuputValue = redInputValue ?? randomRoundedValue(255);
    let greenOutputValue = greenInputValue ?? randomRoundedValue(255);
    let blueOutputValue = blueInputValue?? randomRoundedValue(255);
    //now lets make a string out of the output values
    return `rgb(${redOuputValue},${greenOutputValue},${blueOutputValue})`;
}



//A function to create a circle with some default values
function createCircle(inputXPos, inputYPos, inputRadius, inputR, inputG, inputB, maxWidth = 600, maxHeight = 800){
    let outputXPos =  inputXPos ?? randomRoundedValue(maxWidth);
    let outputYPos = inputYPos ?? randomRoundedValue(maxHeight);
    let outputRadius = inputRadius ?? randomRoundedValue(maxHeight/2);
    let outputColour = makeRGB(inputR,inputG,inputB);

    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", outputXPos);
    newCircle.setAttribute("cy", outputYPos);
    newCircle.setAttribute("r", outputRadius);
    newCircle.setAttribute("fill", outputColour);
    
    return newCircle;

}



//A function to create a line with some default values  
function createLine(inputX1Pos, inputY1Pos, inputX2Pos, inputY2Pos, inputStrokeWidth, inputR, inputG, inputB, inputOpacity, maxWidth = 600, maxHeight = 800){
    let outputX1Pos =  inputX1Pos ?? randomRoundedValue(maxWidth);
    let outputY1Pos = inputY1Pos ?? randomRoundedValue(maxHeight);
    let outputX2Pos = inputX2Pos ?? randomRoundedValue(maxWidth);
    let outputY2Pos = inputY2Pos ?? randomRoundedValue(maxHeight);
    let outputStrokeWidth = inputStrokeWidth ?? randomRoundedValue(5);
    let outputColour = makeRGB(inputR, inputG, inputB);
    let outputOpacity = inputOpacity ?? 0.9; 

    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute("x1", outputX1Pos);
    newLine.setAttribute("y1", outputY1Pos);
    newLine.setAttribute("x2", outputX2Pos);
    newLine.setAttribute("y2", outputY2Pos);
    newLine.setAttribute("stroke-width", outputStrokeWidth);
    newLine.setAttribute("stroke", outputColour);
    newLine.setAttribute("stroke-opacity", outputOpacity); // set the opacity
    
    return newLine;
}




//A function to create a rounded rectangle with some default values
function createRoundedRect(inputXPos, inputYPos, inputWidth, inputHeight, inputRoundedness, inputR, inputG, inputB, maxWidth = 600, maxHeight = 800){
    let outputXPos =  inputXPos ?? randomRoundedValue(maxWidth);
    let outputYPos = inputYPos ?? randomRoundedValue(maxHeight);
    let outputWidth = inputWidth ?? randomRoundedValue(maxWidth);
    let outputHeight = inputHeight ?? randomRoundedValue(maxHeight);
    let outputRoundedness = inputRoundedness ?? randomRoundedValue(20);
    let outputColour = makeRGB(inputR,inputG,inputB);

    let newRoundedRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRoundedRect.setAttribute("x", outputXPos);
    newRoundedRect.setAttribute("y", outputYPos);
    newRoundedRect.setAttribute("width", outputWidth);
    newRoundedRect.setAttribute("height", outputHeight);
    newRoundedRect.setAttribute("rx", outputRoundedness);
    newRoundedRect.setAttribute("ry", outputRoundedness);
    newRoundedRect.setAttribute("fill", outputColour);
    
    return newRoundedRect;

}



// creat RadialGradient
function createRadialGradient(id, color1, color2) {
    let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    radialGradient.setAttribute("id", id);
  
    // create the first point
    let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "50%");
    stop1.setAttribute("stop-color", color1);
    radialGradient.appendChild(stop1);
  
    // create the second point
    let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", color2);
    radialGradient.appendChild(stop2);
  
    return radialGradient;
  }
  


// clock
  function drawClock() {
    // use gradientcolour to blackhole(timeclock)
    let gradientId = "clockGradient";
    let radialGradient = createRadialGradient(gradientId, "black", "white");
    svg.appendChild(radialGradient);
  
    let newEllipse1 = createEllipse(clockX, clockY, clockSize, 120, gradientId);
    svg.appendChild(newEllipse1);
  
    drawClockNumbers();
    drawHourHand();
  }



