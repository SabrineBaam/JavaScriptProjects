const quizData = [
    {
        question: "Who is the 1st ranked Tennis player on the world (Men's Singles)?",
        a: "Rafael Nadal",
        b: "Roger Federer",
        c: "Dominic Thiem",
        d: "Novak Djokovic",
        correct: "d",
    },
    {
        question: "Who is the 1st ranked Tennis player on the world (Women's Singles)?",
        a: "Elina Svitolina",
        b: "Ashleigh Barty",
        c: "Serena Williams",
        d: "Kiki Bertens",
        correct: "b",
    },
    {
        question: "who is 100m world record holder?",
        a: "Usain Bolt",
        b: "Percy Williams",
        c: "Justin Gatlin ",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "who is ranked amoung the top 5  male Olympic swimming gold medalists?",
        a: "Lewis Hamilton",
        b: "Michael Phelps",
        c: "Lionel Messi",
        d: "Cristiano Ronaldo",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});