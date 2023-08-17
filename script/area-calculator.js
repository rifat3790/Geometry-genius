function calculateTringleArea(){
    // Get triangle base value
    const baseField = document.getElementById('tringle-base');
    const baseValueString = baseField.value;
    const baseValue = parseFloat (baseValueString);
    // console.log(baseValue);

    // Get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const heightValue = parseFloat (heightValueString);
    // console.log(heightValue);

    const area = 0.5 * baseValue * heightValue ;
    // console.log(area);

    // show area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}


function calculateRectangleArea(){
    // Get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueString = widthField.value;
    const widthValue = parseFloat(widthValueString);
    // console.log(widthValue);

    // Get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueString = lengthField.value;
    const lengthValue = parseFloat(lengthValueString);
    // console.log(lengthValue);

    const rectangleArea = widthValue * lengthValue;

    // get rectangle area span
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}


function calculateParallelogramArea(){
    
    // Get rectangle width
    const parallelogramField = document.getElementById('parallelogram-base');
    const baseValueString = parallelogramField.value;
    const baseValue = parseFloat(baseValueString);
    // console.log(baseValue);


    // Get parallelogram base
    const heightField = document.getElementById('parallelogram-height');
    const heightValueString = heightField.value;
    const heightValue = parseFloat(heightValueString);
    // console.log(heightValue);

    const parallelogramArea = baseValue * heightValue;

    // get rectangle area span
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;
}

function calculateEllipseArea(){
    const majorRadius = getValue('ellipse-first-radius');
    const minorRadius = getValue('ellipse-second-radius');
    const area = 3.14159 * majorRadius * minorRadius;
    setTextElementValueById('ellipse-area', area)
    
}

// Get value 
function getValue(valueId){
    const getValueElements = document.getElementById(valueId);
    const valueIdString = getValueElements.value;
    const value = parseFloat(valueIdString);
    return value;
}

// Get text
function getText(elementId){
    const getElements = document.getElementById(elementId);
    const textIdString = getElements.innerText;
    const text= parseFloat(textIdString);
    return text;
}

// set value 
function setTextElementValueById(elementId, newVale){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newVale;
}