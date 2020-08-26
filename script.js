const STORE = {
  questionNumber: 0,
  score: 0,



  questions: [
    // {
    //   title: 'How many States are in USA?',
    //   answers: ['50', '52', '23', '5'],
    //   correct: 0
    // },
    // {
    //   title: 'What year was the Declaration of Independence signed?',
    //   answers: ['1776', '1984', '2001', '1819'],
    //   correct: 0
    // },
    // {
    //   title: 'Which president was famous for Fireside Chats and the New Deal?',
    //   answers: ['Franklin Roosevelt', 'William Taft', 'Harry Truman', 'Jimmy Carter'],
    //   correct: 0
    // },
    // {
    //   title: 'Which direction is Detroit, MI from Windsor, ONT Canada?',
    //   answers: ['South', 'West', 'East', 'North'],
    //   correct: 3
    // },
    // {
    //   title: 'Which leader passed the Civil Rights Act?',
    //   answers: ['Martin Luther', 'Martin Luther King Jr.', 'Lyndon B Johnson', 'Donald Trump'],
    //   correct: 2
    // },
    // {
    //   title: 'What is the capital of Illinois?',
    //   answers: ['Chicago', 'Lincoln', 'Springfield', 'Rockford'],
    //   correct: 2
    // },
    // {
    //   title: 'When was the Bill of Rights signed?',
    //   answers: ['1976', '1791', '1689', '2001'],
    //   correct: 1
    // },
    // {
    //   title: 'Which Amendment expanded voter rights?',
    //   answers: ['10th', '24th', '5th', '15th'],
    //   correct: 3
    // },
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
  $(".hide").removeClass('hide');
  $('#questionsCount span').html("Question: " + (STORE.questionNumber + 1) + "/10");
  $(".hide").removeClass('hide');
  if (STORE.page == "question") {
    $('.hide').removeClass('hide')
    $(`#content`).html(`
   <form id="js-title" class="border-black startQuiz">
   
    <legend>${question.title}</legend>
    <ul>
    <li><input type="radio"  required name="answer" value= "0"/>
    <label class="radio row">${question.answers[0]}</label></li>
    <li><input type="radio" required  name="answer" value= "1"/>
    <label class="radio row">${question.answers[1]}</label></li>
    <li><input type="radio"  required name="answer" value= "2"/>
    <li><label class="radio row">${question.answers[2]}</label></li>
    <input type="radio" required name="answer" value= "3"/>
    <li><label class="radio row">${question.answers[3]}</label></li>
    </ul>
    <div class="row">
      <button type = "submit" id="answer">Submit</button>
    </div>
  </form>`)
  } else if (STORE.page == 'score') {
    
    $(`#content`).html(`<h3>Here is your final score!</h3>
    <br>
    <button type="button" class="restart">Restart</button>
    
    
    `)
    $(".restart").on('click' , function(event){$(".hide").removeClass('hide');
    
    });
  }
  else if (STORE.page = 'feedback') {
    let currentQuestion = STORE.questions[STORE.questionNumber];

    if (STORE.answer == currentQuestion.correct) {
      STORE.score += 1;

      $('#content').html(`<div class="container startQuiz"><h3>Your answer is correct!</h3>
        <img src="images/fireworks.jpg" alt="fireworks">
          <p>USA A OK!</p><br>
          <button type="button" class="next">Next</button></div>`);

    }
    else {
      $('#content').html('<div class="container startQuiz"><img src="images/sadamerican.jpeg" alt="sad USA athlete"><h3 class="incorrect">Wrong Answer, the correct answer is ' + currentQuestion.answers[currentQuestion.correct] + `</h3>
          
            <p class="incorrect">Back To School</p><br>
            <button type="button" class="next">Next</button></div>`);
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
  
  STORE.questionNumber += 1;
  if (STORE.questionNumber < STORE.questions.length) {
    STORE.page = 'question'
  }
  else {
    
    $('#questionsCount').hide();
    STORE.page = 'score'

  }

  render();
})

function answerSubmit() {
  $("body").on(`submit`, `form`, e => {
    e.preventDefault();
    //check for empty and notify user
    STORE.answer = e.target.answer.value;


    STORE.page = "feedback"
    
    render();
  })


}

function handleQuiz() {
  renderQuiz()
  answerSubmit()

}

$(handleQuiz);