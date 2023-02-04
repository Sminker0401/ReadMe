// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// writing files
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
// };

// writing file


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your readme',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what your program does',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'give directions on installing your program',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'give directions on how to use your program',
    },
    {
        type: 'input',
        name: 'contribution_guidlines',
        message: 'give instructions on how to contribute',
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: 'give instructions on how to test this program',
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose your prefered license',
        choices:['MIT','IBM','Apache'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=> {
        fs.writeFileSync("./output/README.md", generateMarkdown (data))
    })
}

// Function call to initialize app
init();
