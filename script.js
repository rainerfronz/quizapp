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
      correct: '1776'
    },
    {
      title: 'Which president was famous for Fireside Chats, the New Deal and ending WWII?',
      answers: ['Franklin Roosevelt', 'William Taft', 'Harry Truman', 'Jimmy Carter'],
      correct: 'Franklin Roosevelt'
    },
    {
      title: 'Which Direction is Detroit, MI from Windsor, ONT Canada?',
      answers: ['South', 'West', 'East', 'North'],
      correct: 'North'
    },
    {
      title: 'Which leader passed the Civil Righs Act?',
      answers: ['Martin Luther', 'Martin Luther King Jr.', 'Lyndon B Johnson', 'Donald Trump'],
      correct: 'Lyndon B Johnson'
    },
    {
      title: 'Who is the current Vice President?',
      answers: ['Dick Cheney', 'William Barr', 'Mike Pence', 'Jared Kushner'],
      correct: 'Mike Pence'
    },
    {
      title: 'When was the Bill of Rights signed?',
      answers: ['1976', '1791', '1689', '2001'],
      correct: '1791'
    },
    {
      title: 'Which Amendment expaned voter rights?',
      answers: ['10', '24', '5', '15'],
      correct: '15'
    },
    {
      title: 'How many Moutain Ranges are in USA?',
      answers: ['5', '3', '2', '1'],
      correct: '3'
    },
    {
      title: 'What determines election day?',
      answers: ['straw poll', 'Voted on by Senate', 'Tuesday next after first Monday in November', 'Primary Vote'],
      correct: 'Tuesday next after first Monday'
    },
  ]
}

/* template for question function in dom*/
function renderQuiz() {
  $('#start').on('click', function (event) {
    STORE.page = "question"
    render();
    console.log('click')
  });
}


function render() {

  let question = STORE.questions[STORE.questionNumber]
  if (STORE.page == "question") {


    $(`#content`).html(`
   <form id="#js-title">
   
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
  </form>
  `)
  }

}
function answerSubmit() {
  $("body").on(`submit`, `form`, e => {
    e.preventDefault();

    const answer = e.target.answer.value;
    console.log("answer: " + answer);
    if (answer.value === STORE.questions[STORE.questions.correct]) {

      console.log('answer is correct');
      STORE.score += 1;
      console.log('score' + STORE.score);
      $('#score').text(STORE.score);
      // update score in DOM
    } else {
      // handle wrong answer
    }

    STORE.questionNumber++;
    //$('#questionsCount').text(STORE.questionNumber);{

    //}

    console.log("question: " + STORE.questionNumber);
    //next button
    render();


  })
}

/*correct answer does this
function correctAnswer() {
  $('.response').html(
    `<h3>Your answer is correct!</h3>
    <img src="images/fireworks.jpeg" alt="fireworks"  width="200px" height="300px">
      <p>USA A OK!</p>
      <button type="button" class="nextButton button">Next</button>`
  );}*/

/*Wrong Answer does this 
function wrongAnswer() { 
  $('#answer').html(<h3>Your Answer is Incorrect.</h3>
    <img src="images/sadamerican.jpeg" alt="Sad USA competor" width="200px" height="300px">
      <p>Back to School...</p>
      <button type="button" class='nextButton button'>Next</button>
    );*/
}


/*restart quiz button
function restartQuiz() { 
  $('body').on('click','#restart', (event) => {
    renderQUiz();
  });
}*/

function handleQuiz() {
  renderQuiz()
  answerSubmit()
}
$(handleQuiz)
