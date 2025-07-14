#!/usr/bin/env node
/// Todo List In TypeScript//

import inquirer from "inquirer";
async function main() {
let todolist = [];
let condition = true;
console.log("Welcome to Code With Mehwish");
while (condition) {
 let userinput = await inquirer.prompt([
    {
    name: "TodoItem",
    type: "input", 
    message: "What do you want to add to the todo list?",
    },
    {
    name: "AddMore", 
    type: "confirm", 
    message: "Do you want to add more?",
    }
    ]);
    todolist.push(userinput.TodoItem);
    condition = userinput.AddMore;
    }
    console.log("Todo List:");
    for (let i = 0; i < todolist.length; i++) {
    console.log(todolist[i]);
     }

   let deletetodoitem = await inquirer.prompt([
   {
   name: "deleteTodoItem", 
   type: "confirm", 
   message: "Do you want to delete some todo items?",
   }
   ]);
   if (deletetodoitem.deleteTodoItem) {
    let deleteInput = await inquirer.prompt([
    {
    name: "indexToDelete", 
    type: "input", 
    message: "Enter the index of the item you want to delete:",
    }
    ]);
    let indexToDelete = parseInt(deleteInput.indexToDelete);
    if (!isNaN(indexToDelete) && indexToDelete >= 0 && 
    indexToDelete < todolist.length) {
    todolist.splice(indexToDelete, 1);
    console.log("Item deleted successfully!");
    } else {
    console.log("Invalid index. Deletion failed.");
    }
    }
    console.log("Updated Todo List:");
    for (let i = 0; i < todolist.length; i++) {
    console.log(todolist[i]);
    }
    }
    main();