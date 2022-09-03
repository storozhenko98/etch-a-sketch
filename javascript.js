// Base variables from HTML //
const gridLength = document.getElementById("gridContainer").offsetWidth;
let sidePixelNumber = document.getElementById("pixelSize").value;
let colorChoice = document.getElementById("userColorChoice").value; 
const canvas = document.getElementById("gridContainer");
// Listeners for Value Changes // 
document.getElementById("pixelSize").addEventListener('input', updateCanvas);
document.getElementById("userColorChoice").addEventListener('change', colorUpdate);
document.getElementById("resetColor").addEventListener('click', updateCanvas);

//Functions

//Change Div Background Color

function changeColor(){
    
}

// Returns colorChoice
function colorUpdate(){
    colorChoice = document.getElementById("userColorChoice").value;
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("click", function(){
    pixel.style.backgroundColor = colorChoice;}))
}

// Returns sidePixelNumber
function valueUpdate(){
    sidePixelNumber = document.getElementById("pixelSize").value;
    return sidePixelNumber;
}

//Initial Canvas Population
function populateCanvas(){
    sidePixelNumber = valueUpdate();
    const pixelSize = gridLength / sidePixelNumber; 
    const totalPixelNumber = sidePixelNumber * sidePixelNumber;
    for (let index = 0; index < totalPixelNumber; index++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.style.width = pixelSize + "px";
        pixelDiv.style.height = pixelSize + "px";
        pixelDiv.style.backgroundColor = "white";
        pixelDiv.style.display = "block";
        pixelDiv.style.margin = 0 +"px";
        pixelDiv.classList.add("pixel");
        canvas.appendChild(pixelDiv);
        colorUpdate();
    }
}
//Update of Canvas upon Changing Size 
function updateCanvas(){
    canvasClear();
    sidePixelNumber = valueUpdate();
    const pixelSize = gridLength / sidePixelNumber; 
    const totalPixelNumber = sidePixelNumber * sidePixelNumber;
    for (let index = 0; index < totalPixelNumber; index++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.style.width = pixelSize + "px";
        pixelDiv.style.height = pixelSize + "px";
        pixelDiv.style.backgroundColor = "white";
        pixelDiv.style.display = "block";
        pixelDiv.style.margin = 0 +"px";
        pixelDiv.classList.add("pixel");
        canvas.appendChild(pixelDiv);
        colorUpdate();
    }
}
// Clears canvas 
function canvasClear(){
    while (canvas.lastChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

populateCanvas();

// individual pixel size = gridlength/sidePixelNumber//
/* const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(unit => unit.addEventListener("click", function(){
        unit.style.backgroundColor = colorUpdate;
    }));
} */

