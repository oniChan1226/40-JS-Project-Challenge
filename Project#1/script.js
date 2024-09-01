let mainComponent = document.getElementById("main-component");
let currentColor = document.getElementById("current-color");
let changeColorSimple = document.getElementById("change-color-simple");
let changeColorHex = document.getElementById("change-color-hex");

currentColor.textContent = "Blue";

changeColorSimple.addEventListener('click', () => {
    let colors = ["green", "red", "orange", "yellow", "grey", "purple", "violet", "pink"];
    let random = generateRandomNumber(colors.length);
    currentColor.textContent = colors[random];
    mainComponent.style.backgroundColor = colors[random];
});
changeColorHex.addEventListener('click', () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    currentColor.textContent = hexColor;
    mainComponent.style.background = hexColor;
});
function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}