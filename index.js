var readLineSync = require("readline-sync");
var score = 0;
function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer === answer){
    console.log("you're right!");
    score++;
  } else {
    console.log("you're wrong!");
  }
}

var questionOne = {
  question: "Who is my favorite superhero?",
  answer: "chota bheem"
}

var questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "hello darkness"
}

var questionThree = {
  question: "Which is my favorite movie?",
  answer: "chota bheem"
}

var questionFour = {
  question: "Which is my favorite meal?",
  answer: "laddu"
}

var questionFive = {
  question: "Which is my favorite pet?",
  answer: "bandar"
}

var questionSix = {
  question: "Who is my favorite villian?",
  answer: "kalia"
}

var highScores = [{
  rank: 1,
  name: "Tanay",
  score: 6
},
{
  rank: 2,
  name: "Mohit",
  score: 5
},
{
  rank: 3,
  name: "Nikhil",
  score: 4
}
];

var userName = readLineSync.question("What's your name?");

console.log("Hi " + userName + "! Let's test how well do you know me!");
console.log("------------------------");
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
for(var i=0;i<questions.length;i++){
  var currQuestion = questions[i];
  play(currQuestion.question, currQuestion.answer);
  console.log("------------------------");
}
console.log("High Scores");
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].rank + ". "+highScores[i].name+":"+ highScores[i].score);
}

console.log("Your Score is: "+score);

if(score>highScores[2].score){
  console.log("Congratulations!! Now you're in the top 3.");
  console.log("Please send the screenshot to update your score.");
} else {
  console.log("Guess you don't know me that well!");
}