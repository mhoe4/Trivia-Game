var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var restartButton = $("<button>");
restartButton.attr('id', 'restart');
restartButton.text('Restart Game');

$(document).ready(function() {
  // Display game instructions in fancy box when game info button is clicked
  $("#game-info").on("click", function() {

    $.fancybox.open('<div class="message text-center"><h2>How to Play!</h2>\
    <p></p>\
    <p></p>\
    <p></p>\
    <p></p>\
    </div>');
  });
  
  $("#start").on("click", displayQuestion);
  $(document).on("click", ".trivia-answer", checkUserAnswer);
  $(document).on("click", "#restart", restartGame);
  $(document).on("click", "#skip", timer.skip);
  
});

function displayQuestion() {
  if(trivia.index < 7) {
    $("#trivia").empty();
    var question = $("<div>");
    question.addClass("trivia-question");
    question.addClass("text-center");
    question.text(trivia.questions[trivia.index].question);
    $("#trivia").append(question);
    $(".trivia-question").append("<br>");
  
    var answer_a = $("<button>");
    answer_a.addClass("trivia-answer");
    answer_a.attr("value", "a");
    answer_a.text(trivia.questions[trivia.index].a);
    $(".trivia-question").append("<br>");
    $(".trivia-question").append(answer_a);
  
    var answer_b = $("<button>");
    answer_b.addClass("trivia-answer");
    answer_b.attr("value", "b");
    answer_b.text(trivia.questions[trivia.index].b);
    $(".trivia-question").append("<br>");
    $(".trivia-question").append(answer_b);
  
    var answer_c = $("<button>");
    answer_c.addClass("trivia-answer");
    answer_c.attr("value", "c");
    answer_c.text(trivia.questions[trivia.index].c);
    $(".trivia-question").append("<br>");
    $(".trivia-question").append(answer_c);
    
    var answer_d = $("<button>");
    answer_d.addClass("trivia-answer");
    answer_d.attr("value", "d");
    answer_d.text(trivia.questions[trivia.index].d);
    $(".trivia-question").append("<br>");
    $(".trivia-question").append(answer_d);
  
    timer.reset();
  } else {
    gameOver();
  }
  
};

function checkUserAnswer(){
  timer.stop();
  $("#trivia").empty();
  
  if (this.value === trivia.questions[trivia.index].answerLetter){
    numberCorrect++;
    $("#trivia").append('<div><b>Correct!</b></div>');
  } else {
    numberIncorrect++;
    $("#trivia").append('<div><b>Incorrect!</b></div>');
  }

  $("#trivia").append('<div><b>Answer: </b>' + trivia.questions[trivia.index].answer + '</div>');
  $("#trivia").append('<div><b>Explanation: </b>' + trivia.questions[trivia.index].explanation + '</div>');
  $("#trivia").append('<img src="' + trivia.questions[trivia.index].gif + '" alt="gif" class="gif" >');
  timer.nextQuestionInterval();
};

function gameOver(){
  $("#time").html(restartButton);
  $("#trivia").empty();
  $("#trivia").append('<br>');
  $("#trivia").append('<div>Game Over!</div>');
  $("#trivia").append('<div>Correct: ' + numberCorrect + '</div>');
  $("#trivia").append('<div>Incorrect: ' + numberIncorrect + '</div>');
  $("#trivia").append('<div>Un-answered: ' + numberUnanswered + '</div>');
  $("#trivia").append('<img src="assets/images/game-over.gif" alt="incorrect-gif" class="gif" >');
}

function restartGame(){
  numberCorrect = 0;
  numberIncorrect = 0;
  numberUnanswered = 0;
  trivia.index = 0;
  displayQuestion();
}

