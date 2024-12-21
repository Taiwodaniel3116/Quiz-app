
const questions = [
   {
     question: 'Who is the President of TGN?',
     answers: [
          {text:'Pst Chris Oyakhilome', correct: false},
          {text:'Reverend Paul Nathan Utomi', correct: true},
          {text:'Apostle Paul', correct: false},
          {text:'Pastor EA Adeboye', correct: false}
        ]
    },    
       {
         question: 'What is the full meaning of TGN?',
         answers: [
            {text:'The Great Nation', correct: false},
            {text:'The Good-Life Nation', correct: true},
            {text:'The God-Way Nation', correct: false},
            {text:'The Goshen Of Nazareth', correct: false}
         ]
        },
        {
          question: 'How many bishops do we have in TGN?',
          answers: [
             {text:'8', correct: true},
             {text:'10', correct: false},
             {text:'5', correct: false},
             {text:'9', correct: false}
          ]
         },
         {
          question: 'As a Good-Lifer, Where Are You?',
          answers: [
             {text:'I"m in my wealthy place indeed! ', correct: true},
             {text:'I"m in my place of success!', correct: false},
             {text:'I"m in my Abode of  great possession!', correct: false},
             {text:'I"m in my place of enjoyment!', correct: false}
          ]
         }
  ];
    
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = 'Next';
      showQuestion();
    }

    function showQuestion() {
       resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + '.' + currentQuestion.
      question;

       currentQuestion.answers.forEach(answer => {
         const button = document.createElement('button');
         button.innerHTML = answer.text;
         button.classList.add('btn');
         answerButtons.appendChild(button);
         if (answer.correct) {
           button.dataset.correct = answer.correct;
         }
         button.addEventListener('click', selectAnswer);
       });
    }
     
      function resetState () {
         nextButton.style.display = 'none';
         while (answerButtons.firstChild) {
              answerButtons.removeChild(answerButtons.firstChild);
         }
      }

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
     selectedBtn.classList.add('incorrect');
  }
   Array.from(answerButtons.children).forEach(button => {
     if(button.dataset.correct === 'true') {
          button.classList.add('correct');
     }
       button.disabled = true;
   });
   nextButton.style.display = 'block';
}

   function showScore () {
      resetState();
      questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
   }

 function handleNextButton () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion ();
    }else {
      showScore();
    }
 }
        
 nextButton.addEventListener('click', ()=> {
    if (currentQuestionIndex < questions.length) {
       handleNextButton();
    } else {
      startQuiz();
    }
 });

   startQuiz();

    //  HAMBURGER MENU

  function hamburger() {
  const hamburgerMenu = document.querySelector('.js-ham-menu');
  const navContainer = document.querySelector('.js-nav-container');
 
  hamburgerMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
 });
 } 
 hamburger();