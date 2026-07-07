// Welcome message
console.log("Instructional Design Website Loaded");

// Fade-in animation
window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 200);

    });

});


// Quiz Function
function checkQuiz() {

    let score = 0;

    const q1 = document.querySelector(
        'input[name="q1"]:checked'
    );

    const q2 = document.querySelector(
        'input[name="q2"]:checked'
    );

    const q3 = document.querySelector(
        'input[name="q3"]:checked'
    );

    if (q1 && q1.value === "ADDIE") score++;

    if (q2 && q2.value === "Behaviourism") score++;

    if (q3 && q3.value === "Constructivism") score++;

    const result =
        document.getElementById("quiz-result");

    if (result) {
        result.innerHTML =
            "Your Score: " + score + " / 3";
    }
}