const quizData = [
    {
        question: 'What is the most used programming language in 2019? ',
        a: 'Java',
        b: 'C',
        c: 'python',
        d: 'Javascript',
        correct: 'd',
    },{
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Hypertext Markup Languages',
        correct: 'a',
    },{
        question: 'What year was Javascript launched?',
        a: '2019',
        b: '2007',
        c: '2015',
        d: 'none of the above',
        correct: 'd',
    },
];
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_Text = document.getElementById('a_Text');
const b_Text = document.getElementById('b_Text');
const c_Text = document.getElementById('c_Text');
const d_Text = document.getElementById('d_Text');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    delSelector();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_Text.innerText = currentQuizData.a;
    b_Text.innerText = currentQuizData.b;
    c_Text.innerText = currentQuizData.c;
    d_Text.innerText = currentQuizData.d;
    
}

function getSelector() {
    let answer = undefined;
    answerEls.forEach((answerEL) => {
        if (answerEL.checked) {
            answer = answerEL.id;
        }
    });
    return answer;
}

function delSelector() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitbtn.addEventListener('click', () =>{
    const answer = getSelector();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h3>You answered correctly ${score}/${quizData.length} questions</h3> <button onclick='location.reload()'>Reload</button>`
        }
    }
    else{
        alert('You do not answer the question');
    }
});