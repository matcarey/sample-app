var io = require('io-demo');
var remaining = 5;
var right = 0;
var wrong = 0;

io.divider();
io.output('Try some basic maths');
io.divider();
function askQuestion() {
  var a = Math.ceil(Math.random()*50);
  var b = Math.ceil(Math.random()*50);
  io.input('What is ' + a + ' + ' + b + '?').then(function (answer) {
    if (answer === ('' + (a + b))) {
      right++;
    } else {
      wrong++;
    }
    askQuestionOrDisplayResults();
  });
}
function askQuestionOrDisplayResults() {
  if (remaining > 0) {
    remaining--;
    askQuestion();
  } else {
    io.divider();
    io.output('Results');
    io.divider();
    io.output('Right:', right);
    io.output('Wrong:', wrong);
    io.end();
  }
}
askQuestionOrDisplayResults();
