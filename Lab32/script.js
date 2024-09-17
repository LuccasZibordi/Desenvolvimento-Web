const questions =[
    {
        question: "Who is the first God that Kratos has killed?",
        answers: [
            { text: "Hades", correct: false},
            { text: "Zeus", correct: false},
            { text: "Ares", correct: true},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "What is Kratos brother name?",
        answers: [
            { text: "Atreus", correct: false},
            { text: "Deimos", correct: true},
            { text: "Leonidas", correct: false},
            { text: "Atena", correct: false},
        ]
    },
    {
        question: "What is Kratos's marks original color?",
        answers: [
            { text: "Red", correct: false},
            { text: "Green", correct: false},
            { text: "Orange", correct: false},
            { text: "Blue", correct: true},
        ]
    },
    {
        question: "Who are the gods that Kratos didn't kill",
        answers: [
            { text: "Artémis and Afrodite", correct: true},
            { text: "Hefesto and Gaia", correct: false},
            { text: "The Sisters of Fate", correct: false},
            { text: "Apolo and Hermes", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[ currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }


}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}   

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

startQuiz();