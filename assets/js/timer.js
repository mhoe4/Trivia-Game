// Timer
// =============================

//  Variable that will hold our setInterval that runs the timer
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

var myTimeout;

// Our timer object
var timer = {

  time: 30,

  reset: function() {

    timer.time = 30;

    $("#time").html('<div class="card-subtitle mb-2 text-center my-text">' +
    '<span>Time Remaining: </span><span id="timer">30</span><span> Seconds</span>' +
    '</div>');
    timer.start();
    myTimeout = setTimeout(timer.timeUp, 1000 * 30);
  },
  start: function() {

    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {

    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {

    // increment time by 1, remember we cant use "this" here.
    timer.time--;

    // show the converted time in the "timer" div.
    $("#timer").text(timer.time);
  },
  timeUp: function() {
    timer.stop();
    $("#trivia").empty();
    $("#trivia").append("<div>times up</div>");
  }
};