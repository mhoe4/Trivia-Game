
$(document).ready(function() {
  // Display game instructions in fancy box when game info button is clicked
  $("#game-info").on("click", function() {

    $.fancybox.open('<div class="message text-center"><h2>How to Play!</h2>\
    <p>A random number between 19-120 is generated at the beginning of the game and is displayed in the top left. This is your target number.</p>\
    <p>There are four crystals, each assigned a random value between 1-12. Clicking on a crystal will add the value of that crystal to your score, which is displayed at the bottom of the screen.</p>\
    <p>The user wins the game by matching the value of their score to the target number. The user loses if they go over the target number.</p>\
    <p>When the user either wins or loses a game, a new target number is generated and new values are assigned to each crystal. Wins and loses are tracked along the way!</p>\
    </div>');
  });
  
  $("#start").on("click", startTrivia);
  $(document).on("click", ".trivia-answer", checkUserAnswer);
  
});

function startTrivia() {
  timer.reset();
  displayQuestion();
};

function displayQuestion() {
  $("#trivia").empty();
  var q = $("<div>");
  q.addClass("trivia-question");
  q.addClass("text-center");
  q.text(trivia.questions[trivia.index].q);
  $("#trivia").append(q);

  var a = $("<button>");
  a.addClass("trivia-answer");
  a.attr("value", "a");
  a.text(trivia.questions[trivia.index].a);
  $(".trivia-question").append("<br>");
  $(".trivia-question").append(a);

  var b = $("<button>");
  b.addClass("trivia-answer");
  b.attr("value", "b");
  b.text(trivia.questions[trivia.index].b);
  $(".trivia-question").append("<br>");
  $(".trivia-question").append(b);

  var c = $("<button>");
  c.addClass("trivia-answer");
  c.attr("value", "c");
  c.text(trivia.questions[trivia.index].c);
  $(".trivia-question").append("<br>");
  $(".trivia-question").append(c);
  
  var d = $("<button>");
  d.addClass("trivia-answer");
  d.attr("value", "d");
  d.text(trivia.questions[trivia.index].d);
  $(".trivia-question").append("<br>");
  $(".trivia-question").append(d);
};

function checkUserAnswer(){
  timer.stop();
  $("#trivia").empty();
  if (this.value === trivia.questions[trivia.index].answer){
    $("#trivia").append("<div>correct</div>");
  } else {
    $("#trivia").append("<div>wrong</div>");
  }
};

