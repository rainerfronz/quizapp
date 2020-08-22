const STORE = {
  questionNumber: 0,
  score: 0,
  view: 'landing',


  questions: [
    {
        title: 'How many States are in USA?',
        answers: ['50', '52', '23', '5'],
        correct: 0
      },
      {
        title: 'What year was the Declaration of Independence signed?',
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
        title: 'Which leader passed the Civil Rights Act?',
        answers: ['Martin Luther', 'Martin Luther King Jr.', 'Lyndon B Johnson', 'Donald Trump'],
        correct: 2
      },
      {
        title: 'What is the capital of Illinois?',
        answers: ['Chicago', 'Lincoln', 'Springfield', 'Rockford'],
        correct: 2
      },
      {
        title: 'When was the Bill of Rights signed?',
        answers: ['1976', '1791', '1689', '2001'],
        correct: 1
      },
      {
        title: 'Which Amendment expanded voter rights?',
        answers: ['10', '24', '5', '15'],
        correct: 3
      },
      {
        title: 'How many Mountain Ranges are in USA?',
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
/*after start button this code generates the quiz questions */
  let question = STORE.questions[STORE.questionNumber]
  $('#score span').html('Score: ' + STORE.score);
  $('#questionsCount span').html("Question: " + (STORE.questionNumber + 1) + "/10");
  if (STORE.page == "question") {
    $(`#content`).html(`
   <form id="js-title">
   
    <legend>${question.title}</legend>
    <input type="radio"  required name="answer" value= "0"/>
    <label class="radio">${question.answers[0]}</label>
    <input type="radio" required  name="answer" value= "1"/>
    <label class="radio">${question.answers[1]}</label>
    <input type="radio"  required name="answer" value= "2"/>
    <label class="radio">${question.answers[2]}</label>
    <input type="radio" required name="answer" value= "3"/>
    <label class="radio">${question.answers[3]}</label>
    <section class="row">
      <button type = "submit" id="answer">Submit</button>
    </section>
  </form>`)
  } else if (STORE.page == 'score') {
    $(`#content`).html(`Here is your final score');
    <button type="button" class="restart">Restart</button>
    
    `)
  }
  else if (STORE.page = 'feedback') {
    let currentQuestion = STORE.questions[STORE.questionNumber];

    if (STORE.answer == currentQuestion.correct) {
      STORE.score += 1;

      $('#content').html(`<h3>Your answer is correct!</h3>
        <img src="images/fireworks.jpg" alt="fireworks">
          <p>USA A OK!</p>
          <button type="button" class="next">Next</button>`);

    }
    else {
      $('#content').html('<h3 class="incorrect">Wrong Answer, the correct answer is ' + currentQuestion.answers[currentQuestion.correct] + `</h3>
          <img src="images/sadamerican.jpeg" alt="sad USA athlete">
            <p class="incorrect">Back To School</p>
            <button type="button" class="next">Next</button>`);
    }
  }
}
$('body').on('click', '.restart', function (event) {
  STORE.page = "question"
  STORE.score = 0;
  STORE.questionNumber = 0;
  render();
})


$('body').on('click', '.next', function (event) {
  STORE.page = 'question'
  console.log(STORE.questions.length);
  STORE.questionNumber += 1;
  if (STORE.questionNumber < STORE.questions.length) {
    STORE.page = 'question'
  }
  else {
    STORE.page = 'score'
  }
  render();
})

function answerSubmit() {
  $("body").on(`submit`, `form`, e => {
    e.preventDefault();
    //check for empty and notify user
    STORE.answer = e.target.answer.value;

    // let currentQuestion = STORE.questions[STORE.questionNumber];

    // STORE.answer = e.target.answer.value;
    // console.log("answer" + STORE.answer);

    // if (STORE.answer == currentQuestion.correct) {
    //   STORE.score += 1;
    //   console.log("score " + STORE.score);

    //   $('#content').html(`<h3>Your answer is correct!</h3>
    //     <img src="images/fireworks.jpg" alt="fireworks">
    //       <p>USA A OK!</p>
    //       <button type="button" class="nextButton button">Next</button>`);

    // }
    // else {
    //   $('#content').html('<h3>Wrong Answer, the correct answer is ' + currentQuestion.answers[currentQuestion.correct] + `</h3>
    //       <img src="images/sadamerican.jpeg" alt="sad USA athlete">
    //         <p>Back To School</p>
    //         <button type="button" class="nextButton button">Next</button>`);
    // }

    // check if answer is correct 

    // update score in DOM
    console.log('score' + STORE.score);
    STORE.page = "feedback"

      ;
    console.log("number " + STORE.questionNumber);
    render();
  })


}
// $('#score').show();

// const great = [

//   `images/statueofliberty.jpeg`,
//   `statue of liberty`,
//   'No sleeping in Government Class for you!'
// ];

// const good = [
//   'Good Job',

//   'Feel good about your Red White and Blue'
// ];

// const bad = [
//   'Time to get the History Channel and CSPAN',

//   'Are you a internet bot?'
// ];

// if (score >= 8) {
//   array = great;
// } else if (score < 8 && score >= 5) {
//   array = good;
// } else {
//   array = bad;




function handleQuiz() {
  renderQuiz()
  answerSubmit()

}

$(handleQuiz);