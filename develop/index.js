const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter what the project is suggested to be used for.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you used',
        choices: ['MIT', 'Apache', 'GPL'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your GitHub'
    },
];

function runQuery(){
    inquirer
        .prompt(questions)
        .then((data)=>{
            const markDown = generateMarkdown(data)
            fs.writeFile('README.md', markDown, function(err){
                if(err){console.log(`Couldn't save file`)}
                else{console.log(`File save successfully`)}
            })
            return data
        })
        .catch((error)=>{
            console.log(error)
        })
}
runQuery()