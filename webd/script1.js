const questions= [
    {
        question: "When was GLUG founded ?",
        answers:[
            { Text: "2000",correct:false},
            { Text:"2003",correct:true},
            {Text:"2005",correct:false},
            { Text:"2002",correct:false},
        ]
    },
    {
        question: "Which one of these is not a GLUG event ?",
        answers:[
            { Text: "Mini-CTF",correct:false},
            { Text:"Junior Code Cracker",correct:false},
            {Text:"Bizzcup",correct:true},
            { Text:"OSS",correct:false},
        ]

    },
    {
        question: "Who is the  president of GLUG club?",
        answers:[
            { Text: "Shashank shekhar",correct:true},
            { Text:"Vedika Agrawal",correct:false},
            {Text:"Apurva paul",correct:false},
            { Text:"Diptangshu Dey",correct:false},
        ]
    },
    {
        question: "which club has designed the NIT DURGAPUR site?",
        answers:[
            { Text: "Maths N tech club",correct:false},
            { Text:"CCA club",correct:false},
            {Text:"GLUG club",correct:true},
            { Text:"Recursion club",correct:false},
        ]

    },
    {
        question: "Which of these is not a social media platform ?",
        answers:[
            { Text: "Instagram",correct:false},
            { Text:"Twitter",correct:false},
            {Text:"YouTube",correct:false},
            { Text:"All of these are the social media platforms",correct:true},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
 let currentQuestionIndex=0;
 let score=0;

 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
 function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex +1;
    questionElement.innerHTML= questionNo+ "."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 function selectAnswer(e){
    const selectedBtn= e.target;
    const iscorrect= selectedBtn.dataset.correct ==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled= true;
    });
    nextButton.style.display="block";
}
 function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="Block";
}
 function handNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handNextButton();
    }else{
        startQuiz();

    }
 });
 startQuiz();





