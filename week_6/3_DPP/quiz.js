const question1 = "What is 2 + 6?";
const answer1 = 8;
const question2 = "What is the capital of Japan?";
const answer2 = "tokyo";
const question3 = "Is JavaScript case-sensitive? (yes/no)";
const answer3 = "yes";

// Initialize score
let score = 0;
// Question 1
let userAnswer1 = Number(prompt(question1));
if (userAnswer1 === answer1) {
score++;
}
// Question 2
let userAnswer2 = prompt(question2).toLowerCase();
if (userAnswer2 === answer2) {
score++;
}
// Question 3
let userAnswer3 = prompt(question3).toLowerCase();
if (userAnswer3 === answer3) {
score++;
}

// Calculate percentage score
const totalQuestions = 3;
const percentageScore = (score / totalQuestions) * 100;

// Use bitwise OR to round down the percentage score
const roundedScore = percentageScore | 0;

// Prepare result message
let resultMessage = "Quiz Results:\n\n";
resultMessage += "Questions answered correctly: " + score + " out of "
+ totalQuestions + "\n";
resultMessage += "Your score: " + roundedScore + "%\n\n";

// Evaluate performance using logical operators and conditional
statements
if (score === totalQuestions) {
resultMessage += "Excellent! You got all questions right!";
} else if (score > 0 && score < totalQuestions) {
resultMessage += "Good job! You got some questions right.";
} else if (score === 0) {
resultMessage += "Keep practicing! You'll do better next time.";
}

// Display final result
alert(resultMessage);