const chalk = require('chalk');
const readlineSync = require('readline-sync');
const log = console.log;

question1 = {
  question: "Which of the following is not a type of Phishing?",
  options: ['Evil Twin', 'Spoofing', 'Watering Hole', 'Angler'],
  ans:'2'
};

question2 = {
  question: "Which of the following is a type of social engineering attack?",
  options: ['Honey Trap', 'Password Attack', 'Drive-by', 'Birthday'],
  ans:'1'
};

question3 = {
  question: "A Non-profit Organisation that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security.",
  options: ['OSCP', 'NIST', 'OWASP', 'ISO'],
  ans:'3'
};

question4 = {
  question: "Which of the following is not a web application vulnerability?",
  options: ['SQL Injection', 'XSS', 'Broken Authentication', 'Tailgating'],
  ans:'4'
};

question5 = {
  question: "Which of the following combination is not a 2FA(Two Factor Authentication)?",
  options: ['Smart Card + PIN', 'Password + OTP', 'Password + IRIS Scan', 'Password + Date of Birth' ],
  ans:'4'
};

question6 = {
  question: "A malware that encrypts victim's files and restricts users from accessing the system. Which kind of attack does the above scenario depicts:",
  options: ['Man in The Middle', 'Zero-day', 'Ransomware', 'SQL Injection'],
  ans:'3'
};

question7 = {
  question: "One-way cryptographic operation performed to produce a string of fixed length with variable input length is called as",
  options: ['Substitution', 'Symmetric encryption', 'Assymetric encrpytion','Hashing'],
  ans:'4'
};

question8 = {
  question: "A two-way encryption scheme in which encryption and decryption are both performed by the same key is known as ___________ Encrpytion.",
  options: ['Asymmetric', 'Symmetric', 'Homomorphic', 'exclusive'],
  ans:'2'
};

var scoreBoard = [
  {
    name: "Akash",
    score: 16
  },
  {
    name: "Sony",
    score: 14
  },
  {
    name: "Kim un",
    score: 13
  }
];

const green = chalk.bold.green;
const greenNb = chalk.green;
const redB = chalk.red;
const yellowB = chalk.yellowBright;
const blue = chalk.bold.blue;

function play(questions){
  for(var i=0;i<questions.length;i++){
    log(i+1+". "+questions[i].question);
    for(var options=1;options<5;options++){
      log("   "+options + ". " + questions[i].options[options-1]);
    }
    var ans;
    while(true){
      ans = readlineSync.question(chalk.blue('ans:'));
      if(ans === '' || ans === '1' || ans === '2' || ans === '3'||ans === '4' ){
        break
      } else {
        log('Invalid Option. Choose 1, 2, 3 or 4.');
      }
    }

    if(ans === questions[i].ans){
      log(green('Correct Answer!'));
      score += 2;
    } else if(ans === ''){
      log(yellowB('Skipped!'));
    }else {
      log(redB('Wrong Answer!'));
      score--;
    }
    log('\n');
  }
}

function printScore(){
  log("SCORE BOARD");
  for(var pl=0;pl<scoreBoard.length;pl++){
    log(pl+1 + ". "+scoreBoard[pl].name+": "+scoreBoard[pl].score);
  }
  log(green("..."+userName+"(You): "+score+"\n"));
}

Lvl1Questions = [question1, question2, question3, question4, question5];
Lvl2Questions = [question6, question7, question8];

log(chalk.black.bold.yellow("Welcome to Cyber Security Quiz!"));

const userName = readlineSync.question(('Please Enter your name:'),{
  deafultInput: 'Unkown'
});

log("\nHello "+green(userName)+"! Let's Begin");

var levelClear = false;
var score = 0;
log(blue("\nLevel 1"));

play(Lvl1Questions);

printScore();

if(score>=6){
  log('Get Ready for Level 2\n');
  if (readlineSync.keyInYN('Press Y when ready...')){
    log("\n");
    play(Lvl2Questions);
    printScore();
  }
} else {
  log('Score 6 or more to proceed to next level!');
}

if(score>=scoreBoard[scoreBoard.length-1].score){
  log("Congratulations "+ userName + ", you made it to the top.\nPlease send the screenshot of the score board to update your score.");
}

