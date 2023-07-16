const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const {triangle, circle, square} = require('./lib/shapes.js');
const { writeFile } = require('fs/promises');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What 3 characters would you like in your logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your logo text to be? Can be keyword or hexadecimal number.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like your logo to be? Can be keyword or hexadecimal number.'
    }
];

function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        console.log(answer);
        let shape
        if(answer.shape == 'triangle') {
            shape = new triangle(answer.color);
        } else if(answer.shape == 'circle') {
            shape = new circle(answer.color);
        } else if(answer.shape == 'square') {
            shape = new square(answer.color);
        }
        console.log(shape)
        const svg = `
                        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            ${shape.render()}
                            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
                        </svg>
                        `
        fs.writeFileSync('./logo.svg', svg)
    });
}

init();