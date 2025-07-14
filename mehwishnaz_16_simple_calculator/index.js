#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter FirstNumber",
        type: "number",
        name: "FirstNumber" },
    { message: "Enter SecondNumber",
        type: "number",
        name: "SecondNumber" },
    { message: "Select one of the operators to perform action",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"], },
]); //conditional statement
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.Operator === "Modulus") {
    console.log(answer.FirstNumber % answer.SecondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
console.log("The End");
