
//Variables used to link the Javascript 
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Questions used to create teh ReadMe file
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: "title"
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: "motivation"
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'build'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problem'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'To add a screenshot use ![alt text](assets/images/screenshot.png)',
        name: 'image'
    },
    {
        type: 'input',
        message: 'List all the collaborators and the GitHub profiles',
        name: 'collaborators'
    },
    {
        type: 'input',
        message: 'Did you use any third-party assets or follow any tutorials? ',
        name: 'assets'
    },
    {
        type: 'list',
        message: 'Please choose a license.',
        name: 'license',
        choices: ['General Public License', 'Mozilla Public License', 'Apache License', 'MIT License', 'Boost Software License', 'Unlicense']
    },
    {
        type: 'input',
        message: 'Please list the features for your project.',
        name: 'features'
    },
    {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'How do you test your application?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub user name.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter you email for any further questions.',
        name: 'email'
    },

]).then((data) => {
    console.log(data);
    const stringLiteral = generateMarkdown(data);
    writeToFile("README.md", stringLiteral)
})
//Function to create the Readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    })
}

