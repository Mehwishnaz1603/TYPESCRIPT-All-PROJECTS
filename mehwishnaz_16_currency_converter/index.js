#! /usr/bin/env node
import inquirer from "inquirer";
let currency = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select your currency",
        choices: ["PKR", "USD", "EURO", "POUND"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select currency to which you want to convert",
        choices: ["PKR", "USD", "EURO", "POUND"]
    }
]);
let amount = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message: "Enter amount to convert"
    }
]);
if (currency.fromCurrency == "PKR" && currency.toCurrency == "USD") {
    console.log(`Your converted amount is ${amount.amount / 200}`);
}
else if (currency.fromCurrency == "PKR" && currency.toCurrency == "EURO") {
    console.log(`Your converted amount is ${amount.amount / 270}`);
}
else if (currency.fromCurrency == "PKR" && currency.toCurrency == "POUND") {
    console.log(`Your converted amount is ${amount.amount / 370}`);
}
else if (currency.fromCurrency == "USD" && currency.toCurrency == "PKR") {
    console.log(`Your converted amount is ${amount.amount * 200}`);
}
else if (currency.fromCurrency == "USD" && currency.toCurrency == "EURO") {
    console.log(`Your converted amount is ${amount.amount * 0.9}`);
}
else if (currency.fromCurrency == "USD" && currency.toCurrency == "POUND") {
    console.log(`Your converted amount is ${amount.amount * 0.8}`);
}
else if (currency.fromCurrency == "EURO" && currency.toCurrency == "PKR") {
    console.log(`Your converted amount is ${amount.amount * 270}`);
}
else if (currency.fromCurrency == "EURO" && currency.toCurrency == "USD") {
    console.log(`Your converted amount is ${amount.amount * 1.1}`);
}
else if (currency.fromCurrency == "EURO" && currency.toCurrency == "POUND") {
    console.log(`Your converted amount is ${amount.amount * 0.9}`);
}
else if (currency.fromCurrency == "POUND" && currency.toCurrency == "PKR") {
    console.log(`Your converted amount is ${amount.amount * 370}`);
}
else if (currency.fromCurrency == "POUND" && currency.toCurrency == "USD") {
    console.log(`Your converted amount is ${amount.amount * 1.2}`);
}
else if (currency.fromCurrency == "POUND" && currency.toCurrency == "EURO") {
    console.log(`Your converted amount is ${amount.amount * 1.1}`);
}
else if (currency.fromCurrency == currency.toCurrency) {
    console.log(`No need to convert!`);
}
else {
    console.log("Invalid input");
}
