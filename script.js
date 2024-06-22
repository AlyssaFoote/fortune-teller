//Fortune teller script
/*

01. User clicks the button to call the function
02. Once the button is clicked, a randomly generated fortune appears
*/
let myButton = document.querySelector("button");
let myPrediction = document.querySelector("fortune_told");

// Create the function
// 

function fortune() {

    let fortuneNum = Math.floor(Math.random() * 3);

    if (fortuneNum === 0) {
        return myPrediction.innerText("You are a cutie pie");
    } else if (fortuneNum === 1) {
        return myPrediction.innerText("U R A QT PIE");
    } else if (fortuneNum === 2) {
        return myPrediction.innerText("U R A SUPER QT PIE FOREVER!!!");
    } else {
        return myPrediction.innerText("You are a technical difficulty!! But still cute");
    }
};

// Create the button.onclick = () => {fortune()};

myButton.onclick = () => {
    fortune();
}

prediction.addEventListener("click", function () {
    prediction.innerText = "U R A QT PIE";
});