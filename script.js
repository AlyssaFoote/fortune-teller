//Fortune teller script

//When the user presses the button, the script will procure a randomly generated fortune.


/*

01. User clicks the button to call the function
02. 
*/
const prediction = document.getElementById("fortune_told");

prediction.addEventListener("click", function () {
    prediction.textContent = "U R A QT PIE";
});