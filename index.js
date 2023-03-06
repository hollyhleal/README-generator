// Dependencies
const inquirer = require("inquirer"); //object of methods
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Function to initialize app
function init() {
  inquirer
    .prompt([
      //array of questions for user input
      {
        type: "input",
        message: "What is your project title?",
        name: "title",
      },
      {
        type: "input",
        message: "Please give a description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
      },
      {
        type: "list",
        message: "What license should be tied to the project?",
        name: "license",
        choices: ["MIT", "Apache", "GNU", "Mozilla", "N/A"],
      },
      {
        type: "input",
        message: "Please list any collaborators or third-party assets used.",
        name: "credits",
      },
      {
        type: "input",
        message:
          "Write tests for your application. Then provide examples on how to run them here.",
        name: "tests",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])
    .then((data) => {
      fs.writeFile("READMEoutput.md", generateMarkdown(data), (error) =>
        error
          ? console.log(error)
          : console.log("Your README has been created!")
      );
    });
}

// Function call to initialize app
init();
