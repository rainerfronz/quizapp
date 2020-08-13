const STORE = {
  questionNumber: 0,
  score: 0,
  view: 'landing',


  questions: [
    {
      title: 'How many States are in USA?',
      answers: ['2', '50', '13', '52'],
      correct: 1
    },
    {
      title: 'What year was the Constitution signed?',
      answers: ['1776', '1984', '2001', '1819'],
      correct: 0
    },
    {
      title: 'Which president was famous for Fireside Chats and the New Deal?',
      answers: ['Franklin Roosevelt', 'William Taft', 'Harry Truman', 'Jimmy Carter'],
      correct: 0
    },
    {
      title: 'Which direction is Detroit, MI from Windsor, ONT Canada?',
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
      title: 'What determines when election day happens in the USA?',
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
   <form id="js-title" class="quizBox">
   
    <legend>${question.title}</legend>
    <input type="radio" name="answer" value= "0"/>
    <label>${question.answers[0]}</label>
    <input type="radio" name="answer" value= "1"/>
    <label>${question.answers[1]}</label>
    <input type="radio" name="answer" value= "2"/>
    <label>${question.answers[2]}</label>
    <input type="radio" name="answer" value= "3"/>
    <label>${question.answers[3]}</label>
    <section class="row">
      <button type = "submit" id="answer">Submit</button>
    </section>
  </form>`)
  }
  STORE.questionNumber += 1;
  $('#questionsCount').text('Question: ' + STORE.questionNumber)
    // console.log('Question: ' + STORE.questionNumber);
}
function answerSubmit() {
  $("body").on(`submit`, `form`, e => {
    e.preventDefault();

    const answer = e.target.answer.value;
    console.log("answer: " + answer);
    console.log(STORE.questions[STORE.questionNumber].correct);

    // check if answer is correct 
    if (answer == STORE.questions[STORE.questionNumber].correct) {
      console.log('iscorrect');
      STORE.score += 1;
      $('#notification').html("<h4>correct</h4>");
    }
    else {
      $('#notification').html(answer);
      
    }

    console.log('score' + STORE.score);
    $('#score').text('Score: ' + STORE.score);
    // update score in DOM

      
    
    
    // $('#questionsCount').text('Question: ' + STORE.questionNumber)
    // console.log('Question: ' + STORE.questionNumber);
    render();
  })
}

function handleQuiz() {
  renderQuiz()
  answerSubmit()
}

$(handleQuiz);