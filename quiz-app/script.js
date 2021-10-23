const quizData = [
    {
        question: "How old is JungSu?",
        a: '15',
        b: '30',
        c: '24',
        d: '27',
        correct: 'c'
    },{
        question: 'What is the most used programming language in 2021?',
        a: 'java',
        b: 'C++',
        c: 'Python',
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
        correct: 'c',
    },{
        question: 'Which of the following is not a group under Volkswagen?',
        a: 'Audi',
        b: 'Bentley',
        c: 'Fisker',
        d: 'Ducati',
        correct: 'c'
    },{
        question: '함영민 인성은 몇타치 인가요?',
        a:'ㅆㅅㅌㅊ',
        b:'ㅅㅌㅊ',
        c:'ㅈㅌㅊ',
        d:'ㅆㅎㅌㅊ',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answer= undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData =  quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    
    answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        } //else{
        //     console.log('노체크!');
        // }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach(a => {
        a.checked = false;
    })
}

submitBtn.addEventListener('click', ()=>{
    
    const answer = getSelected();
    // check to see the answer
    // console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>당신의 점수는 ${score}/${quizData.length} 입니다.</h2>`;
        }
    }

})

