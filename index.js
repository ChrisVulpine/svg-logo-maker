const inquirer = require("inquirer");
const fs = require("fs");

const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


const questions = [
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
];

function logoQuestions() {
    return inquirer.prompt(questions);
};

function createLogo(answers) {
    const { characters, textColor, shape, shapeColor } = answers;
    let shapeRender = '';

    // Render text SVG
    const logoText = `<text x="150" y="105" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="45">${characters}</text>`;

    // Render shape SVG based on user's choice
    switch (shape) {
        case 'Circle':
            const circle = new Circle(shapeColor);
            shapeRender = circle.render();
            break;
        case 'Square':
            const square = new Square(shapeColor);
            shapeRender = square.render();
            break;
        case 'Triangle':
            const triangle = new Triangle(shapeColor);
            shapeRender = triangle.render();
            break;
    }

    // Combine text and shape SVG into final logo SVG
    const svg = `<svg width="300" height="250" xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
    ${logoText}
</svg>`;

    return svg;
}


// Function to check color values
function colorCheck(value) {
    let colorName = new RegExp(/^[a-zA-Z]+$/);
    let colorHex = new RegExp(/^#[A-Fa-f0-9]{6}$/);
    return colorName.test(value) || colorHex.test(value);
};



logoQuestions().then((answers) => {
    const logo = createLogo(answers);
    const resultPath = `./examples/logo.svg`;

    fs.writeFile(resultPath, logo, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Generated logo.svg');
    })
});