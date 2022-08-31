const gridContainer = document.querySelector("#gridContainer");
const colorSpace = document.querySelector("#color");
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
    everyGrid.style.backgroundColor = "black";
}
const gridLength = prompt("Enter side length of grid");
gridCreate(gridLength);

const units = document.querySelectorAll(".unit");
units.forEach(unit => unit.addEventListener("click", function(){
    unit.style.backgroundColor = "black";
}))

const colorPick = document.createElement("button");
colorPick.textContent = "Color Choice";
colorPick.style.marginTop = "15px";
colorSpace.appendChild(colorPick);

function userColorChoice() { 
    const userchoice = prompt("Please type color");
    const units = document.querySelectorAll(".unit");
    units.forEach(unit => unit.addEventListener("click", function(){
    unit.style.backgroundColor = userchoice;}))
}

colorPick.addEventListener("click", function (){
    const userchoice = prompt("Please type color");
    const units = document.querySelectorAll(".unit");
    units.forEach(unit => unit.addEventListener("click", function(){
    unit.style.backgroundColor = userchoice;}))
})