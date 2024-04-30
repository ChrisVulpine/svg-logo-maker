// packages 
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./shapes");








inquirer.createPromptModule([
    {
        name: "characters",
        type: "input",
        message: "Input the characters for your logo (maximum of 3):",
    },

    {
        name: "textColor",
        type: "input",
        message: "Input a text color (example: `green` OR `#2BA404`):",
    },
    {
        name: "shape",
        type: "list",
        message: "Choose from the following shape options:",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        name: "shapeColor",
        type: "input",
        message: 
        "Input a color for your shape (example: `green` OR `#2BA404`):",
    },
]);