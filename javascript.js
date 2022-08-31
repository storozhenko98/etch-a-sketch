const gridContainer = document.querySelector("#gridContainer");
const pageHome = document.querySelector("#bodyView");
/*const gridUnit = document.createElement("div");*/
function gridCreate(quant) {
    const gridnumber = quant*quant; 
    gridContainer.style.width = `${quant * 22}px`;
    gridContainer.style.height = `${quant * 22}px`;
    for (let i = 0; i < gridnumber; i++) {
        const gridUnit = document.createElement("div");
        gridUnit.classList = "unit";
        gridUnit.style.backgroundColor = "white";
        gridUnit.style.width = "17px";
        gridUnit.style.height = "17px";
        gridUnit.style.borderStyle = "solid";
        gridUnit.style.margin = "1px";
        gridContainer.appendChild(gridUnit);
    }
}

function changecolor() {
    $everyGrid.style.backgroundColor = "black";
}
const gridLength = prompt("Enter side length of grid");
gridCreate(gridLength);

const $everyGrids = document.querySelectorAll(".unit");
$everyGrids.forEach($everyGrid => $everyGrid.addEventListener("click", changecolor()))