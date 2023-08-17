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