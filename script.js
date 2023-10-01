const btn = document.querySelector("button");
const color = document.querySelector("span");

const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
    let hexNumber = "#";

    for(i = 0; i < 6; i++) {
        hexNumber += hexCode[randomNumber()]
        
        color.innerHTML = hexNumber;
        document.body.style.backgroundColor = hexNumber;
    
    }
})

function randomNumber() {
    return Math.floor(Math.random() * hexCode.length)
}

