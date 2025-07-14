#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Word Counter With MehwishNaz");
const ans = await inquirer.prompt([
    {
        name: "sent",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = ans.sent.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is: ${words.length}`);
