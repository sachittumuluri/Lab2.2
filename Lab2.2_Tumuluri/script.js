
let currentQuestionIndex = 0;
let score = 0;
const questions = [
    { question: "Who is known as the father of the computer?", options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"], answer: 0 },
    // Add other questions here...
];

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").innerText = question.question;
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
        document.getElementById("feedback").innerText = '';
    } else {
        displayFinalScore();
    }
}

function checkAnswer(selectedOptionIndex) {
    if (selectedOptionIndex === questions[currentQuestionIndex].answer) {
        score++;
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = "Incorrect. The correct answer was " + questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer];
    }
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
    document.getElementById("next-button").disabled = true;
}

function displayFinalScore() {
    document.getElementById("quiz-container").style.display = "none";
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.style.display = "block";
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

window.onload = displayQuestion;
