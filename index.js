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
    {
      type: "input",
      message: "Please give a description of your project.",
      name: "description",
    },
  ])
  .then((responses) => {
    const pageContent = generateFile(responses);
    fs.writeFile("READMEoutput.md", pageContent, (error) =>
      error ? console.log(error) : console.log("Your README has been created!")
    );
  });

function generateFile(responses) {
  const readMe = `# ${responses.title}

  ## Description
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ## Usage
  
  ## License
  
  ## Contributing
  
  ## Tests
  
  ## Questions
  
  For questions, comments or concerns you can reach me at or .`;
  return readMe;
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
