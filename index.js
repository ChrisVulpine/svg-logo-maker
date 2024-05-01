// packages 
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./shapes");








inquirer.prompt([
    {
        name: "characters",
        type: "input",
        message: "Input the characters for your logo (maximum of 3):",
        validate: (value) => value.length <= 3 ? true : '3 characters is the maximum!'
    },

    {
        name: "textColor",
        type: "input",
        message: "Input a text color (example: `green` OR `#2BA404`):",
        validate: (value) => colorCheck(value) ? true : 'Please enter a color.'
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
        validate: (value) => colorCheck(value) ? true : 'Please enter a color.'
    },
]);

// Function to check color values
function colorCheck(value) {
    let colorName = new RegExp(/^[a-zA-Z]+$/);
    let colorHex = new RegExp(/^#[A-Fa-f0-9]{6}$/);
    return colorName.test(value) || colorHex.test(value);
};