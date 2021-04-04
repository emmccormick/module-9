// TODO: Include packages needed for this application
const fs = require("fs")

const path = require("path")

const inquirer = require("inquirer")

const generateMarkdown = require("./utils/generateMarkdown")



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please include a short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please include usage information:"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please include contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please include test instructions:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
} 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log("Generating ReadMe")
        //console.log(responses)
        writeToFile("README.md", generateMarkdown(responses))
    })
}

// Function call to initialize app
init();
