const gridLength = document.getElementById("gridContainer").offsetWidth;
const sidePixelNumber = document.getElementById("pixelSize").value;
const colorChoice = document.getElementById("userColorChoice").value; 
const canvas = document.getElementById("gridContainer");

function populateCanvas(gridLength, sidePixelNumber){
    const pixelSize = gridLength / sidePixelNumber; 
    const totalPixelNumber = sidePixelNumber * sidePixelNumber;
    for (let index = 0; index < totalPixelNumber; index++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.style.width = pixelSize + "px";
        pixelDiv.style.height = pixelSize + "px";
        pixelDiv.style.backgroundColor = "black";
        pixelDiv.style.display = "block";
        pixelDiv.style.margin = 0 +"px";
        pixelDiv.style.borderWidth = 0 + "px";
        canvas.appendChild(pixelDiv);
    }
}

populateCanvas(gridLength, sidePixelNumber);

// individual pixel size = gridlength/sidePixelNumber//
// 