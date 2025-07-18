import inquirer from 'inquirer';
import chalk from 'chalk';

// Define your quiz questions
console.log(chalk.blueBright.bold.underline("\n\t  Welcome to General Knowledge Quiz Of Pakistan with MehwishNaz  \n\t"));
const questions = [
    {
       name: "question1",
    type: "list",
    message: "What is the capital city of Pakistan?",
    choices: ["Karachi", "Islamabad", "Lahore", "Hyderabad"],
    correctAnswer: "Islamabad",
  },
  {
    name: "question2",
    type: "list",
    message: "Who is the founder of Pakistan?",
    choices: [
      "Muhammad Ali Jinnah",
      "Liaquat Ali Khan",
      "Allama Iqbal",
      "Benazir Bhutto",
    ],
    correctAnswer: "Muhammad Ali Jinnah",
  },
  {
    name: "question3",
    type: "list",
    message: "Which province of Pakistan is known as the Land of Five Rivers?",
    choices: ["Sindh", "Balochistan", "Punjab", "Khyber Pakhtunkhwa"],
    correctAnswer: "Punjab",
  },
  {
    name: "question4",
    type: "list",
    message:
      'Which Pakistani scientist is known as the "Father of Pakistan s Nuclear Program?',
    choices: [
      "Dr. Abdul Qadeer Khan",
      "Dr. Abdus Salam",
      "Dr. Pervez Hoodbhoy",
      "Dr. Samar Mubarakmand ",
    ],
    correctAnswer: "Dr. Abdul Qadeer Khan",
  },
  {
    name: "question5",
    type: "list",
    message: "What is the name of the highest mountain in Pakistan?",
    choices: ["Mount Everest", "Nanga Parbat", "Gasherbrum", "K2"],
    correctAnswer: "K2",
  },
  {
    name: "question6",
    type: "list",
    message: "What is the national sport of Pakistan? ",
    choices: ["Cricket", "Field Hockey", "Kabaddi", "Squash"],
    correctAnswer: "Field Hockey",
  },
  {
    name: "question7",
    type: "list",
    message: "Pakistans national anthem is written in which language?",
    choices: ["Urdu", "Punjabi", "Sindhi", "Persian"],
    correctAnswer: "Persian",
  },
  {
    name: "question8",
    type: "list",
    message: "What is the currency of Pakistan? ",
    choices: ["Rupee", "Rial", "USD", "Pound"],
    correctAnswer: "Rupee",
  },
  {
    name: "question9",
    type: "list",
    message: "Pakistan became an independent nation in which year?",
    choices: ["1937", "1945", "1947", "1950"],
    correctAnswer: "1947",
  },
  {
    name: "question10",
    type: "list",
    message: "what is the national plant of Pakistan?",
    choices: ["Rose", "Daffodils", "Sunflower", "Juniper"],
    correctAnswer: "Juniper",},
    // Add other questions similarly...
];

// Function to start the quiz
startQuiz();

async function startQuiz() {
    console.log(chalk.yellow.bold.underline('Let\'s Start Quiz!\n'));

    // Ask each question in sequence
    const answers = await inquirer.prompt(questions);

    // Calculate and display the result
    const score = calculateScore(answers);
    console.log(chalk.greenBright.bold.underline(`\nYour score: ${score}/${questions.length}`));

    // Optionally, you can display the correct answers
    displayCorrectAnswers(answers);
}

// Function to calculate the score
function calculateScore(answers: any): number {
    let score = 0;
    questions.forEach(question => {
        if (answers[question.name] === question.correctAnswer) {
            score++;
        }
    });
    return score;
}

// Function to display correct answers
function displayCorrectAnswers(answers: any) {
    console.log(chalk.bgYellowBright.bold.underline('\nCorrect Answers:'));
    questions.forEach((question, index) => {
        console.log(chalk.yellowBright.bold(`Question ${index + 1}: ${question.message}`));
        console.log(`Your answer: ${answers[question.name]}`);
        console.log(`Correct answer: ${question.correctAnswer}`);
        console.log();
    });
}