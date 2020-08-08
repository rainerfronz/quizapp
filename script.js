const STORE = {
  questionNumber:0,
  score:0,
  view:'landing',


  questions: [
    {
title: 'How Many States are in US?',
answers: ['2', '50', '13', '52'],
correct: '50'
},
   {
    title: 'What year was the Constitution signed?',
    answers: ['1984', '1776', '2001', '1819'],
    correct: '1776'
   },
   { 
     title: 'Which president was famous for Fireside Chats, the New Deal and ending WWII?',
   answers: ['Franklin Roosevelt', 'William Taft' , 'Harry Truman', 'Jimmy Carter'],
   correct: 'Franklin Roosevelt'
   },
   {
     title: 'Which Direction is Detroit, MI from Windsor, ONT Canada?',
     answers: ['South', 'West', 'East' , 'North'],
     correct: 'North'
   },
   {
     title: 'Which leader passed the Civil Righs Act?',
   answers: ['Martin Luther', 'Martin Luther King Jr.' , 'Lyndon B Johnson', 'Donald Trump'],
   correct: 'Lyndon B Johnson'
   },
   {
     title: 'Who is the current Vice President?',
     answers: ['Dick Cheney', 'William Barr','Mike Pence', 'Jared Kushner'],
     correct: 'Mike Pence'
   },
  {
    title: 'When was the Bill of Rights signed?',
    answers: ['1976', '1791', '1689', '2001'],
    correct: '1791'
    },
    {
      title: 'Which Amendment expaned voter rights?',
      answers:['10','24', '5', '15'],
      correct: '15'
    },
    {
      title: 'How many Moutain Ranges are in USA?',
      answers:['5','3', '2', '1'],
      correct: '3'
    },
    {
      title:'What determines election day?',
      answers:['straw poll', 'Voted on by Senate', 'Tuesday next after first Monday in November', 'Primary Vote'],
      correct:'Tuesday next after first Monday'
    },
  ]
}

/* template for question function in dom*/
function renderQuiz() {
  console.log('questions');
}



/*score update function, increase by 1*/
function updateScore(){}
/*resets values of score and question number*/

/*increase num of question count on page view. again +1*/
function updateQuestion(){}

/*start quiz function*/
function startQuiz(){}
/*checks answers*/
function checkAnswer(){}


/*create question  html pages*/
function makeQuestionPage(){}

/*correct answer does this*/
function correctAnswer(){}

/*Wrong Answer does this */
function wrongAnswer(){}
/*finds next question*/
function nextQuestion(){}

/*adds up score*/
function finalScore(){}
/*restart quiz button*/
function restartQuiz(){}

function handleQuiz()
{
  renderQuiz()
  updateScore()
  updateQuestionNumber()
  startQuiz()
  checkAnswer()
  nextQuestion()
  restartQuiz()


}
$(handleQuiz)
