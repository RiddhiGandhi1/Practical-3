var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.cyan("Welcome to the game:"), chalk.yellow("How Well Do You Know Node.js?"));
var playerName = readlineSync.question('Enter Your Name: ');
console.log(chalk.green(`Welcome ${playerName}`));
console.log("\nThere will be 5 questions.");
console.log(chalk.red("+5 points for correct answer. -2 for wrong answer.\n"))

var questions = 
[
    {
       question: `In which language is Node.js written?`,
        A: 'JavaScript', 
        B: 'C', 
        C: 'C++', 
        D: 'All of the above',
        answer: 'd'
    },
    {
       question: `Which of the following extension is used to save the Node.js files?`,
       A: '.js', 
       B: '.node', 
       C: '.java', 
       D: '.txt',
       answer: 'a'
    },
    {
        question: `What does the fs module stand for?`,
        A: 'File Service', 
        B: 'File System', 
        C: 'File Store', 
        D: 'File Sharing',
        answer: 'b'
     },
     {
        question: `Which of the following template engines can be used with Node.js?`,
        A: 'Jade', 
        B: 'Vash', 
        C: 'Handlebars', 
        D: 'All of the above',
        answer: 'c'
     },
     {
        question: `What is the default scope in the Node.js application?`,
        A: 'Global', 
        B: 'Local', 
        C: 'Global Function', 
        D: 'Local to object',
        answer: 'b'
     },
];

var score = 0;
var best = 15;

for(var i = 0; i < questions.length; i++)
{
    var n = i+1;
    console.log(chalk.inverse(n + '. ' + questions[i].question));
    console.log(chalk.cyan('A: ' + questions[i].A));
    console.log(chalk.cyan('B: ' + questions[i].B));
    console.log(chalk.cyan('C: ' + questions[i].C));
    console.log(chalk.cyan('D: ' + questions[i].D + "\n"));
    
    var answer = readlineSync.question('Answer: ');

    if(answer.toLowerCase() === questions[i].answer.toLowerCase()) {
        console.log(chalk.bgGreen('Correct'));
        score = score + 5;
    }else {
        console.log(chalk.bgRed('Incorrect'));
        console.log(chalk.cyan('Correct Answer is: ' + questions[i].answer));
        score = score -2;
    }
    console.log(chalk.yellowBright('Your score is  :' + score  +"\n"));      
}
if(score > best) {
    console.log(chalk.yellow('Congratulations ! This is the best score \n'))
    best = score
}
console.log(chalk.red(playerName +' your final score is: '+ score));
console.log(chalk.green("Thank you for playing!"))