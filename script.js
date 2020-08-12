const STORE = {
  questionNumber: 0,
  score: 0,
  view: 'landing',


  questions: [
    {
      title: 'How Many States are in US?',
      answers: ['2', '50', '13', '52'],
      correct: 1
    },
    {
      title: 'What year was the Constitution signed?',
      answers: ['1984', '1776', '2001', '1819'],
      correct: 1
    },
    {
      title: 'Which president was famous for Fireside Chats, the New Deal and ending WWII?',
      answers: ['Franklin Roosevelt', 'William Taft', 'Harry Truman', 'Jimmy Carter'],
      correct: 0
    },
    {
      title: 'Which Direction is Detroit, MI from Windsor, ONT Canada?',
      answers: ['South', 'West', 'East', 'North'],
      correct: 3
    },
    {
      title: 'Which leader passed the Civil Righs Act?',
      answers: ['Martin Luther', 'Martin Luther King Jr.', 'Lyndon B Johnson', 'Donald Trump'],
      correct: 3
    },
    {
      title: 'Who is the current Vice President?',
      answers: ['Dick Cheney', 'William Barr', 'Mike Pence', 'Jared Kushner'],
      correct: 2
    },
    {
      title: 'When was the Bill of Rights signed?',
      answers: ['1976', '1791', '1689', '2001'],
      correct: 1
    },
    {
      title: 'Which Amendment expaned voter rights?',
      answers: ['10', '24', '5', '15'],
      correct: 3
    },
    {
      title: 'How many Moutain Ranges are in USA?',
      answers: ['5', '3', '2', '1'],
      correct: 1
    },
    {
      title: 'What determines election day?',
      answers: ['straw poll', 'Voted on by Senate', 'Tuesday next after first Monday in November', 'Primary Vote'],
      correct: 2
    },
  ]
}

/* template for question function in dom*/
function renderQuiz() {
  $('#start').on('click', function (event) {
    STORE.page = "question"
    render();

  });
}


function render() {

  let question = STORE.questions[STORE.questionNumber]
  if (STORE.page == "question") {
    $(`#content`).html(`
   <form id="#js-title" class="quizBox">
   
    <legend>${question.title}</legend>
    <label>${question.answers[0]}</label>
    <input type="radio" name="answer" value= "0"/>
    <label>${question.answers[1]}</label>
    <input type="radio" name="answer" value= "1"/>
    <label>${question.answers[2]}</label>
    <input type="radio" name="answer" value= "2"/>
    <label>${question.answers[3]}</label>
    <input type="radio" name="answer" value= "3"/>
    <section class="row">
      <button type = "submit" id="answer">Submit</button>
    </section>
  </form>`)
  }

}
function answerSubmit() {
  $("body").on(`submit`, `form`, e => {
    e.preventDefault();

    const answer = e.target.answer.value;
    console.log("answer: " + answer);
    if (answer === STORE.questions[STORE.questions.correct]) {
      //correctAnser();
      STORE.score += 1;

      $('#score').text(STORE.score);
      // update score in DOM
    }

    STORE.questionNumber++;
    $('#guestionCount').text(STORE.questionNumber)
    console.log('question: ' + STORE.questionNumber);
    render();
  })
}    
  function handleQuiz() {
    renderQuiz()
    answerSubmit()
  }
$(handleQuiz)