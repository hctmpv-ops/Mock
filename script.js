let questions = [];
let currentQuestion = 0;
let timeRemaining = 180 * 60; // 180 minutes in seconds
let timerInterval;

// Sample structure for questions (actual 95 questions should be populated)
questions = [
    {id: 1, section: 'Decision Making', text: 'Sample DM Question?', options: ['A', 'B', 'C', 'D'], answer: 0, explanation: 'Explanation for DM question.'},
    {id: 2, section: 'Verbal Ability', text: 'Sample VA Question?', options: ['A', 'B', 'C', 'D'], answer: 1, explanation: 'Explanation for VA question.'}
];

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        document.getElementById('time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

function loadQuestion(index) {
    let q = questions[index];
    let container = document.getElementById('question-container');
    container.innerHTML = `<h2>Q${q.id}: ${q.text}</h2>`;
    q.options.forEach((opt, i) => {
        container.innerHTML += `<div><input type='radio' name='option' value='${i}'> ${opt}</div>`;
    });
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function markForReview() {
    alert('Question marked for review');
}

function submitTest() {
    clearInterval(timerInterval);
    alert('Test submitted! Results and explanations will be shown.');
}

window.onload = () => {
    startTimer();
    loadQuestion(currentQuestion);
};
