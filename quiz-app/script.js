const quizData = [
    {
        question: "How old is Jungu?",
        a: '15',
        b: '30',
        c: '24',
        d: '27',
        correct: 'c'
    },{
        question: 'What is the most used programming language in 2021?',
        a: 'java',
        b: 'C++',
        C: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },{
        question: 'What is the capital of Korea?',
        a: 'Dokyo',
        b: 'London',
        c: 'Busan',
        d: 'Seoul',
        correct: 'd'
    },{
        question: 'Turkish food, what is eaten with milk and honey?',
        a: 'Kebab',
        b: 'Sushi',
        c: 'Kymak',
        d: 'Banmi',
        correct: 'c'
    },{
        question: 'Which of the following is not a group under Volkswagen?',
        a: 'Audi',
        b: 'Bentley',
        c: 'Fisker',
        d: 'Ducati',
        correct: 'c'
    },{
        question: 'What year was JavaScript launched?',
        a:'2010',
        b:'1995',
        c:'2004',
        d:'none of the above',
        correct: 'c'
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData =  quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText =  currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
