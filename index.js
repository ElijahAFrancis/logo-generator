const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateLogo = require('./utils/generateLogo');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What 3 characters would you like in your logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your logo text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['triange', 'circle', 'square']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like your logo to be?'
    }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        console.log(answer);
        writeToFile('./logo.svg', generateLogo(answer))
    });
}

init();