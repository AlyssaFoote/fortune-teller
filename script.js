document.addEventListener('DOMContentLoaded', () => {
    const fortuneButton = document.getElementById("fortuneButton");
    const myPrediction = document.getElementById("fortune_told");

    // Array of fortunes
    const fortunes = [
        "You are a cutie pie, expect delicious pies in your future",
        "Good fortune is coming your way",
        "You will pet a cute cat today",
        "You will have a great day today",
        "An exciting opportunity lies ahead",
        "Happiness is in your future",
        "Expect good news soon",
        "A pleasant surprise is waiting for you",
        "Someone is thinking of you",
        "Your hard work will soon pay off",
        "You will make a valuable connection",
        "Today is a lucky day for you",
        "Something wonderful is about to happen",
        "You will achieve your goals",
        "You will find what you are looking for",
        "A new adventure is on the horizon",
        "Trust your instincts",
        "Success is in your future"
    ];

    function getFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        myPrediction.textContent = fortunes[randomIndex];
        myPrediction.classList.add("visible");
        fortuneButton.textContent = "Try your luck again?";
        fortuneButton.onclick = resetFortune;
    }

    function resetFortune() {
        myPrediction.textContent = "";
        myPrediction.classList.remove("visible");
        fortuneButton.textContent = "I sure do";
        fortuneButton.onclick = getFortune;
    }

    fortuneButton.onclick = getFortune;
});
