
var readlineSync = require('readline-sync');
var score=0
var userName=readlineSync.question('May I Know your Name? ')
console.log("Hello "+userName+"!,Let's start with How Well Do You Actually Know Taylor Swift?.")

function play(question,answer)
{
  var userAnswer=readlineSync.question(question)
  if(userAnswer==answer)
{
  console.log("You are Right")
 score=score+1;
}
else
{
  console.log("You are Wrong")
 score=score-1;
}
console.log("Your Current Score is:"+score)
console.log("--------------")
}
 
var questions=[{question:"What's her middle name? ",answer:"Alison"},
 {question:"When was Taylor Swift born? ",answer:"December 13"},
{question:"How many siblings does Taylor have? ",answer:"One"},
 {question:"Who taught Taylor how to play guitar? ",answer:"Computer repairman"},
{question:"How many Grammys has she won? ",answer:"10"},
{question:"When Taylor was 11 she... ",answer:"Sang the National Anthem at a 76ers game"},
{question:"How many albums has Taylor released? ",answer:"6"},
{question:"How many people has she publicly dated? ",answer:"10"},
{question:"What's her lucky number? ", answer:"13"}


]
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Your total score is "+score)
