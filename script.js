let myButton = document.querySelector("button");
let myPrediction = document.querySelector("#fortune_told");

function fortune() {
    let fortuneNum = Math.floor(Math.random() * 3);

    if (fortuneNum === 0) {
        myPrediction.textContent = "You are a cutie pie";
    } else if (fortuneNum === 1) {
        myPrediction.textContent = "U R A QT PIE";
    } else if (fortuneNum === 2) {
        myPrediction.textContent = "U R A SUPER QT PIE FOREVER!!!";
    } else {
        myPrediction.textContent = "You are a technical difficulty!! But still cute";
    }
}

myButton.onclick = () => {
    fortune();
}
