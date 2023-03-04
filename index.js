const inquirer = require("inquirer"); //object of methods
const fs = require("fs");
//Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
  ])
  .then((responses) => {
    const htmlContent = generateHTML(responses);
    fs.writeFile("README.md", htmlContent, (error) =>
      error ? console.log(error) : console.log("Your README has been created!")
    );
  });

function generateHTML(responses) {
  const HTML = ``;
  return HTML;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
