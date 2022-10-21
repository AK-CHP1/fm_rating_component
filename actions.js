// Getting all the required DOM elements
const submitBtn = document.getElementById("send-feedback");
const ratings = document.querySelectorAll("span.circle");
const stats = document.getElementById("stats");
const feedbackCard = document.querySelector(".card.feedback");
const greetingCard = document.querySelector(".card.greeting");

// Getting all the required colours
const textColor = "hsl(216, 12%, 54%)";
const circleColor = "hsl(213, 19%, 18%)";
const orange = "hsl(25, 97%, 53%)";

// Defaults
let currentRating = "";
let previouslySelected = null;

for (let rating of ratings) {
    rating.addEventListener("click", () => {
        // Setting the current rating 
        // And adding styles to rating buttons
        currentRating = rating.textContent;
        rating.style.color = "#fff";
        rating.style.backgroundColor = orange;

        // Reseting back the styles of previously selected rating 
        if (previouslySelected != null) {
            previouslySelected.style.backgroundColor = circleColor;
            previouslySelected.style.color = textColor;
        }
        previouslySelected = rating;
    });
}

submitBtn.addEventListener("click", () => {
    if (currentRating) {
        stats.textContent = `You selected ${currentRating} out of 5`;
        feedbackCard.style.display = "none";
        greetingCard.style.display = "flex";
    }
});