var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("what's your name? ");

console.log("welcome " + userName + " To - Do you know prateek? , You can just put a,b or c as your answers!");

//play function

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
  score = score + 1;
 }else {
    console.log("wrong!");
  }
 console.log("current score", score);
 console.log("----------");
}

var questions=[ {
  question : "where do i live? (a) bangalore (b) patna (c) delhi ",
  answer : "b",
},{
  question : "my favourite superhero is? (a) iron man (b)thor (c) logan ",
  answer : "c",
},{
  question:" my favourite Movie is ? (a) pirates of the carribean (b) interstellar (c) hangover ",
  answer: "a"
},{
  question: "my favourite sport is ? (a) cricket (b) football (c) basketball ",
  answer: "b"
},{
  question: "my favourite meal is ? (a) burger (b) pizza (c)biryani ",
  answer: "c"
}]
for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer)
}
console.log("yay! you scored:", score);

